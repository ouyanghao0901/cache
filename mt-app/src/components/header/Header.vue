<template>
  <div class="header">
    <!-- 顶部通栏 -->
    <div class="top-wrapper">
      <form class="search-wrapper">
        <input type="text" class="search-bar" placeholder="搜索店内商品">
      </form>
    </div>
    <!-- 背景图片 -->
    <div class="bg-wrapper" :style="head_pic_url">
      <!-- <img :src="posiInfo.head_pic_url" alt=""> -->
    </div>
    <!-- 主题部分 -->
    <div class="center-wrapper">
      <div :style="head_bg" class="logo"></div>
      <div class="name">
        <h5>{{posiInfo.name}}</h5>
      </div>
    </div>
    <!-- 活动公告 -->
    <div @click="showHD" class="bulletin-wrapper">
      <span v-if="posiInfo.discounts2" class="text"><div class="shou">首</div>{{posiInfo.discounts2[0].info}}</span>
      <span v-if="posiInfo.discounts2" class="detail">{{posiInfo.discounts2.length}}个活动 &gt;</span>
    </div>


    <transition name="fade">
      <!-- 公告详情 -->
    <div class="bulletin-detail" v-show="isShow">
      <div class="detail-wrapper">
        <!-- 相关内容 -->
        <div class="main-wrapper" :style="detail_bg">
          <div :style="head_bg" class="iconHD"></div>
          <h4>{{posiInfo.name}}</h4>
          <!-- 星级评价 -->
          <div class="score">
            <start :score="posiInfo.wm_poi_score"></start>
            <span>{{posiInfo.wm_poi_score}}</span>
          </div>
          <p class="tip">
            {{posiInfo.min_price_tip}} <i>|</i> {{posiInfo.shipping_fee_tip}} <i>|</i> {{posiInfo.delivery_time_tip}}
          </p>
          <p class="time">
            配送时间: {{posiInfo.shipping_time}}
          </p>
          <div class="hengxian"></div>
          <span v-if="posiInfo.discounts2" class="texts"><div class="shou">首</div>{{posiInfo.discounts2[0].info}}</span>
        </div>
        <!-- 关闭 -->
        <div class="close-wrapper">
          <i @click="closeHD">&times;</i>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import start from '@/components/header/start'
export default {
  data(){
    return{
      isShow:false,
      score:4
    }
  },
  props: {
    posiInfo: {
      type: Object,
      default: {}
    }
  },
  computed: {
    head_pic_url() {
      return "background-image:url(" + this.posiInfo.head_pic_url + ")";
    },
    head_bg() {
      return "background-image:url(" + this.posiInfo.pic_url + ")";
    },
    detail_bg(){
      return "background-image:url("+this.posiInfo.poi_back_pic_url+")"
    }
  },
  methods:{
    showHD(){
      this.isShow = true;
    },
    closeHD(){
      this.isShow = false;
    }
  },
  components:{
    start,
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 130px;
  padding-top: 20px;
}
.header .top-wrapper {
  width: 100%;
  padding: 0 50px 0 50px;
}
.header .top-wrapper input {
  width: 100%;
  padding: 5px 20px;
  border-radius: 20px;
  outline: none;
  border: 0;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.6);
}

/* 背景图片 */
.header .bg-wrapper {
  width: 100%;
  height: 130px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-size: 100% 135%;
  background-position: center -10px;
}
/* .header .bg-wrapper img{
  width: 100%;
  height: 165px;
} */

.center-wrapper {
  margin-top: 10px;
  padding: 10px;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.center-wrapper .logo {
  height: 50px;
  width: 50px;
  background-size: 100% 100%;
  border-radius: 10px;
  background-repeat: no-repeat;
  cursor: pointer;
}
.center-wrapper .name {
  color: white;
  padding-left: 10px;
  cursor: pointer;
}
.bulletin-wrapper {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  cursor: pointer;
}
/* 公告详情 */
.bulletin-detail{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color:rgba(255, 255, 255, .4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.detail-wrapper{
  position: absolute;
  /* border: 1px solid; */
  width: 90%;
  height: 90%;
  top: 30px;
}
.main-wrapper{
  height: 85%;
  border-radius: 10px;
  background-size: 100% 100%;
  padding: 40px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.main-wrapper .tip,
.main-wrapper .time{
  color: lightgray;
  font-size: 12px;
}
.main-wrapper .hengxian{
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 10px;
}
.main-wrapper .texts{
  margin-top: 20px;
  font-size: 12px;
}
.iconHD{
  width: 50px;
  height: 50px;
  background:no-repeat;
  background-size: 100% 100%;
  border-radius: 5px;
}
.shou{
  display: inline-block;
  background-color: orange;
  padding: 1px;
  margin-right: 2px;
  /* width: 14px;
  height: 14px; */
}
.close-wrapper{
  margin-top: 20px;
  text-align: center;
}
.close-wrapper i{
  margin: auto;
  display: block;
  border: 1px solid;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  color: white;
  background-color: rgba(0, 0, 0,.5);
  cursor: pointer;
  /* background-color: black; */
}
/* 进入的动画效果 */
.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active{
  transition: all 1s;
}
.score{
  display: flex;
  flex-direction: row;
  align-items: center;
}

</style>



