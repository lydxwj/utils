<template>
  <div class="item_method">
    <div class="item_head">倒计时--formatCountdown</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">endTime：String|Date|Number类型，结束时间</div>
      <div class="detail_contain">format：String类型，d天数 h小时 m分钟 s秒  例如：'d天h小时m分钟s秒'</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">倒计时结束，返回: '已结束'</div>
      <div class="detail_title">返回值：String</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">endTime</div>
          <div class="form_content">
            <a-date-picker :disabledDate="disabledDate" :disabledTime="disabledDateTime" format="YYYY-MM-DD HH:mm:ss" :showTime="true" v-model="endTime"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">format</div>
          <div class="form_content">
            <a-input class="width80" v-model="format"/>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { formatCountdown } from '@/utils';
import { setInterval, clearInterval } from 'timers';
export default {
  data () {
    return {
      endTime: moment(),
      format: 'd天h小时m分钟s秒',
      timer: null,
      result: '',
    }
  },
  mounted() {
    this.interval();
  },
  methods: {
    disabledDate(current) {
      const now = new Date();
      return current && current < moment(now.setDate(now.getDate() - 1)).endOf('day');
    },
    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },
    disabledDateTime() {
      const start = new Date(this.endTime);
      const now = new Date();
      const startY = start.getFullYear();
      const nowY = now.getFullYear();
      const startM = start.getMonth();
      const nowM = now.getMonth();
      const startD = start.getDate();
      const nowD = now.getDate();
      if (startY == nowY && startM == nowM && startD == nowD) {
        return {
          disabledHours: () => this.range(0, now.getHours()),
          disabledMinutes: (hour) => {
            if (hour > now.getHours()) {
              return [];
            }
            return this.range(0, now.getMinutes())
          },
          disabledSeconds: (hour, min) => {
            if (hour > now.getHours() || min > now.getMinutes()) {
              return [];
            }
            return this.range(0, now.getSeconds())
          },
        };
      }
      return {
        disabledHours: () => [],
        disabledMinutes: () => [],
        disabledSeconds: () => [],
      };
    },
    interval() {
      clearInterval(this.timer);
      this.timer = null;
      this.timer = setInterval(() => {
        const { endTime, format } = this;
        this.result = formatCountdown(endTime, format);
        if (this.result == '已结束') {
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000);
    }
  },
  watch: {
    endTime() {
      this.interval();
    },
    format() {
      this.interval();
    }
  }
}
</script>
<style lang="stylus">

</style>

