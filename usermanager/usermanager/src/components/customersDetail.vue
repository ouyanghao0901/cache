<template>
  <div class="details container">
    <div class="head-box">
      <h4 class="page-header">
        <i class="glyphicon glyphicon-user"></i>
        {{customers.name}}
      </h4>
      <div>
        <router-link to="/" class="btn btn-xs btn-default">Back</router-link>
        <router-link :to="'/edit/'+customers.id" class="btn btn-xs btn-primary">Edit</router-link>
        <button class="btn btn-xs btn-danger" @click="deleteItem(customers.id)">Delete</button>
      </div>
    </div>
    <ul class="list-group col-sm-8 col-sm-offset-2">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-phone"></span>
        <span>{{customers.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-envelope"></span>
        <span>{{customers.email}}</span>
      </li>
    </ul>
    <ul class="list-group col-sm-8 col-sm-offset-2">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-book"></span>
        <span>{{customers.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-flag"></span>
        <span>{{customers.graduationschool}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-lock"></span>
        <span>{{customers.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-list-alt"></span>
        <span>{{customers.intro}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customersDetail",
  data() {
    return {
      customers: ""
    };
  },
  methods: {
    fetchCustomers(id) {
      this.$http.get("http://localhost:3000/users/" + id).then(resp => {
        this.customers = resp.data;
      });
    },
    deleteItem(id) {
      if(confirm("Are you sure you want to delete it?")){
        this.$http.delete("http://localhost:3000/users/" + id).then(resp => {
        this.$router.push({
          name: "customers",
          params: {
            alert: "用户信息删除成功!"
          }
        });
      });
      }
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<style scoped>
ul > li > span {
  padding-right: 20px;
}
.head-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
