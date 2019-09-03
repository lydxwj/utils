<template>
  <div class="number_page">
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
      selectedKeys: [ 'setCookie' ],
      treeData: [
        {
          key: 'setCookie',
          title: '设置cookie',
          isLeaf: true,
        },
        {
          key: 'getCookie',
          title: '根据key获取cookie',
          isLeaf: true,
        },
        {
          key: 'removeCookie',
          title: '根据key删除cookie',
          isLeaf: true,
        },
        {
          key: 'setLocalStorage',
          title: '设置localStorage',
          isLeaf: true,
        },
        {
          key: 'setLocalStorageLimit',
          title: '设置有期限的localStorage',
          isLeaf: true,
        },
        {
          key: 'getLocalStorage',
          title: '根据key获取localStorage',
          isLeaf: true,
        },
        {
          key: 'getLocalStorageLimit',
          title: '根据key获取有期限的localStorage',
          isLeaf: true,
        },
        {
          key: 'removeLocalStorage',
          title: '根据key删除localStorage',
          isLeaf: true,
        },
        {
          key: 'setSessionStorage',
          title: '设置sessionStorage',
          isLeaf: true,
        },
        {
          key: 'getSessionStorage',
          title: '根据key获取sessionStorage',
          isLeaf: true,
        },
        {
          key: 'removeSessionStorage',
          title: '根据key删除sessionStorage',
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
          path: '/storage/' + name,
        });
      }
    },
    onSelect(keys) {
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