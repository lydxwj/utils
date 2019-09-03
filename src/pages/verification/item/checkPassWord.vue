<template>
  <div class="item_method">
    <div class="item_head">检验密码强度--checkPassWord</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：Object</div>
      <div class="detail_contain">password：String类型，需要检测的密码</div>
      <div class="detail_contain">length：Array类型，可选，默认值[0, 0]，密码长度限制，0表示没限制。两项都不为0时，较小的为最短限制，相等时进行密码强度检验意义不大</div>
      <div class="detail_contain">isCaps：Boolean类型，可选，默认值false，是否区分大小写字母</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">不满足length参数的长度限制时，返回值为0</div>
      <div class="detail_contain">isCaps为false时，返回值范围[0, 3]，为true时，返回值范围[0, 4]</div>
      <div class="detail_contain">检测的密码类型：数值（0-9）、字母（a-z，A-Z）、特殊符（.-_）</div>
      <div class="detail_title">返回值：Number</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">password</div>
          <div class="form_content">
            <a-input class="width80" v-model="password"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">length</div>
          <div class="form_content">
            <a-input-number :min="0" :step="1" :precision="0" class="width50" v-model="length[0]"/>
            <a-input-number :min="0" :step="1" :precision="0" class="width50" v-model="length[1]"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">isCaps</div>
          <div class="form_content">
            <a-switch v-model="isCaps"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { checkPassWord } from '@/utils';
export default {
  data () {
    return {
      password: '',
      length: [0, 0],
      isCaps: false,
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { password, length, isCaps } = this;
      return checkPassWord({
        password,
        length,
        isCaps
      });
    }
  }
}
</script>
<style lang="stylus">

</style>
