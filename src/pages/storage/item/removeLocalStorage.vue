<template>
  <div class="item_method">
    <div class="item_head">根据key删除localStorage--removeLocalStorage</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">key：String类型，localStorage的键</div>
      <div class="detail_title">返回值：无</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">key</div>
          <div class="form_content">
            <a-input v-model="key" class="width80"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">删除</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { removeLocalStorage, getLocalStorage } from '@/utils';
export default {
  data () {
    return {
      key: '',
      result: '',
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { key } = this;
      removeLocalStorage(key);
      this.result = getLocalStorage(key) ? '失败' : '成功';
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus">

</style>
