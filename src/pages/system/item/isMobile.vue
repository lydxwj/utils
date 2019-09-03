<template>
  <div class="item_method">
    <div class="item_head">是否为移动端--isMobile</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">ua：String类型，可选，需要判断的ua，默认当前浏览器ua</div>
      <div class="detail_title">返回值：Boolean</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">ua</div>
          <div class="form_content">
            <a-input class="width80" v-model="ua"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">判断</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { isMobile } from '@/utils';
export default {
  data () {
    return {
      ua: '',
      result: '',
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { ua } = this;
      this.result = isMobile(ua);
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus">

</style>
