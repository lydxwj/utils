<template>
  <div class="item_method">
    <div class="item_head">隐藏字符串指定位置--stringMask</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">str：String类型，需要处理的字符串</div>
      <div class="detail_contain">Object类型，可选，默认值{ front = 3, after = 4, symbol = '*' }，front：Number类型正整数，可选，默认值3，字符串前面显示长度；after：Number类型正整数，可选，默认值4，字符串后面显示长度；symbol：String类型，可选，默认值*，隐藏替换字符</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">front和after和大于等于str长度时，返回str本身</div>
      <div class="detail_title">返回值：String</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">str</div>
          <div class="form_content">
            <a-input class="width80" v-model="str"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">front</div>
          <div class="form_content">
            <a-input-number :min="0" :step="1" :precision="0" class="width80" v-model="front"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">after</div>
          <div class="form_content">
            <a-input-number :min="0" :step="1" :precision="0" class="width80" v-model="after"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">symbol</div>
          <div class="form_content">
            <a-input class="width80" v-model="symbol"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">转化</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { stringMask } from '@/utils';
export default {
  data () {
    return {
      str: '',
      front: 3,
      after: 4,
      symbol: '*',
      result: 0,
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { str, front, after, symbol } = this;
      this.result = stringMask(str, {front, after, symbol});
    }
  },
}
</script>
<style lang="stylus">

</style>
