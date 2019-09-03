<template>
  <a-layout id="layout">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed">
      <div class="logo">
        <a-icon class="logo_icon" type="star" />
      </div>
      <a-menu theme="dark" mode="inline" :selectedKeys="selectedKeys">
        <a-menu-item v-for="item in siderData" :key="item.key">
          <router-link :to="item.path">
            <a-icon :type="item.icon" />
            <span>{{item.title}}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <h1>工具实用方法集合--utils</h1>
      </a-layout-header>
      <a-layout-content class="layout_content">
        <transition name="fade">
					<router-view></router-view>
				</transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data(){
    return {
      collapsed: false,
      selectedKeys: [],
      siderData: [
        {
          key: 'home',
          icon: 'home',
          title: '主页',
          path: '/home'
        },
        {
          key: 'number',
          icon: 'dashboard',
          title: '数字相关',
          path: '/number'
        },
        {
          key: 'verification',
          icon: 'audit',
          title: '验证相关',
          path: '/verification'
        },
        {
          key: 'date',
          icon: 'calendar',
          title: '日期相关',
          path: '/date'
        },
        {
          key: 'storage',
          icon: 'save',
          title: '存储相关',
          path: '/storage'
        },
        {
          key: 'url',
          icon: 'link',
          title: 'URL相关',
          path: '/url'
        },
        {
          key: 'transform',
          icon: 'experiment',
          title: '转化相关',
          path: '/transform'
        },
        {
          key: 'system',
          icon: 'appstore',
          title: '系统相关',
          path: '/system'
        },
      ]
    }
  },
  mounted() {
    this.initTab(this.$route.path);
  },
  methods: {
    initTab(path) {
      this.siderData.forEach(element => {
        if (path.includes(element.path)) {
          this.selectedKeys = [element.key];
        }
      });
    }
  },
  watch: {
    $route(to) {
      this.initTab(to.path);
    }
  }
}
</script>
<style lang="stylus">
#layout {
  height 100%
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logo {
    text-align center
    padding 20px 0
  }
  .logo_icon {
    color #1ea8ff
    font-size 34px
  }
  h1 {
    display inline-block
    padding-left 40px
    font-size 24px
  }
  .layout_content {
    margin: 24px 16px
    padding: 24px
    background: #fff
    overflow auto
  }
  
}
</style>
