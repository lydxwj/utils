<template>
  <div class="item_method">
    <div class="item_head">设置有期限的localStorage--setLocalStorageLimit</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">key：String类型，localStorage对应的键</div>
      <div class="detail_contain">value：All类型，localStorage的值</div>
      <div class="detail_contain">day：Number类型，可选，localStorage的期限天数，不传参表示一直有效</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">需要和getLocalStorageLimit配对使用</div>
      <div class="detail_contain">建议不要和setLocalStorage混合使用，以免出现冲突</div>
      <div class="detail_contain">使用setLocalStorageLimit存储始终是一个对象，value键对应存储数据，expires对应有效期</div>
      <div class="detail_contain">过期存储不会自动删除，在使用getLocalStorageLimit获取时候，如果过期会自动删除</div>
      <div class="detail_title">返回值：无</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">key</div>
          <div class="form_content">
            <a-input class="width80" v-model="key"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">value</div>
          <div class="form_content">
            <a-input class="width80" v-model="value"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">day</div>
          <div class="form_content">
            <a-input-number v-model="day" :min="0" :step="1" :precision="0" class="width80"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">存储</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { setLocalStorageLimit, getLocalStorageLimit, evil } from '@/utils';
export default {
  data () {
    return {
      key: '',
      value: '',
      day: undefined,
      result: '',
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { key, value, day } = this;
      setLocalStorageLimit(key, evil(value), day);
      this.result = getLocalStorageLimit(key);
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus">

</style>
