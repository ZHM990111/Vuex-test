<template>
  <div id="app">
    <div @click="change('+')">+</div>
    <span>{{num}}</span>
    <span style="color:red">{{date}}</span>
    <div @click="change('-')">-</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "app",
  //用于渲染
  mounted() {
    console.log(this.$store);
  },
  computed: {
    ...mapState({
      num: state => state.app.num
    }),
    ...mapGetters({
      date: "app/date"
    })
  },
  methods: {
    // ...mapMutations({
    //   change: "app/changenum"
    // }),
    ...mapActions({
      changes: "app/changenumAsync"
    }),
    change(type) {
      this.changes({ payload: type });
      //绑定mutation就要通过commit触发    参数 函数名，参数
      //this.$store.commit('changenum',{payload:type})
      // this.$store.commit({
      //   type: "app/changenum",
      //   payload: type
      // });

      // //异步触发用action
      // this.$store.dispatch({
      //   type: "app/changenumAsync",
      //   payload: type
      // }).then(res=>{
      //   console.log(res)
      // })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
