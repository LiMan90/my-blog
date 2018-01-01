<template lang="html">
  <div class="about">
    <nav-header></nav-header>
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
        this.articleCount=r.articleCount;
        this.nickName=r.nickName;
      })

    }
  }
}
</script>

<style lang="css">
  body {
    background-color: #f4f4f4;
    font-family: 'Open Sans', 'Helvetica Neue', "Microsoft YaHei", 'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
  }
@media (max-width: 800px) {
  .about img {
    width: 100%;
  }
}
</style>
