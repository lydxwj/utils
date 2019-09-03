<template>
  <div class="item_method">
    <div class="item_head">通过键名获取URL参数--getQuery</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">name：String类型，URL参数对应的键名，不传返回全部URL参数转成的对象，不存在时返回空字符串</div>
      <div class="detail_contain">url：String类型，可选，需要处理的URL，不传取当前URL</div>
      <div class="detail_title">返回值：String|Object|Array</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">name</div>
          <div class="form_content">
            <a-input class="width80" v-model="name"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">url</div>
          <div class="form_content">
            <a-input class="width80" v-model="url"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { getQuery } from '@/utils';
export default {
  data () {
    return {
      name: '',
      url: 'http://a.com?a=23&b=wee',
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { name, url } = this;
      return getQuery(name, url);
    }
  }
}
</script>
<style lang="stylus">

</style>
