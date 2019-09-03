<template>
  <div class="item_method">
    <div class="item_head">判断是否为身份证号--isCardID</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：Object</div>
      <div class="detail_contain">cardId：String|Number类型，需要检测的身份证号</div>
      <div class="detail_contain">isShort：Boolean类型，可选，默认值false，是否支持15位身份证号</div>
      <div class="detail_contain">strict：String类型，可选，默认值middle，检验强度 low：低  middle：中  high：高</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">strict是low时，验证位数、数字（末尾可以是x）</div>
      <div class="detail_contain">middle时，增加验证年月日</div>
      <div class="detail_contain">high时，增加验证省份，进一步的年月日验证，以及身份证最后一位验证</div>
      <div class="detail_title">返回值：Boolean</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">cardId</div>
          <div class="form_content">
            <a-input class="width80" v-model="cardId"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">isShort</div>
          <div class="form_content">
            <a-switch v-model="isShort"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">strict</div>
          <div class="form_content">
            <a-select v-model="strict" class="width80" >
              <a-select-option value="low">低-low</a-select-option>
              <a-select-option value="middle">中-middle</a-select-option>
              <a-select-option value="high">高-high</a-select-option>
            </a-select>
          </div>
        </a-col>
      </a-row>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { isCardID } from '@/utils';
export default {
  data () {
    return {
      cardId: '',
      strict: 'middle',
      isShort: false,
    }
  },
  created() {
  },
  methods: {
  },
  computed: {
    getResult() {
      const { cardId, strict, isShort } = this;
      return isCardID({
        cardId,
        strict,
        isShort
      });
    }
  }
}
</script>
<style lang="stylus">

</style>
