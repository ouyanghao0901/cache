<template>
  <div class="shopcart" :class="{'lighligh':totalCount>0}">
    <div class="shopcart-wrapper">
      <!-- 左侧 -->
      <div class="content-left">
        <div class="logo-wrapper" :class="{'lighligh':totalCount>0}">
          <i
            @click="toggleList"
            class="logo fa fa-shopping-cart"
            :class="{'lighligh':totalCount>0}"
          ></i>
          <i v-show="totalCount" class="num">{{totalCount}}</i>
        </div>
        <div class="desc-wrapper">
          <p v-show="totalPrice" class="total-price">¥{{totalPrice}}</p>
          <p class="tip" :class="{'lighligh':totalCount>0}">另需{{poiInfo.shipping_fee_tip}}</p>
        </div>
      </div>
      <!-- 右侧 -->
      <div :class="{'lighligh':totalCount>0}" class="content-right">{{payStr}}</div>
      <!-- 购物车列表 -->
      <div class="shopcart-list" :class="{'show':listShow}" v-show="listShow">
        <div v-if="poiInfo.discounts2" class="list-top">{{poiInfo.discounts2[0].info}}</div>
        <div class="list-header">
          <div class="empty" @click="clearAll">
            <img src="./img/ash_bin.png">
            <span>清空购物车</span>
          </div>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li v-for="(food,index) in selectFoods" :key="index" class="food-item">
              <div class="desc-wrapper">
                <div class="desc-left">
                  <p class="name">{{food.name}}</p>
                  <!-- <p class="unit" v-show="!food.description">{{food.unit}}</p>
                  <p class="description" v-show="!food.unit">{{food.description}}</p>-->
                </div>
                <div class="desc-right">¥ {{food.min_price}}</div>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
        <div class="list-bottom"></div>
      </div>
    </div>
    <div class="shopcart-mask" v-show="listShow" @click="hideMask"></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import cartcontrol from "@/components/cartcontrol/CartControl";
export default {
  data() {
    return {
      fold: true
    };
  },
  props: {
    poiInfo: {},
    selectFoods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    totalCount() {
      let num = 0;
      this.selectFoods.forEach(food => {
        num += food.count;
      });
      return num;
    },
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.min_price * food.count;
      });
      return total;
    },
    payStr() {
      if (this.totalCount > 0) {
        return "去结算";
      } else {
        return this.poiInfo.min_price_tip;
      }
    },
    listShow() {
      if (!this.totalCount) {
        this.fold = true;
        return false;
      }
      let show = !this.fold;

      if (show) {
        this.$nextTick(() => {
          if(!this.shopScroll){
            this.shopScroll = new BScroll(this.$refs.listContent,{
              // click:true
            })
          }else{
            // this.shopScroll.refresh()
          }
          // new BScroll(this.$refs.listContent, {
          //   click: true
          // });
        });
      }

      return show;
    }
  },
  methods: {
    toggleList() {
      //判断购物车时候为空
      if (!this.totalCount) {
        return;
      }
      this.fold = !this.fold;
    },
    clearAll() {
      this.selectFoods.forEach(food => {
        food.count = 0;
      });
    },
    hideMask() {
      this.fold = true;
    }
  },
  components: {
    cartcontrol
  }
};
</script>

<style>
.shopcart-wrapper {
  width: 100%;
  height: 51px;
  background-color: #514f4f;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 99;
}
.shopcart-wrapper .content-left {
  flex: 1;
}
.shopcart-wrapper .content-left .logo-wrapper {
  width: 50px;
  height: 50px;
  background-color: #666666;
  border-radius: 50%;
  position: relative;
  top: -18px;
  left: 15px;
  text-align: center;
  float: left;
}
.shopcart-wrapper .content-left .logo-wrapper .logo {
  line-height: 50px;
  font-size: 28px;
  color: #c4c4c4;
}
.shopcart-wrapper .content-left .desc-wrapper {
  float: left;
  margin-left: 15px;
}

.shopcart-wrapper .content-left .desc-wrapper .tip {
  font-size: 12px;
  color: #bab9b9;
  line-height: 51px;
}

.shopcart-wrapper .content-right {
  flex: 0 0 110px;
  font-size: 15px;
  color: #bab9b9;
  line-height: 51px;
  text-align: center;
  font-weight: bold;
}
.shopcart-wrapper .content-left .logo-wrapper.lighligh {
  background-color: #ffd161;
}
.shopcart-wrapper .content-left .logo-wrapper .logo.lighligh {
  color: #2d2b2a;
}

.shopcart-wrapper .content-left .desc-wrapper .tip.lighligh {
  line-height: 12px;
}
.shopcart-wrapper .content-right.lighligh {
  background-color: #ffd161;
  color: #2d2b2a;
}

.shopcart-wrapper .content-left .logo-wrapper .num {
  width: 15px;
  height: 15px;
  color: red;
  line-height: 15px;
  border-radius: 50%;
  color: white;
  background-color: red;
  position: absolute;
  font-size: 12px;
  right: 0;
  top: 0;
}
.shopcart-wrapper .content-left .desc-wrapper .total-price {
  font-size: 18px;
  line-height: 18px;
  color: white;
  margin-left: 5px;
  margin-top: 5px;
}

.shopcart-wrapper .shopcart-list {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
}
.shopcart-wrapper .shopcart-list.show {
  transform: translateY(-100%);
}

.shopcart-wrapper .shopcart-list .list-top {
  height: 30px;
  text-align: center;
  font-size: 11px;
  background: #f3e6c6;
  line-height: 30px;
  color: #646158;
}

.shopcart-wrapper .shopcart-list .list-header {
  height: 30px;
  background: #f4f4f4;
}
.shopcart-wrapper .shopcart-list .list-header .title {
  float: left;
  border-left: 4px solid #53c123;
  padding-left: 6px;
  line-height: 30px;
  font-size: 12px;
}
.shopcart-wrapper .shopcart-list .list-header .empty {
  float: right;
  line-height: 30px;
  margin-right: 10px;
  font-size: 0;
}
.shopcart-wrapper .shopcart-list .list-header .empty img {
  height: 14px;
  margin-right: 9px;
  vertical-align: middle;
}
.shopcart-wrapper .shopcart-list .list-header .empty span {
  font-size: 12px;
  vertical-align: middle;
}

.shopcart-wrapper .shopcart-list .list-content {
  max-height: 360px;
  overflow: hidden;
  background: white;
}
.shopcart-wrapper .shopcart-list .list-content .food-item {
  height: 38px;
  padding: 12px 12px 10px 12px;
  border-bottom: 1px solid #f4f4f4;
}
.shopcart-wrapper .shopcart-list .list-content .food-item .desc-wrapper {
  float: left;
  width: 240px;
}
.shopcart-wrapper
  .shopcart-list
  .list-content
  .food-item
  .desc-wrapper
  .desc-left {
  float: left;
  width: 170px;
}
.shopcart-wrapper
  .shopcart-list
  .list-content
  .food-item
  .desc-wrapper
  .desc-left
  .name {
  font-size: 14px;
  margin-bottom: 8px;

  /* 超出部分隐藏*/
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 16px;
}
.shopcart-wrapper
  .shopcart-list
  .list-content
  .food-item
  .desc-wrapper
  .desc-left
  .unit {
  font-size: 12px;
  color: #b4b4b4;
}
.shopcart-wrapper
  .shopcart-list
  .list-content
  .food-item
  .desc-wrapper
  .desc-left
  .description {
  font-size: 12px;
  color: #b4b4b4;

  /* 超出部分隐藏*/
  overflow: hidden;
  height: 12px;
}
.shopcart-wrapper
  .shopcart-list
  .list-content
  .food-item
  .desc-wrapper
  .desc-right {
  float: right;
  width: 70px;
  text-align: right;
}
.shopcart-wrapper
  .shopcart-list
  .list-content
  .food-item
  .desc-wrapper
  .desc-right
  .price {
  font-size: 12px;
  line-height: 38px;
}

.shopcart-wrapper .shopcart-list .list-content .food-item .cartcontrol-wrapper {
  float: right;
  margin-top: 6px;
}

.shopcart .shopcart-mask {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  background: rgba(7, 17, 27, 0.6);
}
</style>
