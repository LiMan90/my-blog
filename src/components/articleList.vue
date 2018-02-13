<template lang="html">
  <div class="article-list">
    <article class="content-entity" v-for="item in list">
      <router-link :to="{ path:'/article', query:{articleId:item.id}}">
        <img class="alignleft post-image" :src="item.image" :srcset="item.image + ' 150w, 200w'"
             sizes="(max-width: 150px) 150vw, 150px" width="150" height="150">
      </router-link>
      <h2 class="entry-title taggedlink">
        <router-link :to="{ path:'/article', query:{articleId:item.id}}">{{item.title}}</router-link>
      </h2>
      <div class="entry-meta"> 作者:
        <router-link class="entry-title" to="/about"><span>{{item.author}}</span></router-link>
        <span> 发布时间:{{item.createTime}}</span>
        <!--<span> 阅读次数: 105 </span>--> <span class="entry-title"> 文章分类: <a href="javascript:;" @click="category(item.categoryId,1)">{{item.category}}</a> </span>
      </div>

      <div class="entry-content description clearfix">
        <p class="excerpt">
          {{item.contentAbstract}}
        </p>
      </div>
    </article>
    <div class="pages">
      <a href="javascript:;" @click="go(page.pageNum-=1)" style="float: left;">上一页</a>
      <a href="javascript:;" @click="go(page.pageNum+=1)" style="float: right;">下一页</a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [],
        page: {
          pageNum: 1,
          pageSize: 10
        },
        categoryId: null
      }
    },
    watch: {},
    mounted () {
      this.getDailyShare();
    },
    methods: {
      getDailyShare(){
        this.categoryId=null;
        this.$api.get('/article/share', this.page, r => {
          this.list = r.list;
        })
      },

      category(categoryId,pageNum){
        this.categoryId = categoryId;
        this.page.pageNum = pageNum;
        this.$api.get('/article/category/' + categoryId, this.page, r => {
          this.list = r.list;
        })
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
      },

      go() {
        if (this.page.pageNum < 1) {
          this.page.pageNum = 1
          return
        } else {
          if (this.categoryId) {
            this.category(this.categoryId,this.page.pageNum);
          } else {
            this.getDailyShare();
          }
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        }
      }
    }
  }
</script>

<style media="screen">
  .article-list {
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    /*box-shadow: 1px 1px 2px rgba(0,0,0,0.08)*/
    box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14),
    0 6px 50px 1px rgba(0, 0, 0, 0.12),
    0 6px 10px -5px rgba(0, 0, 0, 0.2);
  }

  .content-entity {
    margin: 20px 0;
    border-bottom: 1px solid #eee;
  }

  article {
    display: block;
  }

  h2 {
    font-size: 1.3em;
    color: #333;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
  }

  .entry-title {
    margin: 0;
  }

  .entry-meta {
    line-height: 1;
    margin: 10px 5px;
    color: #999;
    padding-bottom: 5px;
    font-size: 14px;
  }

  .alignleft {
    float: left;
    margin: 0 15px 15px 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .entry-content {

  }

  .description {
    color: #666;
    margin: 0;
    line-height: 2;
  }

  p {
    margin: 0 0 10px;
  }
</style>
