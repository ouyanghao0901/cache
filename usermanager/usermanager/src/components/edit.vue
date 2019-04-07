<template>
  <div class="edit container">
    <h4 class="page-header">Edit Customer</h4>
    <alerts v-if="msg" :msg="msg"></alerts>
    <form @submit="updatecustomer" class="col-sm-8 col-sm-offset-2">
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
  name: "edit",
  data() {
    return {
      customer: {},
      msg: ""
    };
  },
  methods: {
    fetchCustomer(id) {
      this.$http.get("http://localhost:3000/users/" + id).then(resp => {
        this.customer = resp.data;
      });
    },
    updatecustomer(e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.msg = "请填写用户信息!";
      } else {
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          education: this.customer.education,
          graduationschool: this.customer.graduationschool,
          profession: this.customer.profession,
          intro: this.customer.intro
        };
        this.$http
          .put(
            "http://localhost:3000/users/" + this.$route.params.id,
            updateCustomer
          )
          .then(resp => {
            this.$router.push({
              name: "customers",
              params: { alert: "用户信息修改成功!" }
            });
          });
      }
      e.preventDefault();
    }
  },
  created() {
    this.fetchCustomer(this.$route.params.id);
  },
  components: {
    alerts
  }
};
</script>

<style scoped>
</style>
