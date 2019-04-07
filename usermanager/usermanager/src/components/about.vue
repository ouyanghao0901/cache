<template>
  <div class="about container">
    <div class="header-box">
      <h4 class="page-header">About</h4>
      <button class="btn btn-xs btn-default" @click="$router.back()">Back</button>
    </div>
    <div>
      <p>如有需要</p>
      <p>请联系qq:824354772</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'about',
  data(){
    return{
    }
  }
}
</script>

<style scoped>
.header-box{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

</style>
