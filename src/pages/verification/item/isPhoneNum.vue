<template>
  <div class="item_method">
    <div class="item_head">判断是否为手机号--isPhoneNum</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">tel：String|Number类型，需要检测的手机号</div>
      <div class="detail_contain">strict：Boolean类型，可选，默认值false，是否严格检测，值是true时，会严格匹配手机号前三位</div>
      <div class="detail_title">返回值：Boolean</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">因为需求不多，本方法不支持手机号前面带有前缀，如：86等</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">tel</div>
          <div class="form_content">
            <a-input  class="width80" v-model="tel"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">strict</div>
          <div class="form_content">
            <a-switch v-model="strict"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { isPhoneNum } from '@/utils';
export default {
  data () {
    return {
      tel: '',
      strict: false,
      result: false,
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { tel, strict } = this;
      return isPhoneNum(tel, strict);
    }
  }
}
</script>
<style lang="stylus">

</style>
