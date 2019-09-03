<template>
  <div class="date_page">
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
      selectedKeys: [ 'formatDate' ],
      treeData: [
        {
          key: 'formatDate',
          title: '日期格式化',
          isLeaf: true,
        },
        {
          key: 'getAgeByBirth',
          title: '根据生日得到年龄',
          isLeaf: true,
        },
        {
          key: 'formatPassTime',
          title: '距现在的已过时间',
          isLeaf: true,
        },
        {
          key: 'formatCountdown',
          title: '倒计时',
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
          path: '/date/' + name,
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