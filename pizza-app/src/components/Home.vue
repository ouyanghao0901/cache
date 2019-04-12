<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="bg">
        <h1>欢迎大家品尝</h1>
        <h2>我们精心为你挑选了美味的pizza!</h2>
        <button class="btn btn-info" @click="$router.push({path:'/menu'})">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#home {
  background-image: url("../../static/timg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 10%;
  height: 75vh;
  > h1,
  h2 {
    margin: 6%;
  }
  > .bg {
    background-color: #eee;
    max-width: 70vw;
    opacity: 0.7;
    margin: 0 auto;
    padding: 20px;
  }
}
</style>
