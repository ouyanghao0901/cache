<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import index from './pages/index'
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  text-align: center;
}
ul>li{
  list-style-type: none;
}

</style>
