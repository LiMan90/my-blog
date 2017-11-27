<template lang="html" xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div class="article">
    <nav-header></nav-header>
    <div class="headpic">
      <div class="container headtitle full">
        <div class="title">
          <h1 href="/blog">ShanShan</h1>
        </div>
      </div>
    </div>

    <div class="container content full">
      <div class="list">
        <div class="main">
            <header>
              <h2 class="content-title">{{article.title}}</h2>
              <p class="byline"> <span class="date">作者：<a>{{article.authorName}}</a></span>

                <span class="date">发布时间：{{article.createTime}}</span>
                <span class="date">阅读次数：1923</span>
                <span class="date">文章分类：{{article.tags}}</span>
              </p>
            </header>
            <div class="post-content wysiwyg" v-html="article.content">

            </div>
        </div>

        <div class="side">
          <side-section>
            <div slot="sidecontent">
              <h3>
                <a href="">{{article.authorName}}(共89篇文章)</a>
                <span class="cat-desc"></span>
              </h3>

              <div class="pres">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490938332840&di=0250b11ec1ee6ba7cb469d5b5a51cd7d&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmiddle%2F4a17d9d2g8ac4ec74c8d5%26690" width="100%" height="autho" alt="我的头像">
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
  import scrollTop from '@/components/scrollTop.vue'
  import 'wysiwyg.css'
  export default {
    name: 'Article',
    components: {
      NavHeader,
      NavFooter,
      scrollTop
    },
    data() {
      return {
        article: ''
      }
    },
    methods: {
      init() {
        let articleId = this.$route.query.articleId
        this.$api.get('/article/' + articleId, null, r => {
          this.article = r;
        })
      }
    },
    mounted() {
      this.init()
    }
  }
</script>

<style media="screen">
  body {
    background-color: #f4f4f4;;
  }
  .main{
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
    box-shadow: 0 16px 24px 1px rgba(0, 0, 0, .14), 0 6px 50px 1px rgba(0, 0, 0, .12), 0 6px 10px -5px rgba(0, 0, 0, .2);
  }


  .post-content {
    text-indent:28px;
    width: 82%;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .content-title {
    text-align: center;
    margin: 30px auto;
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -.03em;
    color: #444;
  }

  .byline {
    text-align: center;
    width: auto;
    margin: 14px 0;
  }

  .byline span.sep {
    margin: 0 4px;
    font-weight: normal;
    color: #ddd;
  }

  .byline span.date {
    margin-right: 12px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: .03em;
    color: #bbb;
  }
  .byline span.date a{
    font-size:14px;
  }
  /*markdown补充*/
  .wysiwyg img {
    max-width: 100%;
    display: block;
  }

  .wysiwyg ul li {
    list-style-type: disc;
  }

  .wysiwyg ol li {
    list-style-type: decimal;
  }
</style>
