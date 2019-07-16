<template>
  <router-view></router-view>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  msg = 123

  // 声明周期钩子
  mounted () {
    this.greet()
  }

  // 计算属性
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // 方法
  greet () {
    alert('greeting: ' + this.msg)
  }
}
</script>
