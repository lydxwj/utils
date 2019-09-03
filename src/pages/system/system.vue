<template>
  <div class="system_page">
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
      selectedKeys: [ 'isMobile' ],
      treeData: [
        {
          key: 'isMobile',
          title: '是否为移动端',
          isLeaf: true,
        },
        {
          key: 'isPC',
          title: '是否为PC端',
          isLeaf: true,
        },
        {
          key: 'isIOS',
          title: '是否为IOS',
          isLeaf: true,
        },
        {
          key: 'isAndroid',
          title: '是否为Android',
          isLeaf: true,
        },
        {
          key: 'getAppType',
          title: '获取当前APP类型',
          isLeaf: true,
        },
        {
          key: 'getBrowserType',
          title: '获取当前浏览器类型',
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
          path: '/system/' + name,
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