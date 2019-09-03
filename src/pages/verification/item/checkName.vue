<template>
  <div class="item_method">
    <div class="item_head">检测姓名--checkName</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">name：String类型，需要检测的姓名，必须大于等于两个的汉字</div>
      <div class="detail_title">返回值：Boolean</div>
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
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { checkName } from '@/utils';
export default {
  data () {
    return {
      name: '',
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { name } = this;
      return checkName(name);
    }
  }
}
</script>
<style lang="stylus">

</style>
