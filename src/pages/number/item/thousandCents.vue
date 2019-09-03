<template>
  <div class="item_method">
    <div class="item_head">数字千分位加逗号--thousandCents</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">num：Number类型，默认值0，需要处理的数值</div>
      <div class="detail_title">返回值：String</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">num</div>
          <div class="form_content">
            <a-input-number class="width80" v-model="num"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { thousandCents } from '@/utils';
export default {
  data () {
    return {
      num: 0,
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { num } = this;
      return thousandCents(num);
    }
  }
}
</script>
<style lang="stylus">

</style>
