<template>
  <div class="main">
    <h4>联系我们</h4>
    <div class="info">联系我们</div>

  <div class="phoneAndNameBox">
    <router-link :to="{name:'phone'}">电话</router-link>
  <router-link :to="{name:'personname'}">联系人</router-link>
  </div>
  <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main{
  margin-top: 10px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  >.info{
    border-top: 1px solid #ebebeb;
    padding-top: 10px;
  }
}
.phoneAndNameBox{
  margin-top: 20px;
  >a{
    text-decoration: none;
  }
}
</style>

