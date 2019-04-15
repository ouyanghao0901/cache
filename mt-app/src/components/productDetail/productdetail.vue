<template>
  <transition name="food-detail">
    <div class="food" v-show="showFlag">
      <div class="food-wrapper">
        <div class="food-content">
          <div class="img-wrapper">
            <img :src="food.picture" class="food-img">
            <span @click="closeView" class="close-bt">&times;</span>
            <img src="./img/share.png" class="share-bt">
            <img src="./img/more.png" class="more-bt">
          </div>
        <div class="content-wrapper">
        <h3 class="name">{{food.name}}</h3>
        <p class="saled">{{food.month_saled_content}}</p>
        <img v-show="food.product_label_picture" :src="food.product_label_picture" class="product">
        <p class="price">
          <span class="text">¥ {{food.min_price}}</span>
          <span class="unit">{{food.unit}}</span>
        </p>

        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>

        <div @click="addProduct" v-show="!food.count||food.count==0" class="buy">选规格</div>
      </div>
        </div>
      </div>


    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import cartcontrol from "@/components/cartcontrol/CartControl";
export default {
  props: {
    food: {}
  },
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    showView() {
      this.showFlag = true;
    },
    closeView() {
      this.showFlag = false;
    },
    addProduct(){
      Vue.set(this.food,"count",1)
    }
  },
  components: {
    cartcontrol
  }
};
</script>

<style>
.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 51px;
  background: white;
  width: 100%;
  z-index: 90;
}
.food-detail-enter-active,
.food-detail-leave-active {
  transition: 0.5s;
}

.food-detail-enter,
.food-detail-leave-to {
  transform: translateX(100%);
}


.food .food-wrapper .food-content .img-wrapper{
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
}

.food .food-wrapper .food-content .img-wrapper .food-img{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.food .food-wrapper .food-content .img-wrapper .close-bt{
  width: 30px;
  height: 30px;
  position: absolute;
  left: 10px;
  top: 10px;
  text-align: center;
  line-height: 30px;
  font-size: 30px;
  color: white;
  background-color: #7f7f7f;
  border-radius: 50%;
}


.food .food-wrapper .food-content .img-wrapper .share-bt,
.food .food-wrapper .food-content .img-wrapper .more-bt
{
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
}

.food .food-wrapper .food-content .img-wrapper .share-bt{
  right: 50px;
}
.food .food-wrapper .food-content .img-wrapper .more-bt{
  right: 10px;
}

.food .food-wrapper .food-content .content-wrapper{
  padding: 0 0 16px 16px;
  position: relative;
}

.food .food-wrapper .food-content .content-wrapper .name{
  font-size: 15px;
  color: #333333;
  line-height: 30px;
  font-weight: bold;
}

.food .food-wrapper .food-content .content-wrapper .saled{
  font-size: 11px;
  color: #9d9d9d;
  margin-bottom: 6px;
}

.food .food-wrapper .food-content .content-wrapper .product{
  height: 15px;
  margin-bottom: 16px;
}

.food .food-wrapper .food-content .content-wrapper .price{
  font-size: 0;
}

.food .food-wrapper .food-content .content-wrapper .price .unit{
  font-size: 11px;
  color: #9d9d9d;
}

.food .food-wrapper .food-content .cartcontrol-wrapper{
  position: absolute;
  right: 12px;
  bottom: 10px;
  padding: 2px;
}


.food .food-wrapper .food-content .buy{
  width: 64px;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  background: #ffd161;
  border-radius: 30px;
  position: absolute;
  right: 12px;
  bottom: 10px;
}


</style>
