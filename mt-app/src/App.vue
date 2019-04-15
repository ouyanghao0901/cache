<template>
  <div id="app">
    <!-- 头部 -->
    <headers :posiInfo="posiInfo"></headers>

    <!-- 导航 -->
    <navs :commentNum="commentNum"></navs>

    <!-- 内容 -->
    <keep-alive>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import headers from "@/components/header/Header";
import navs from "@/components/nav/Nav";
// import headers from '@/components/header/Header'
export default {
  name: "App",
  data() {
    return {
      posiInfo: {},
      commentNum:0
    };
  },
  created() {
    fetch("/api/goods")
      .then(resp => resp.json())
      .then(resp => {
        if(resp.code == 0)
        this.posiInfo = resp.data.poi_info;
      });
      //请求ratings
    fetch("/api/ratings")
      .then(resp => resp.json())
      .then(resp => {
        if(resp.code == 0)
        this.commentNum = resp.data.comment_num;
      });
  },
  components: {
    headers,
    navs
  }
};
</script>

<style lang="scss">
* {
  user-select: none;
  margin: 0;
  padding: 0;
}
ul > li {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
}
a:focus,
a:hover{
  text-decoration: none;
}
</style>
