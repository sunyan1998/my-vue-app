<!--
 * @Author: sunyan 1055697528@qq.com
 * @Date: 2023-02-13 14:09:50
 * @LastEditors: sunyan 1055697528@qq.com
 * @LastEditTime: 2023-02-14 14:52:36
 * @FilePath: \vue3\my-vue-app\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script  lang="ts">
import { defineComponent, ref } from 'vue';
import Toast from './components/Toast.vue'
export default defineComponent({
  name: 'home',
  components: {
    Toast,
  },
  setup(){
    let name=ref("4444444")
    return{
      name:"这是一条提示"
    }
  }
});
</script>

<template>
  <div id="home">
    <!-- <Toast :titleText="name"/> -->
    <div class="box" v-toast="{content: 'left提示3333', color:'white', bgColor: 'black', pos: 'left'}">left提示</div>
  </div>
 
</template>

<style scoped lang="less">
</style>
