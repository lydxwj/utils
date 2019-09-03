<template>
  <div class="item_method">
    <div class="item_head">获取数据类型--getType</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">o：All类型，需要检测的数据</div>
      <div class="detail_title">返回值：String</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">o</div>
          <div class="form_content">
            <a-input class="width80" v-model="o"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { getType, evil } from '@/utils';
export default {
  data () {
    return {
      o: '',
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { o } = this;
      return getType(evil(o));
    }
  }
}
</script>
<style lang="stylus">

</style>
