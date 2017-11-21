<template lang="html" xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div class="blog">
    <nav-header @shareTags='shareTags' @shareOne='shareOne'></nav-header>
    <div class="headpic">
      <div class="container headtitle full">
        <div class="title">
          <h1 href="/blog">ShanShan</h1>
        </div>
      </div>
    </div>
    <div class="container full">
      <div class="list">
        <div class="main-full">
          <banner-list></banner-list>
        </div>
      </div>
    </div>

    <div class="container full">
      <div class="list">
        <div class="main-full last">
          <index-info></index-info>
        </div>
      </div>
    </div>

    <scroll-top></scroll-top>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from '@/components/Header.vue'
  import NavFooter from '@/components/Footer.vue'
  import articleList from '@/components/articleList.vue'
  import sideSection from '@/components/sideSection.vue'
  import scrollTop from '@/components/scrollTop.vue'
  import bannerList from  '@/components/banner.vue'
  import indexInfo from '@/components/indexInfo.vue'

  import axios from 'axios'
  export default {
    name: 'Blog',
    components: {
      NavHeader,
      NavFooter,
      articleList,
      sideSection,
      scrollTop,
      bannerList,
      indexInfo
    },
    data() {
      return {
        tags: [],
        messagesList: [],
        tag: '',
        limit: 8 // 用于限制首页显示留言量
      }
    },
    mounted() {
      /*this.getMessages()*/
    },
    methods: {
      // 利用监听获取子组件数据，并传给另外的子组件
      shareTags(msg) {
        this.tags = msg
      },
      shareOne(msg) {
        this.tag = msg
      },
      getOne(msg) {
        this.tag = msg
      },
      getMessages() {
        axios.get("/api/messageList", {
          params: {
            limit: this.limit
          }
        }).then((result) => {
          let res = result.data
          this.messagesList = res.result
        })
      },
      getTagList() {
        var param = {
          page: this.page,
          pageSize: this.pageSize,
          tag: this.tagSelect
        }
        axios.get("/api/tagsDetial", {
          params: param
        }).then((result) => {
          let res = result.data
          if (res.status == "0") {
            if (res.result.count == 0) {
              this.page -= 1
              return
            } else {
              this.list = res.result.list
            }
          } else {
            this.list = []
          }
        })
      }
    }
  }
</script>

<style>
  body {
    background-color: #f4f4f4;
    font-family: 'Open Sans', 'Helvetica Neue', "Microsoft YaHei", 'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
  }

  .main-full {
    width: 100%;
    width: 100%;
    margin: 0 0 30px 0;
    margin-top: -90px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
    /*position: absolute;
    top: -90px;*/
    overflow: hidden;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
    box-shadow: 0 16px 24px 1px rgba(0,0,0,.14),0 6px 50px 1px rgba(0,0,0,.12),0 6px 10px -5px rgba(0,0,0,.2);
  }

  .last {
    margin-top: 0px;
  }


</style>
