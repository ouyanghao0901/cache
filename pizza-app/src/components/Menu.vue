<template>
  <div>
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in getMenuItems" :key="index">
          <tr>
            <td>
              <strong>{{item.name}}</strong>
            </td>
            <!-- <td>{{item.description}}</td> -->
          </tr>
          <tr v-for="(_item,_index) in item.options" :key="_index">
            <td>{{_item.size}} 寸</td>
            <td>{{_item.price}} 元</td>
            <td>
              <button @click="addToCar(item,_item)" class="btn btn-xs btn-success">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <h3>购物车</h3>
      <div v-if="car.length>0">
        <table class="table table-hover">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="(item,index) in car" :key="index">
            <tr>
              <td>
                <button @click="carNumJian(item)" class="btn btn-xs btn-success">-</button>
                <span>{{item.count}}</span>
                <button @click="carNumJia(item)" class="btn btn-xs btn-success">+</button>
              </td>
              <td>{{item.name}} {{item.size}}寸</td>
              <td>{{item.price*item.count}} 元</td>
            </tr>
          </tbody>
        </table>
        <p>总价:{{totle}}元</p>
        <button class="btn btn-block btn-success" @click="pushDD">提交订单</button>
      </div>
      <div v-else>
        <h4 class="text-success">{{carText}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import mapGetters from 'vuex'
export default {
  data() {
    return {
      car: [],
      carText: "购物车空空如也..."
      // getMenuItems: {}
    };
  },
  computed: {
    getMenuItems() {
      //再vue中获取属性
      // return this.$store.state.menuItems;
      return this.$store.getters.getMenuItems
    },
    // ...mapGetters(["getMenuItems"]),


    totle() {
      let totleCost = 0;
      for (let i in this.car) {
        totleCost += this.car[i].count * this.car[i].price;
      }
        return totleCost;
    }
  },
  created() {
    this.createdData();
  },
  methods: {
    // createdData() {
    //   fetch("https://wd3791342287bvwamg.wilddogio.com/menu.json")
    //     .then(resp => {
    //       return resp.json();
    //     })
    //     .then(data => {
    //       this.getMenuItems = data;
    //     });
    // },

    //将请求下来的数据存到vuex里面
    createdData() {
      fetch("https://wd3791342287bvwamg.wilddogio.com/menu.json")
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          this.$store.commit("setMenuItems", data);
        });
    },

    addToCar(item, _item) {
      let obj = {
        name: item.name,
        size: _item.size,
        price: _item.price,
        count: 1
      };
      if (this.car.length > 0) {
        //过滤
        let result = this.car.filter(i => {
          return i.name === item.name && i.price === _item.price;
        });
        result.length > 0 ? result[0].count++ : this.car.push(obj);
      } else {
        this.car.push(obj);
      }
    },
    carNumJian(item) {
      item.count--;
      if (item.count < 1) this.removeItem(item);
    },
    carNumJia(item) {
      item.count++;
    },
    removeItem(item) {
      this.car.splice(this.car.indexOf(item), 1);
    },
    pushDD(){
      if(!this.$store.getters.isLogin)
        this.$router.push({path:"/login"})
      else
        alert("玩命开发中...")
    }
  }
};
</script>

<style>
</style>
