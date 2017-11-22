<template lang="html">
  <div class="banner-list">
    <div class="banner" v-for="banner in list">
        <div class="overhidden">
          <a :href="banner.id">
            <img class="post-image" :src="banner.image">
          </a>
        </div>
        <h3><a :href="banner.id" :title="banner.title">{{banner.title}}</a></h3>
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


