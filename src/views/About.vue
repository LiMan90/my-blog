<template lang="html" xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div class="about">
    <nav-header></nav-header>
    <div class="headpic">
      <div class="container headtitle full">
        <div class="title">
          <a h1 href="/"><h1>清都山水郎</h1></a>
        </div>
      </div>
    </div>

    <div class="container content full">
      <div class="list">
        <div class="main">
          <!--上面都是公共模版-->

          <div style="margin: 20px 25px;">
            <div>这个页面放什么好了，还没有想好</div>

          </div>
        </div>

        <div class="side">
          <div slot="sidecontent">
            <h3 class="entry-title">
              <router-link to="/about">{{nickName}}(共{{articleCount}}篇文章)</router-link>
              <span class="cat-desc"></span>
            </h3>

            <div class="pres">
              <img :src="image" class="post-image" width="100%" height="auto" alt="我的头像">
            </div>
            <p class="personal-signed"><i class="iconfont pers-icon">&#xe606;</i>
              欢迎来到我们的情侣博客，这里记录着一个小仙女和一个程序员的故事，如果你喜欢我们的博客，记得和我们留言互动哦！<i class="iconfont pers-icon">&#xe605;</i>
            </p>
          </div>
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
  export default {
    name: 'About',
    components: {
      NavHeader,
      NavFooter,
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
        this.$api.get('/author/male', this.page, r => {
          this.id = r.id;
          this.image = r.image;
          this.articleCount = r.articleCount;
          this.nickName = r.nickName;
        })

      }
    }


  }
</script>

<style media="screen">
  body {
    background-color: #f4f4f4;
    font-family: 'Open Sans', 'Helvetica Neue', "Microsoft YaHei", 'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
  }

  .main {
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
    text-indent: 28px;
    width: 82%;
    margin: 0 auto;
    margin-bottom: 60px;
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

  .byline span.date a {
    font-size: 14px;
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
