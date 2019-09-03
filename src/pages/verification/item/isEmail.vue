<template>
  <div class="item_method">
    <div class="item_head">判断是否为邮箱地址--isEmail</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">email：String类型，需要检测的邮箱地址</div>
      <div class="detail_title">返回值：Boolean</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">email</div>
          <div class="form_content">
            <a-input class="width80" v-model="email"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { isEmail } from '@/utils';
export default {
  data () {
    return {
      email: '',
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { email } = this;
      return isEmail(email);
    }
  }
}
</script>
<style lang="stylus">

</style>
