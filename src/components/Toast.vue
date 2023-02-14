<!--
 * @Author: sunyan 1055697528@qq.com
 * @Date: 2023-02-13 14:09:50
 * @LastEditors: sunyan 1055697528@qq.com
 * @LastEditTime: 2023-02-13 17:17:55
 * @FilePath: \vue3\my-vue-app\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script  lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'toast',
  props:{
    titleText:{
      type:String,
    }
   
  },
  data(){
    return{
      title:false
    }
  },
  methods:{
    mouseover(){
      this.title=true
    },
    mouseout(){
      this.title=false
    }
  },
 
})
</script>

<template>
  <div class="toast">
    <p class="titleStyle" v-if="title">{{ titleText }}</p>
    <div class="toastBtn" @mouseover="mouseover" @mouseout="mouseout">按钮</div>
  </div>
</template>

<style scoped >
#app {
    max-width: 0 !important;
    margin: 0 !important;
    padding: 0rem !important;
    text-align: none !important;
}
.toastBtn
{
  display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.titleStyle{
    margin-top: -72px;
    position: absolute;
    min-height: 40px;
    max-width: 240px;word-break: normal;
    border-style: solid;
    transition: left 0.4s cubic-bezier(0, 0, 0.0, 0),
    top 0.4s cubic-bezier(0, 0, 0, 0);
    background-color: rgba(50, 50, 50, 0.701961);
    border-width: 0px;
    border-color: #333333;
    border-radius: 4px;
    color: #ffffff;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    line-height: 21px;
    padding: 10px 10px;
    z-index: 9999;
    pointer-events: none;
}
</style>
