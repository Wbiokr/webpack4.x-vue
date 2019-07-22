<template lang='pug'>
  div
    header 头部
    main
      router-view
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  msg: any = 123

  // 声明周期钩子
  mounted():void{
    this.greet();
  }

  data():Object{
    return {
      aaa:"fdsf"
    }
  }


  // 计算属性
  get hello():string{
    return "computed " + this.msg;
  }

  get World():Number{
    return parseInt(this.msg)
  }

  // 方法
  greet():void{
    this.msg = 'fdsafsa'
  }
}
</script>
<style lang="stylus">
div
  background #f00
</style>
