<template lang="html">
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

              <article :id="article.id" v-if="index==0">
                <a href="#">
                  <img class="first-post post-image" :src="article.image">
                </a>
                <h2 class="entry-title taggedlink first">

                  <a href="#" :title="article.title"><i class="fa fa-hand-o-right" aria-hidden="true"></i>{{article.title}}</a>
                </h2>
                <div class="entry-content clearfix">
                  <p>
                    {{article.contentAbstract}}
                  </p>
                </div>
              </article>

              <article :id="article.id" v-else>
                <a href="#">
                  <img class="alignleft post-image" :src="article.image" :srcset="article.image + ' 100w, 150w'"
                       sizes="(max-width: 100px) 100vw, 100px" width="100" height="100">
                </a>
                <h2 class="entry-title taggedlink">

                  <a href="#" :title="article.title">{{article.title}}</a>
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
          console.log(r);
          this.ariticleList = r;

        })

      }
    }
  }
</script>

