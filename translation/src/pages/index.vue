<template>
<div class="col-sm-6 col-sm-offset-3">
  <transilatefrom @formSubmit="translateText"></transilatefrom>
  <transilateoutput :text="text"></transilateoutput>
</div>
</template>

<script>
import transilatefrom from "@/components/transilateFrom";
import transilateoutput from "@/components/transilateOutput";
export default {
  name: "index",
  data() {
    return {
      text:'',
    };
  },
  methods: {
    translateText(text,lang) {
      this.$http
        .get(
          "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190404T045535Z.6528d9c49101a9ad.913836426d1e95d6c58e46d4801bbfec09a03cac&lang="+lang+"&text=" +
            text
        )
        .then(resp => {
          this.text = resp.data.text[0]
        });
    }
  },
  components: {
    transilatefrom,
    transilateoutput
  }
};
</script>

<style scoped>
div{
  padding-top: 50px;
}
</style>
