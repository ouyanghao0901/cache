<template>
  <div class="adduser container">
    <div class="header-box">
      <h4 class="page-header">Add Customer</h4>
      <button class="btn btn-default btn-xs" @click="$router.back()">Back</button>
    </div>
    <alerts v-if="msg" :msg="msg"></alerts>
    <form @submit="addcustomer" class="col-sm-8 col-sm-offset-2">
      <div class="well">
        <h4 class="text-center">User Info</h4>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="customer.name" placeholder="Name">
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="customer.phone" placeholder="Phone">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="customer.email" placeholder="Email">
        </div>
        <div class="form-group">
          <label>* Education</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.education"
            placeholder="Education"
          >
        </div>
        <div class="form-group">
          <label>* Graduation School</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.graduationschool"
            placeholder="Graduation School"
          >
        </div>
        <div class="form-group">
          <label>* Profession</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.profession"
            placeholder="Profession"
          >
        </div>
        <div class="form-group">
          <label>* Intro</label>
          <textarea class="form-control" v-model="customer.intro" placeholder="Intro"></textarea>
        </div>
        <div class="form-group">* Optional item</div>
        <button type="submit" class="btn btn-block">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import alerts from "./alert";
export default {
  name: "adduser",
  data() {
    return {
      customer: {},
      msg:''
    };
  },
  methods: {
    addcustomer(e) {
      e.preventDefault();
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.msg="请填写用户信息!"
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          intro: this.customer.intro
        };
        this.$http
          .post("http://localhost:3000/users", newCustomer)
          .then(resp => {
            this.$router.push({
              name:"customers",
              params: { alert: "用户信息添加成功!" }
            });
          });
      }
    }
  },
  components:{
    alerts
  }
};
</script>

<style scoped>
.header-box{
  display: flex;
  flex-direction: row;
align-items: center;
justify-content: space-between;

}
</style>
