<template>
  <div class="item_method">
    <div class="item_head">根据key获取有期限的localStorage--getLocalStorageLimit</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">key：String类型，localStorage对应的键</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">如果存储为json对象，得到的是json对象</div>
      <div class="detail_title">返回值：Object|Array|String|Null</div>
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
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">获取</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { getLocalStorageLimit } from '@/utils';
export default {
  data () {
    return {
      key: '',
      result: ''
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { key } = this;
      const result = getLocalStorageLimit(key);
      this.result = result === null ? '失败' : result;
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus">

</style>
