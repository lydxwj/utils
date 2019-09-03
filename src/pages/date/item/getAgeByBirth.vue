<template>
  <div class="item_method">
    <div class="item_head">根据生日得到年龄--getAgeByBirth</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：Object</div>
      <div class="detail_contain">birthday：String|Date|Number类型，默认当前日期，生日</div>
      <div class="detail_title">返回值：Number</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">birthday</div>
          <div class="form_content">
            <a-date-picker :disabledDate="disabledDate" format="YYYY-MM-DD" v-model="birthday"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { getAgeByBirth } from '@/utils';
export default {
  data () {
    return {
      birthday: moment(),
    }
  },
  created() {
  },
  methods: {
    disabledDate(current) {
      return current && current > moment().endOf('day');
    },
  },
  computed: {
    getResult() {
      const { birthday } = this;
      return getAgeByBirth(birthday);
    }
  },
}
</script>
<style lang="stylus">

</style>
