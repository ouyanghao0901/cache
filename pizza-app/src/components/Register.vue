<template>
  <div class="container main">
    <div class="top">
      <h1>ZHOUDAN</h1>
      <h1>REGISTER</h1>
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
      <div class="form-group">
        <label class="control-label">确认密码:</label>
        <div>
          <input type="password" class="form-control" v-model="confirmPassword">
        </div>
      </div>
      <button type="submit" class="btn btn-block btn-success">注册</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.password === this.confirmPassword) {
        const data = {
          confirmPassword: this.confirmPassword,
          email: this.email,
          password: this.password
        };
        this.$http
          .post("https://wd3791342287bvwamg.wilddogio.com/user.json", data)
          .then(resp => {
            this.$router.push({ path: "/login",query:{email:this.email} });
          });
      } else {
        alert("密码不一致!");
      }
    }
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

