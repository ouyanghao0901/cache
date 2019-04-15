<template>
  <div class="stars">
    <span v-for="(item,index) in itemClass " :key="index" :class="item" class="star"></span>
  </div>
</template>

<script>
// 星星长度
const length = 5;

//星星状态

export default {
  props: {
    score: {
      type: Number
    }
  },
  computed: {
    itemClass() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      //半星
      let hasDecimal = score % 1 !== 0;
      // 全星
      let integet = Math.floor(score);

      for (let i = 0; i < integet; i++) {
        result.push("on");
      }
      if (hasDecimal) {
        result.push("half");
      }
      while (result.length < 5) {
        result.push("off");
      }
      return result;
    }
  }
};
</script>

<style>
.stars {
  font-size: 0;
}
.star {
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-right: 3px;
  background-repeat: no-repeat;
  background-size: 10px 10px;
}
.stars .on {
  background-image: url(img/star24_on@2x.png);
}
.stars .half {
  background-image: url(img/star24_half@2x.png);
}
.stars .off {
  background-image: url(img/star24_off@2x.png);
}
</style>
