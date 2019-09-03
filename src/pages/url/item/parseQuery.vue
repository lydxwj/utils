<template>
  <div class="item_method">
    <div class="item_head">URL参数转对象--parseQuery</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">url：String类型，不传取当前URL</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">出现重复参数键时，会把值放到一个数组内</div>
      <div class="detail_contain">出现值为字符串对象时，会转化成对象，除此之外的值类型都是字符串</div>
      <div class="detail_title">返回值：Object</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">url</div>
          <div class="form_content">
            <a-input class="width80" v-model="url"/>
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
import { parseQuery } from '@/utils';
export default {
  data () {
    return {
      url: 'http://a.com?a=34&b=2',
      result: {},
    }
  },
  created() {
    this.getResultBtn();
  },
  methods: {
    getResultBtn() {
      const { url } = this;
      this.result = parseQuery(url);
    }
  },
}
</script>
<style lang="stylus">

</style>
