<template>
  <div class="item_method">
    <div class="item_head">根据key获取cookie--getCookie</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">key：String类型，cookie对应的键</div>
      <div class="detail_contain">json：Boolean类型，可选，取出值是否转化为json对象</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">当key传空时，返回当前cookie所有键值对，当key没有对应的值时，返回undefined，结果空白</div>
      <div class="detail_contain">json为true，得到的是json对象，本项目暂无法测试此属性</div>
      <div class="detail_title">返回值：Object|Array|String|Undefined</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">key</div>
          <div class="form_content">
            <a-input class="width80" v-model="key"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">json</div>
          <div class="form_content">
            <a-switch v-model="json"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">获取</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { getCookie } from '@/utils';
export default {
  data () {
    return {
      key: '',
      json: false,
      result: ''
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { key, json } = this;
      const result = getCookie(key, json)
      this.result = result === undefined ? '失败' : result;
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus">

</style>
