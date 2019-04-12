<template>
  <div class="container main">
    <div class="top">
      <h1>ZHOUDAN</h1>
      <h1>LOGIN</h1>
    </div>
    <form class="col-sm-6 col-sm-offset-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label class="control-label">邮箱:</label>
        <div>
          <input type="text" class="form-control" autofocus v-model="email">
        </div>
      </div>
      <div class="form-group">
        <label class="control-label">密码:</label>
        <div>
          <input type="password" class="form-control" v-model="password">
        </div>
      </div>
      <button type="submit" class="btn btn-block btn-success">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.$store.dispatch("setUser", null));
  },
  methods: {
    onSubmit() {
      this.$http
        .get("https://wd3791342287bvwamg.wilddogio.com/user.json")
        .then(resp => {
          const data = resp.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            users.push(user);
          }
          let result = users.filter(item => {
            return item.email === this.email && item.password === this.password;
          });
          if (result != null && result.length > 0) {
            // this.$store.dispatch("setUser", result[0].email);
            // this.$router.push({ path: "/" });
            sessionStorage.name=result[0].email;
            this.$router.push({ path: "/" });

          } else alert("密码错误!");
        });
    }
  },
  created() {
    this.email = this.$route.query.email;
  }
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  padding: 50px;
  > .top {
    text-align: center;
  }
  > form {
    margin-top: 70px;
  }
}
</style>

