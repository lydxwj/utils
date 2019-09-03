<template>
  <div class="item_method">
    <div class="item_head">距现在的已过时间--formatPassTime</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">startTime：String|Date|Number类型，开始时间</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">当时间相差大于等于28天时，计算精确到天，即不考虑两个时间的时分秒影响</div>
      <div class="detail_contain">当时间相差大于等于28天时，结果利用Date对象判断，所以会考虑到每个月天数不同的因素，也就是说即使是闰年的二月也会考虑到</div>
      <div class="detail_contain">当时间相差小于28天时，结果数字使用的向下取整方式</div>
      <div class="detail_title">返回值：String</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">startTime</div>
          <div class="form_content">
            <a-date-picker :disabledDate="disabledDate" :disabledTime="disabledDateTime" format="YYYY-MM-DD HH:mm:ss" :showTime="true" v-model="startTime"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { formatPassTime } from '@/utils';
export default {
  data () {
    return {
      startTime: moment(),
    }
  },
  created() {
  },
  methods: {
    disabledDate(current) {
      return current && current > moment().endOf('day');
    },
    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },
    disabledDateTime() {
      const start = new Date(this.startTime);
      const now = new Date();
      const startY = start.getFullYear();
      const nowY = now.getFullYear();
      const startM = start.getMonth();
      const nowM = now.getMonth();
      const startD = start.getDate();
      const nowD = now.getDate();
      if (startY == nowY && startM == nowM && startD == nowD) {
        return {
          disabledHours: () => this.range(now.getHours() + 1, 24),
          disabledMinutes: (hour) => {
            if (hour < now.getHours()) {
              return [];
            }
            return this.range(now.getMinutes() + 1, 60)
          },
          disabledSeconds: (hour, min) => {
            if (hour < now.getHours() || min < now.getMinutes()) {
              return [];
            }
            return this.range(now.getSeconds(), 60)
          },
        };
      }
      return {
        disabledHours: () => [],
        disabledMinutes: () => [],
        disabledSeconds: () => [],
      };
    },
  },
  computed: {
    getResult() {
      const { startTime } = this;
      return formatPassTime(startTime);
    }
  }
}
</script>
<style lang="stylus">

</style>

