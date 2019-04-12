<template>
  <!-- <div class="header"> -->
  <!-- <div class="left">智能点餐系统</div>

    <ul class="center">
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link :to="{name:'menu'}">菜单</router-link>
      </li>
      <li>
        <router-link to="admin">管理</router-link>
      </li>
      <li>
        <router-link to="about">关于我们</router-link>
      </li>
    </ul>

    <ul class="right">
      <li v-if="isLogin">
        <router-link to="" tag="span">欢迎登录:</router-link>
      </li>
      <li v-if="!isLogin">
        <router-link to="login">立即登录</router-link>
      </li>
      <li v-if="isLogin">
        <router-link to="" >{{currentUser}}</router-link>
      </li>
      <li v-if="!isLogin">
        <router-link to="register">马上注册</router-link>
      </li>
      <li v-if="isLogin">
        <router-link to="/login">退出登录</router-link>
      </li>
  </ul>-->
  <!-- </div> -->
  <nav class="navbar-default navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="" class="navbar-brand">智能点餐系统</router-link>
        <button
          type="button"
          class="btn navbar-btn navbar-toggle"
          data-toggle="collapse"
          data-target="#coll"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class=" navbar-collapse collapse" id="coll">
      <ul class="navbar-right navbar-nav nav" >
        <li>
          <router-link to="/">主页</router-link>
        </li>
        <li>
          <router-link to="/menu">菜单</router-link>
        </li>
        <li >
          <router-link to="/admin">管理</router-link>
        </li>
        <li>
          <router-link to="/about">关于我们</router-link>
        </li>
        <li v-if="!isLogin">
          <router-link to="/login">登录</router-link>
        </li>
        <li v-if="isLogin">
          <router-link to>{{currentUser}}</router-link>
        </li>
        <li v-if="!isLogin">
          <router-link to="/register">注册</router-link>
        </li>
        <li v-if="isLogin">
          <router-link to="/login">退出</router-link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    }
  },
  beforeCreate(){

  }
};
</script>

<style lang="scss" scoped>
// @mixin flexbox($dir: row) {
//   display: flex;
//   flex-direction: $dir;
//   @content;
// }

// .header {
//   box-sizing: border-box;
//   padding: 0 20px;
//   height: 50px;
//   background-color: lightgray;
//   @include flexbox();
//   > .left,
//   .center,
//   .right {
//     @include flexbox();
//     align-items: center;
//   }
//   > .left {
//     font-size: 18px;
//   }
//   > .center {
//     flex: 1;
//     height: 100%;
//     padding-left: 50px;
//   }
//   > .right {
//     height: 100%;
//   }
//   li {
//     padding-left: 20px;
//   }
//   a {
//     text-decoration: none;
//   }
// }
</style>

