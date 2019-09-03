<template>
  <div class="item_method">
    <div class="item_head">对象转化成URL参数--stringQuery</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">obj：Object类型，需要处理的对象</div>
      <div class="detail_contain">prefix：Boolean类型，可选，是否需要加前缀?</div>
      <div class="detail_title">返回值：String</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">obj</div>
          <div class="form_content">
            <a-input class="width80" v-model="obj"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">prefix</div>
          <div class="form_content">
            <a-switch v-model="prefix"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { stringQuery, evil } from '@/utils';
export default {
  data () {
    return {
      obj: '{}',
      prefix: true,
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { obj, prefix } = this;
      return stringQuery(evil(obj), prefix);
    }
  }
}
</script>
<style lang="stylus">

</style>
