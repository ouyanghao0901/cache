<template>
  <form>
    <h3>ADD PIZZA</h3>
    <div class="form-group">
      <label class="control-label">品种</label>
      <div>
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <p>
      <strong>选项1:</strong>
    </p>
    <div class="form-group">
      <label class="control-label">尺寸</label>
      <div>
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label">价格</label>
      <div>
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>
    <p>
      <strong>选项2:</strong>
    </p>
    <div class="form-group">
      <label class="control-label">尺寸</label>
      <div>
        <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label">价格</label>
      <div>
        <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label">描述</label>
      <div>
        <textarea class="form-control" rows="5" v-model="newPizza.description"></textarea>
      </div>
    </div>
    <button @click="addMenuItem" class="btn btn-success btn-block">添加</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newPizza: {}
    };
  },
  methods: {
    addMenuItem() {
      let data = {
        name: this.newPizza.name,
        description: this.newPizza.description,
        options: [
          { size: this.newPizza.size1, price: this.newPizza.price1 },
          { size: this.newPizza.size2, price: this.newPizza.price2 }
        ]
      };
      fetch("https://wd3791342287bvwamg.wilddogio.com/menu.json", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(resp => resp.json())
        .then(data => {
          //同步到vuex    不能使用setMenuItems
          //menuItems里有多条数据  这里只是新增一条数据  定义新的方法
          // console.log(data)
          // data.id=data.name
          // console.log(data)

          this.$store.commit("pushToMenuItem", data);
          // this.newPizza = "";
          location.reload();
        })
        .catch(err => alert(err));
    }
  }
};
</script>

<style>
</style>
