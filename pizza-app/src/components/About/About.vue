<template>
<div class="container main">
    <div class="col-sm-4 left">
      <ul class="list-group">
        <router-link :to="{name:'history'}" tag="li"><a class="list-group-item">历史订单</a></router-link>
        <router-link to="orderguide" tag="li"><a class="list-group-item">点餐文档</a></router-link>
        <router-link to="delivery" tag="li"><a class="list-group-item">快递信息</a></router-link>
        <router-link to="contact" tag="li"><a class="list-group-item">联系我们</a></router-link>
      </ul>
    </div>
    <div class="col-sm-8">
      <router-view />
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.left{
  >.list-group>li{
    margin-top: 10px;
  }
}
</style>

