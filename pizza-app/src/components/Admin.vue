<template>
  <div class="row">
    <!-- 添加pizza -->
    <div class="col-sm-12 col-md-8">
      <addpizza></addpizza>
    </div>

    <!-- 品种展示 -->
    <div class="col-sm-12 col-md-4">
      <h3>菜单</h3>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in getMenuItems" :key="index">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button class="btn btn-xs btn-danger" @click="deleteItem(item)">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import addpizza from "./newPizza";
import mapGetters from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    //调用methods中的方法
    this.createdData();
  },
  methods: {
    //删除某一项
    deleteItem(item) {
      if (confirm("删除后不可恢复,你确定要删除吗?"))
        fetch(
          "https://wd3791342287bvwamg.wilddogio.com/menu/" + item.id + "/.json",
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json"
            }
          }
        )
          .then(resp => resp.json())
          .then(data => {
            this.$store.commit("removeMenuItem", item);
          })
          .catch(err => alert("删除失败咯!"));
    },
    //创建前调用此方法  获取数据
    createdData() {
      fetch("https://wd3791342287bvwamg.wilddogio.com/menu.json")
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          let menuArr = [];
          for (let key in data) {
            data[key].id = key;
            menuArr.push(data[key]);
          }
          // this.getMenuItems = menuArr

          //数据同步
          this.$store.commit("setMenuItems", menuArr);
        });
    }
  },

  components: {
    addpizza
  },
  computed: {
    getMenuItems() {
      // return this.$store.state.menuItems;
      return this.$store.getters.getMenuItems;
    }
    // ...mapGetters(["getMenuItems"])
  }
};
</script>

<style>
</style>
