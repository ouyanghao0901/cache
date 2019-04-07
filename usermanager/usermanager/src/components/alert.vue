<template>
  <div class="alert alert-warning">
    {{msg}}
    <a href="#" class="close" data-dismiss="alert">&times;</a>
  </div>
</template>

<script>
export default {
  name: "alert",
  props:["msg"],
  data(){
    return{

    }
  }
};
</script>

<style>
</style>
