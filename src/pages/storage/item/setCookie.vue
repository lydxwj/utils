<template>
  <div class="item_method">
    <div class="item_head">设置Cookie--setCookie</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">key：String类型，cookie的键</div>
      <div class="detail_contain">value：All类型，cookie的值</div>
      <div class="detail_contain">attributes：Object类型，可选，默认值{}，cookie的配置参数，path存储URL路径，默认'/'；expires有效期天数；domain有效域</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">配置参数attributes中除了expires，其他参数不建议修改</div>
      <div class="detail_contain">attributes: path需要修改时，要改成当前路由的子路由，设置有误时，存储失败</div>
      <div class="detail_contain">attributes: domain应为当前域，或者当前域的子域，设置有误时，存储失败</div>
      <div class="detail_contain">由于value传参使用的input，所以参数实际都是字符串，实际使用不受此限制</div>
      <div class="detail_title">返回值：String</div>
    </div>
    <div class="item_title">演示：</div>
    <div class="item_detail">
      <a-row :gutter="16">
        <a-col class="form_item" :span="6">
          <div class="form_label">key</div>
          <div class="form_content">
            <a-input v-model="key" class="width80"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">value</div>
          <div class="form_content">
            <a-input v-model="value" class="width80"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">attributes: expires</div>
          <div class="form_content">
            <a-input-number v-model="expires" :min="0" :step="1" :precision="0" class="width80"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">attributes: path</div>
          <div class="form_content">
            <a-input v-model="path" class="width80"/>
          </div>
        </a-col>
        <a-col class="form_item" :span="6">
          <div class="form_label">attributes: domain</div>
          <div class="form_content">
            <a-input v-model="domain" class="width80"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">存储</a-button>
      </div>
      <div class="result">结果：{{getResult}}</div>
    </div>
  </div>
</template>

<script>
import { setCookie, getCookie, removeCookie, evil } from '@/utils';
export default {
  data () {
    return {
      key: '',
      value: '',
      expires: undefined,
      path: '/',
      domain: window.location.hostname,
      result: '',
      isFirst: true,
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getResultBtn() {
      const { key, value, expires, path, domain } = this;
      setCookie(key, evil(value), {
        expires,
        path,
        domain
      });
      this.isFirst = false;
      this.result = getCookie(key);
    },
  },
  computed: {
    getResult() {
      const { result, isFirst } = this;
      if (isFirst && !result) {
        return '';
      }
      if (!result) {
        return '存储失败';
      } else {
        return result;
      }
    }
  }
}
</script>
<style lang="stylus">

</style>
