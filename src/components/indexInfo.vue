<template lang="html" xmlns:max-width="http://www.w3.org/1999/xhtml">
  <div class="container from-the-blog">
    <div class="row">
      <div class="col-md-12 hfeed" v-for="item in ariticleList">
        <div class="page-header clearfix">
          <h2 class="pull-left">{{item.nickName}}
            <small>{{item.motto}}</small>
          </h2>
        </div>

        <div class="row">
          <ul>
            <div class="col-md-6" v-for="(article,index) in item.articles">
              <article v-if="index==0">
                <router-link :to="{ path:'/article', query:{articleId:article.id}}">
                  <img class="first-post post-image" :src="article.image" max-width="100%" height="auto" >
                </router-link>
                <h2 class="entry-title first">
                  <router-link :to="{ path:'/article', query:{articleId:article.id}}">
                    <i class="fa fa-hand-o-right" aria-hidden="true">{{article.title}}</i>
                  </router-link>
                </h2>
                <div class="entry-content clearfix">
                  <p>
                    {{article.contentAbstract}}
                  </p>
                </div>
              </article>

              <article  v-else>
                <router-link :to="{ path:'/article', query:{articleId:article.id}}">
                  <img class="alignleft post-image" :src="article.image" :srcset="article.image + ' 100w, 150w'"
                       sizes="(max-width: 100px) 100vw, 100px" width="100" height="100">
                </router-link>
                <h2 class="entry-title">
                  <router-link :to="{ path:'/article', query:{articleId:article.id}}">{{article.title}}</router-link>
                </h2>
                <div class="entry-content clearfix">
                  <p>
                    {{article.contentAbstract}}
                  </p>
                </div>
              </article>

            </div>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
  export default {
    components: {},
    props: [
      'tagSelect'
    ],
    data () {
      return {
        ariticleList: []

      }
    },
    watch: {
      /*tagSelect () {
       this.getTagList()
       }*/
    },
    mounted () {
      this.getIndexInfo();
    },
    create(){
      this.getIndexInfo();
    },
    methods: {
      getIndexInfo(){
        this.$api.get('/article/info', null, r => {
          this.ariticleList = r;
        })

      }
    }
  }
</script>

