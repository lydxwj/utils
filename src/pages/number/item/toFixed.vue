<template>
  <div class="item_method">
    <div class="item_head">保留指定小数位数--toFixed</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">num：Number类型，默认值0，需要处理的数值</div>
      <div class="detail_contain">accuracy：Number类型整数，默认值0，保留小数位数</div>
      <div class="detail_contain">type：String类型，可选，默认值round，转化类型 round：四舍五入  floor：向下取整  ceil：向上取整</div>
      <div class="detail_contain">complement：Boolean类型，可选，默认值true，位数不够是否用0补全</div>
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
        <a-col class="form_item" :span="6">
          <div class="form_label">accuracy</div>
          <div class="form_content">
            <a-input-number :min="0" :step="1" :precision="0" v-model="accuracy"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">type</div>
          <div class="form_content">
            <a-select v-model="type" class="width80" >
              <a-select-option value="round">四舍五入-round</a-select-option>
              <a-select-option value="floor">向下取整-floor</a-select-option>
              <a-select-option value="ceil">向上取整-ceil</a-select-option>
            </a-select>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">complement</div>
          <div class="form_content">
            <a-switch v-model="complement"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { toFixed } from '@/utils';
export default {
  data () {
    return {
      num: 0,
      accuracy: 0,
      type: 'round',
      complement: true,
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { num, accuracy, type, complement } = this;
      return toFixed(num, accuracy, type, complement);
    }
  }
}
</script>
<style lang="stylus">

</style>
