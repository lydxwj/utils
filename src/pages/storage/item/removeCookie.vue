<template>
  <div class="item_method">
    <div class="item_head">根据key删除cookie--removeCookie</div>
    <div class="item_title">说明：</div>
    <div class="item_detail">
      <div class="detail_title">参数：</div>
      <div class="detail_contain">key：String类型，cookie的键</div>
      <div class="detail_contain">attributes：Object类型，可选，默认值{}，cookie的配置参数，path存储URL路径</div>
      <div class="detail_title red">注意：</div>
      <div class="detail_contain">当setCookie时设置了path，使用removeCookie时也要设置相同的path才会成功</div>
      <div class="detail_contain">removeCookie时如果带有path参数，需要到setCookie时所在的path，否则会删除失败，即使有共同的父路由。如果在 /storage/setCookie 路由下setCookie存储，path参数/storage，在页面 /storage/removeCookie 中removeCookie删除，path参数/storage，这样会删除失败。如果不想存在这个问题最好采用默认path值</div>
      <div class="detail_title">返回值：无</div>
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
          <div class="form_label">attributes: path</div>
          <div class="form_content">
            <a-input v-model="path" class="width80"/>
          </div>
        </a-col>
      </a-row>
      <div class="form_btn">
        <a-button @click="getResultBtn" type="primary">删除</a-button>
      </div>
      <div class="result">结果：{{result}}</div>
    </div>
  </div>
</template>

<script>
import { removeCookie, getCookie } from '@/utils';
export default {
  data () {
    return {
      key: '',
      path: undefined,
      result: '',
    }
  },
  created() {
  },
  methods: {
    getResultBtn() {
      const { key, path } = this;
      removeCookie(key, path);
      this.result = getCookie(key) ? '失败' : '成功';
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus">

</style>
