<template lang="html">
  <div class="banner-list">
    <div class="banner" v-for="banner in list">
        <div class="overhidden">
          <a :href="banner.id">
            <img :src="banner.image">
          </a>
        </div>
        <h3><a :href="banner.id" :title="banner.title">{{banner.title}}</a></h3>
        <div><p>{{banner.contentAbstract}}</p></div>
    </div>

    <!--    <div class="banner">
          <banner>
            <a href="/">
              <img src="/static/card.jpg">
            </a>
            <h3><a href="#">标题标题标题</a></h3>
            <div><p>内容缩略内容缩略内容缩容缩内容缩略内容缩略内容缩容缩</p></div>
          </banner>
        </div>
        <div class="banner">
          <banner>
            <a href="/">
              <img src="/static/card.jpg">
            </a>
            <h3><a href="#">标题标题标题</a></h3>
            <div><p>内容缩略内容缩略内容缩容缩内容缩略内容缩略内容缩容缩内容缩略内容缩略内容缩容缩</p></div>
          </banner>
        </div>
        <div class="banner">
          <banner>
            <a href="/">
              <img src="/static/card.jpg">
            </a>
            <h3><a href="#">标题标题标题</a></h3>
            <div><p>内容缩略内容缩略内容缩容缩内容缩略内容缩略内容缩容缩内容缩略内容缩略内容缩容缩</p></div>
          </banner>
        </div>-->

  </div>


</template>

<script>
  export default {
    props: [
      'tagSelect'
    ],
    data () {
      return {
        list: [],

      }
    },
    watch: {
     /* tagSelect () {
        this.getTagList()
      }*/
    },
    mounted () {
      this.getBanners();
    },
    create(){
      this.getBanners();
    },
    methods: {
      getBanners(){
        this.$api.get('/banner', null, r => {
          this.list = r.banner;
        })

      }
    },
    go () {
      if (this.page < 1) {
        this.page = 1
        return
      } else {
        this.getlist()
      }
    }
  }
</script>


