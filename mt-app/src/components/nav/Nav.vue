<template>
  <div class="nav">
    <router-link to="/goods">点餐<div class="line"></div></router-link>
    <router-link to="/ratings">评价({{commentNum}})<div class="line"></div></router-link>
    <router-link to="/seller">商家<div class="line"></div></router-link>
  </div>
</template>

<script>
export default {
  props:{
    commentNum:{
      type:Number
    }
  }
}
</script>

<style lang="scss" scoped>
.nav{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  >a{
    font-size: 13px;
    color: #666666;
    position: relative;
    height: 100%;
    line-height: 40px;
  }
  //选中的样式
  >a.active{
    color: #ffbb22;
    >.line{
      width: 20px;
      height: 2px;
      background-color: #ffbb22;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>

