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
                <a href="">{{article.authorName}}</a>
                <span class="cat-desc">Just A Coding Peasant</span>
              </h3>
              <div class="pres">
                <a href="" class="pic">
                  <img src="/static/card.jpg" alt="我的头像">
                </a>
                <a href="" class="detail">
                <span class="item-info">
                  <span class="item-title">XY</span>
                  <span class="item-desc">2017</span>
                </span>
                </a>
              </div>
              <div class="social">
                <a data-balloon="微博" href="http://weibo.com/" rel="nofollow" class="icon"><i class="fa fa-weibo"
                                                                                             style="background-color: #dd4b39"></i></a>
                <a data-balloon="github" href="https://github.com/JhonXY" rel="nofollow" class="icon"><i
                  class="fa fa-github" style="background-color: #55acee;"></i></a>
                <el-popover
                  ref="youxiang"
                  placement="bottom"
                  title="我的邮箱"
                  width="50"
                  trigger="hover"
                  content="1076849402@qq.com">
                </el-popover>
                <a data-balloon="邮箱" href="javascript:;" rel="nofollow" class="icon" v-popover:youxiang><i
                  class="fa fa-envelope" style="background-color: #3b5998"></i></a>
                <el-popover
                  ref="jianli"
                  placement="bottom"
                  title="我的简历"
                  width="50"
                  trigger="hover"
                  content="暂无内容">
                </el-popover>
                <a data-balloon="微博" href="javascript:;" rel="nofollow" class="icon" v-popover:jianli><i
                  class="fa fa-address-card-o" style="background-color: #80b953"></i></a>
              </div>
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
