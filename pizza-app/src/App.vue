<template>
  <div id="app">
    <headers></headers>
    <div class="container bobo">
      <router-view/>
    </div>
    <div class="container">
      <!-- <div class="row"> -->
        <div class="col-sm-12 col-md-4">
          <router-view name="orderguide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import header from "./components/Header";
export default {
  name: "App",
  components: {
    headers: header //与标签名字冲突 所以换名字
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
ul > li {
  list-style-type: none;
}
.bobo{
  margin-top: 51px;
}
</style>


