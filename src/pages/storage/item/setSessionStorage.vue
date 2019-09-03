<template>
  <div class="item_method">
    <div class="item_head">设置sessionStorage--setSessionStorage</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">key：String类型，sessionStorage对应的键</div>
      <div class="detail_contain">value：All类型，sessionStorage的值</div>
      <div class="detail_title">返回值：无</div>
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
          <div class="form_label">value</div>
          <div class="form_content">
            <a-input class="width80" v-model="value"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">存储</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { setSessionStorage, getSessionStorage } from '@/utils';
export default {
  data () {
    return {
      key: '',
      value: '',
      result: '',
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { key, value } = this;
      setSessionStorage(key, value);
      this.result = getSessionStorage(key);
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus">

</style>
