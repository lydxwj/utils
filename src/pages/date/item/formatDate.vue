<template>
  <div class="item_method">
    <div class="item_head">日期格式化--formatDate</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">formatStr：String类型，YYYY/yyyy/YY/yy 表示年份  MM/M 月份  W/w 星期  dd/DD/d/D 日期  
 hh/HH/h/H 时间   mm/m 分钟  ss/SS/s/S 秒  例如：YYYY-MM-DD 星期W HH:mm</div>
      <div class="detail_contain">datetime：String|Date|Number类型，可选，默认当前时间，需要处理的日期(可以是13位毫秒数)</div>
      <div class="detail_title">返回值：String</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">formatStr</div>
          <div class="form_content">
            <a-input class="width80" v-model="formatStr"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">datetime</div>
          <div class="form_content">
            <a-date-picker format="YYYY-MM-DD HH:mm:ss" :showTime="true" v-model="datetime"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { formatDate } from '@/utils';
export default {
  data () {
    return {
      formatStr: 'YYYY-MM-DD 星期W HH:mm',
      datetime: moment(),
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { formatStr, datetime } = this;
      return formatDate(formatStr, datetime);
    }
  }
}
</script>
<style lang="stylus">

</style>
