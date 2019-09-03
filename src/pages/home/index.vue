<template>
  <div class="home_page">
    <a-list
    :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 4, xxl: 4 }"
    :dataSource="list">
    <a-list-item slot="renderItem" slot-scope="item">
      <a-card class="card" hoverable @click="gotoPage(item.link)">
        <div class="card_title">
          <div class="title_text">{{item.title}}</div>
          <span class="card_more">更多</span>
        </div>
        <div class="card_contain">{{item.content}}</div>
      </a-card>
    </a-list-item>
  </a-list>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      list: [
        {
          id: 1,
          link: '/number',
          title: '数值相关',
          content: '包含保留指定小数位数、数字千分位加逗号等方法',
        },
        {
          id: 2,
          link: '/verification',
          title: '验证相关',
          content: '包含验证邮箱、手机号、身份证、姓名等方法',
        },
        {
          id: 3,
          link: '/date',
          title: '日期相关',
          content: '包含日期格式化、年龄计算、倒计时、已过时间等方法',
        },
        {
          id: 4,
          link: '/storage',
          title: '存储相关',
          content: '包含cookie、localStorage、sessionStorage的增、删、查等方法',
        },
        {
          id: 5,
          link: '/url',
          title: 'URL相关',
          content: '包含URL参数转对象，获取参数，对象转化为参数等方法',
        },
        {
          id: 6,
          link: '/transform',
          title: '转化相关',
          content: '包含隐藏字符串指定位置、对数组对象排序等方法',
        },
        {
          id: 7,
          link: '/system',
          title: '系统相关',
          content: '包含判断是否是移动端、判断是否是PC端、获取当前操作系统等方法',
        },
      ],
    }
  },
  created() {
  },
  methods: {
    gotoPage(path) {
      this.$router.push({
        path,
      });
    }
  }
}
</script>
<style lang="stylus">
.home_page{
  .card{
    line-height 30px
  }
  .card_title{
    display flex
    justify-content space-between
    font-size 16px
    .title_text{
      white-space nowrap
      overflow hidden
      text-overflow ellipsis  
    }
    .card_more{
      color #1890ff
      width 46px
      text-align right 
    }
  }
  .card_contain{
    color #999
    height 60px
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; 
  }
}
</style>
