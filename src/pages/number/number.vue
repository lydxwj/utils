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
      selectedKeys: [ 'toFixed' ],
      treeData: [
        {
          key: 'toFixed',
          title: '保留指定小数位数',
          isLeaf: true,
        },
        {
          key: 'thousandCents',
          title: '数字千分位加逗号',
          isLeaf: true,
        },
        {
          key: 'random',
          title: '生成指定范围随机数',
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
          path: '/number/' + name,
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