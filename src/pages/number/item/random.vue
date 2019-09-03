<template>
  <div class="item_method">
    <div class="item_head">生成指定范围随机数--random</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">min：Number类型整数，默认值0，起始区间</div>
      <div class="detail_contain">max：Number类型整数，默认值1，结束区间</div>
      <div class="detail_contain">type：String类型，可选，默认值round，转化类型 none：不取整数 round：四舍五入  floor：向下取整  ceil：向上取整</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">type是none时，取值是[min, max)</div>
      <div class="detail_contain">非none时，取值是[min, max]</div>
      <div class="detail_contain">是ceil时，取值极小可能是min</div>
      <div class="detail_title">返回值：Number</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">min</div>
          <div class="form_content">
            <a-input-number :step="1" :precision="0" class="width80" v-model="min"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">max</div>
          <div class="form_content">
            <a-input-number :min="1" :step="1" :precision="0" class="width80" v-model="max"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">type</div>
          <div class="form_content">
            <a-select v-model="type" class="width80" >
              <a-select-option value="none">不取整数-none</a-select-option>
              <a-select-option value="round">四舍五入-round</a-select-option>
              <a-select-option value="floor">向下取整-floor</a-select-option>
              <a-select-option value="ceil">向上取整-ceil</a-select-option>
            </a-select>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">生成</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { random } from '@/utils';
export default {
  data () {
    return {
      min: 0,
      max: 0,
      type: 'round',
      result: 0,
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { min, max, type } = this;
      this.result = random(min, max, type);
    }
  },
}
</script>
<style lang="stylus">

</style>
