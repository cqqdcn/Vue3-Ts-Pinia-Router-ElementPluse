<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
#app {height:100vh;}
.el-menu-item.is-active{
  background: rgba(0,0,0,0.5);
}
.el-menu-item.is-active::before{
  content:'';
  width: 4px;
  height: 100%;
  background-color:#009688;
  position: absolute;
  top: 0;
  left: 0;
}
.el-menu-item-group__title{
  padding: 0 !important;
}
.el-header{
  border-bottom: 1px solid #f6f6f6;
}

#nprogress .bar {
 height: 2px !important;        //高度
 background: #009688 !important;  //颜色
 }
</style>
