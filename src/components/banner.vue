<template lang="html">
  <div class="banner-list">
    <div class="banner" v-for="banner in list">
        <div class="overhidden ">
            <router-link :to="{ path:'/article', query:{articleId:banner.id}}"><img class="post-image" :src="banner.image"></router-link>
        </div>
      <h3 class="entry-title"><router-link :to="{ path:'/article', query:{articleId:banner.id}}">{{banner.title}}</router-link></h3>
        <div><p>{{banner.contentAbstract}}</p></div>
    </div>



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


