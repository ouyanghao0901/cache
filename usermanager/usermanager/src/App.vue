<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle "
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">OUYANGHAO</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">Customers</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/adduser">Add Customer</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  user-select: none;
}
ul>li{
  list-style-type: none;
}
.activerouter {
  border-bottom: 2px solid red;
}
.body {
  position: fixed;
  top: 51px;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 50px;
}

</style>
