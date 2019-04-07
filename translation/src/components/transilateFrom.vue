<template>
  <div dir="translateFrom">
    <h2>OUYANGHAO TRANSLATOR</h2>
    <div class="well ">
      <form @submit.prevent="formSubmit" class="form-inline">
        <input type="text" placeholder="Please input" v-model="text" class="form-control">
        <select v-model="lang" class="form-control">
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="ko">Korean</option>
          <option value="ja">Japanese</option>
        </select>
        <input type="submit" value="翻译" class="btn btn-default">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "translateFrom",
  data() {
    return {
      text: "",
      lang: ""
    };
  },
  methods: {
    formSubmit() {
      this.$emit("formSubmit", this.text, this.lang);
    }
  },
  created() {
    this.lang = "en";
  }
};
</script>

<style>
</style>
