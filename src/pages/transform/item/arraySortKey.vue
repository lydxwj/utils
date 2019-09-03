<template>
  <div class="item_method">
    <div class="item_head">对数组对象排序--arraySortKey</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">array：Array类型数组对象，需要排序数组</div>
      <div class="detail_contain">key：String类型，排序依据的数组对象键，对应的值是数值或者字符串数值</div>
      <div class="detail_contain">desc：Boolean类型，可选，默认true升序，升序或者降序</div>
      <div class="detail_title">返回值：Array</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">array</div>
          <div class="form_content">
            <a-input class="width80" v-model="array"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">key</div>
          <div class="form_content">
            <a-input class="width80" v-model="key"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">desc</div>
          <div class="form_content">
            <a-switch v-model="desc"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">排序</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { arraySortKey, evil } from '@/utils';
export default {
  data () {
    return {
      array: '',
      key: '',
      desc: true,
      result: null,
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { array, key, desc } = this;
      this.result = arraySortKey(evil(array), key, desc);
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus">

</style>
