<template>
  <div class="verification_page">
    <a-row class="page_content">
      <a-col class="page_left" :span="16">
        <router-view></router-view>
      </a-col>
      <a-col class="page_right" :span="8">
        <a-directory-tree defaultExpandAll @select="onSelect" :selectedKeys="selectedKeys" @expand="onExpand">
          <a-tree-node v-for="item in treeData" :title="item.title" :key="item.key" :isLeaf="item.isLeaf">
            <template v-if="treeData.children">
              <a-tree-node v-for="child in treeData.children" :title="child.title" :key="child.key" :isLeaf="child.isLeaf" />
            </template>
          </a-tree-node>
        </a-directory-tree>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedKeys: [ 'isPhoneNum' ],
      treeData: [
        {
          key: 'isPhoneNum',
          title: '判断是否为手机号',
          isLeaf: true,
        },
        {
          key: 'isEmail',
          title: '判断是否为邮箱地址',
          isLeaf: true,
        },
        {
          key: 'isCardID',
          title: '判断是否为身份证号',
          isLeaf: true,
        },
        {
          key: 'checkPassWord',
          title: '检验密码强度',
          isLeaf: true,
        },
        {
          key: 'checkName',
          title: '检测姓名',
          isLeaf: true,
        },
        {
          key: 'getType',
          title: '获取数据类型',
          isLeaf: true,
        },
        {
          key: 'isKeyType',
          title: '判断是否是指定数据类型',
          isLeaf: true,
        },
      ],
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.selectedKeys = [this.$route.name];
    },
    openDetail() {
      name = this.selectedKeys[0];
      if (name) {
        this.$router.push({
          path: '/verification/' + name,
        });
      }
    },
    onSelect (keys) {
      this.selectedKeys = keys;
      this.openDetail();
    },
    onExpand () {
      console.log('Trigger Expand');
    },
  },
  watch: {
    $route(to) {
      if (this.selectedKeys[0] != to.name) {
        this.onSelect([to.name]);
      }
    }
  }
}
</script>
<style lang="stylus">
  
</style>