<template>
  <div class="customers container">
    <alerts v-if="alert" :msg="alert"></alerts>
    <h4 class="page-header">Customers</h4>

    <input type="text" class="from-control" placeholder="search" v-model="filterInput">

    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <td>NAME</td>
          <td>PHONE</td>
          <td>EMAIL</td>
          <td></td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item,index) in filterBty(customers,filterInput)" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>
            <router-link class="btn btn-default btn-xs" :to="'/customersdetai/'+item.id">Detail</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import alerts from "./alert";
import customersdetail from "./customersDetail";
export default {
  name: "customers",
  data() {
    return {
      customers: [],
      alert: "",
      filterInput: ""
    };
  },
  methods: {
    fetchCustomers() {
      this.$http.get("http://localhost:3000/users").then(resp => {
        this.customers = resp.data;
      });
    },
    filterBty(customers, filterInput) {
      return customers.filter(item => {
        if (
          item.name.match(filterInput) ||
          item.phone.match(filterInput) ||
          item.email.match(filterInput)
        )
          return item;
      });
    }
  },
  created() {
    if (this.$route.params.alert) {
      this.alert = this.$route.params.alert;
    }
    this.fetchCustomers();
  },
  components: {
    alerts,
    customersdetail
  }
};
</script>

<style scoped>
input {
  width: 100%;
  padding: 3px 20px;
  box-sizing: border-box;
}
table {
  margin-top: 20px;
}
</style>
