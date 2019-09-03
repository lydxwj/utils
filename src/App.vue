<template>
 <a-locale-provider :locale="locale">
  <div class="home">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  name: 'app',
  data() {
    return {
      locale: zhCN,
    }
  }
}
</script>
<style lang="stylus">

</style>
