<template>
  <div class="item_method">
    <div class="item_head">判断是否是指定数据类型--isKeyType</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">o：All类型，需要检测的数据</div>
      <div class="detail_contain">type：String类型，指定数据类型</div>
      <div class="detail_title">返回值：Boolean</div>
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
        <a-col class="form_item" :span="6">
          <div class="form_label">type</div>
          <div class="form_content">
            <a-select v-model="type" class="width80" >
              <a-select-option v-for="(val, key) in typeOption" :key="key">{{val}}-{{key}}</a-select-option>
            </a-select>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { isKeyType, evil } from '@/utils';
export default {
  data () {
    return {
      o: '',
      type: 'Undefined',
      typeOption: {
        String: '字符串',
        Number: '数值',
        Boolean: '布尔',
        Function: '方法',
        Null: '类型',
        Undefined: '未定义',
        Object: '对象',
        Array: '数组',
        Date: '时间对象',
        RegExp: '正则',
        Error: '错误',
        Symbol: '类型',
        Promise: '类型',
        Set: '类型'
      }
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { o, type } = this;
      return isKeyType(evil(o), type);
    }
  }
}
</script>
<style lang="stylus">

</style>
