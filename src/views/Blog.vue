<template lang="html" xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div class="blog">
    <nav-header ></nav-header>
    <div class="headpic">
      <div class="container headtitle full">
        <div class="title">
         <a h1 href="/"><h1>清都山水郎</h1></a>
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
  import scrollTop from '@/components/scrollTop.vue'
  import bannerList from  '@/components/banner.vue'
  import indexInfo from '@/components/indexInfo.vue'
  export default {
    name: 'Blog',
    components: {
      NavHeader,
      NavFooter,
      articleList,
      scrollTop,
      bannerList,
      indexInfo
    },
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

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
