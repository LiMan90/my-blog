<template lang="html" xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div class="share">
    <nav-header @shareTags='shareTags' @shareOne='shareOne'></nav-header>
    <div class="headpic">
      <div class="container headtitle full">
        <div class="title">
          <a h1 href="/"><h1>ShanShan</h1></a>
        </div>
      </div>
    </div>
    <div class="container content full">
      <div class="list">
        <div class="main">
          <article-list :tagSelect="tag"></article-list>
        </div>

        <div class="side">
          <side-section>
            <div slot="sidecontent">
              <h3>
                <a href="">{{nickName}}(共{{articleCount}}篇文章)</a>
                <span class="cat-desc"></span>
              </h3>

              <div class="pres">
                <img :src="image" width="100%" height="auto" alt="我的头像">
              </div>
              <p class="personal-signed"><i class="iconfont pers-icon">&#xe606;</i>
                欢迎来到我们的情侣博客，这里记录着一个小仙女和一个程序员的故事，如果你喜欢我们的博客，记得和我们留言互动哦！<i class="iconfont pers-icon">&#xe605;</i>
              </p>
            </div>
          </side-section>
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
  import scrollTop from '@/components/scrollTop.vue'
  export default {
    name: 'Blog',
    components: {
      NavHeader,
      NavFooter,
      articleList,
      scrollTop
    },
    data() {
      return {
        id: '',
        nickName: '',
        image: '',
        articleCount: ''

      }
    },
    mounted() {
      this.getAuthorInfo();
    },
    methods: {
      getAuthorInfo(){
        this.$api.get('/author/female', this.page, r => {
          this.id = r.id;
          this.image = r.image;
          this.articleCount=r.articleCount;
          this.nickName=r.nickName;
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

  .pres {
    position: relative;
    line-height: 1.5;
    font-size: 14px;
    line-height: 1.5;
    /*background-color: #24292e;*/
    border-radius: 3px;
    margin-bottom: 15px;
  }

  a.pic {
    top: 3px;
    margin-left: 3px;
    left: 0;
    z-index: auto;
    position: absolute;
  }

  a.pic img {
    height: 100px;
    width: 100px;
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 8px;
  }

  .social {
    padding-top: 10px;
    padding-left: 110px;
  }

  .detail {
    margin: 0 0 0 5px;
    padding: 0 0 0 110px;
    display: block;
    margin: 0 0 0 5px;
    font-weight: 500;
    text-decoration: none;
  }

  .item-info {
    width: calc(100% - 40%);
    line-height: 1.5;
    float: none;
  }

  .item-title {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: #3a8bbb;
    display: block;
  }

  .item-desc {
    font-size: 12px;
    font-weight: normal;
    color: #999;
    display: block;
  }

  .social a {
    display: inline-block;
    margin-bottom: 7px;
    text-decoration: none;
  }

  .social a i {
    font-size: 22px;
    /*width: 30px;
    height: 30px;*/
    width: 38px;
    line-height: 38px;
    border-radius: 50px;
    color: #fff;
    background-color: rgba(0, 0, 0, .1);
    text-align: center;
  }

  .fa {
    margin: 0 0.2em;
  }

  .message-avatar img {
    position: absolute;
    left: 10px;
    top: 8px;
    border-radius: 5px;
    display: block;
    height: 37px;
    width: 37px;
  }


</style>
