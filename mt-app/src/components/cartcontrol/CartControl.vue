<template>
  <div class="cartcontrol">
    <transition name="move">
      <div v-if="food.count" @click.stop.prevent="decreaseCart" class="cart-decrease">-</div>
    </transition>
    <div v-if="food.count" class="cart-count">{{food.count}}</div>
    <div @click.stop.prevent="increaseCart" class="cart-add">+</div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {};
  },
  props: {
    food: {
      type: Object,
      default: {}
    }
  },
  methods: {
    decreaseCart() {
      this.food.count--;
    },
    increaseCart() {
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    }
  }
};
</script>

<style>
.cartcontrol {
  font-size: 0;
}
.cartcontrol .cart-decrease {
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: #b4b4b4;
  text-align: center;
  line-height: 20px;
  border: 1px solid #b4b4b4;
  border-radius: 50%;
}
.cartcontrol .cart-count {
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 15px;
  line-height: 20px;
  vertical-align: top;
  color: #b4b4b4;
}
.cartcontrol .cart-add {
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: white;
  background-color: #ffd161;
  position: relative;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
}
.move-enter,
.move-leave-to {
  transform: translateX(20px) rotate(180deg);
}

.move-enter-active,
.move-leave-active {
  transition: all 0.3s linear;
}
</style>
