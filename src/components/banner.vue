<template lang="html">
  <div class="banner-list">
    <div class="banner-widget col-md-3 block post wysiwyg">
      <a>
        <i class="info">
          <img src="/static/card.jpg">
        </i>
      </a>
      <h3 class="widget-title">
        <a href="" title="11月5日小计"></a>
        <a href="" title="11月5日小计-每日分享">11月5日小记</a>
      </h3>
      <div class="textwidget">
        <p> 今天周日，天气不错，秋天的小太阳，晒着也暖和。早上睡了... </p>
      </div>
    </div>

    <div class="banner-widget col-md-3 block post wysiwyg">
      <a>
        <i class="info">
          <img src="/static/card.jpg">
        </i>
      </a>
      <h3 class="widget-title">
        <a href="" title="11月5日小计"></a>
        <a href="" title="11月5日小计-每日分享">11月5日小记</a>
      </h3>
      <div class="textwidget">
        <p> 今天周日，天气不错，秋天的小太阳，晒着也暖和。早上睡了... </p>
      </div>
    </div>

    <div class="banner-widget col-md-3 block post wysiwyg">
      <a>
        <i class="info">
          <img src="/static/card.jpg">
        </i>
      </a>
      <h3 class="widget-title">
        <a href="" title="11月5日小计"></a>
        <a href="" title="11月5日小计-每日分享">11月5日小记</a>
      </h3>
      <div class="textwidget">
        <p> 今天周日，天气不错，秋天的小太阳，晒着也暖和。早上睡了... </p>
      </div>
    </div>

    <div class="banner-widget col-md-3 block post wysiwyg">
      <a>
        <i class="info">
          <img src="/static/card.jpg">
        </i>
      </a>
      <h3 class="widget-title">
        <a href="" title="11月5日小计"></a>
        <a href="" title="11月5日小计-每日分享">11月5日小记</a>
      </h3>
      <div class="textwidget">
        <p> 今天周日，天气不错，秋天的小太阳，晒着也暖和。早上睡了... </p>
      </div>
    </div>

    <!--<article class="block post wysiwyg" v-for="item in list">
      <h2>{{item.title}}</h2>
      <p class="article-meta">发布于 {{item.createDate}}</p>
      <div class="ui ribbon label red">
        <a href="">{{item.tag}}</a>
      </div>
      <div class="abstract" v-html="item.content.html">
      </div>
      <p class="more"><router-link :to="{ path:'/article', query:{articleId:item.articleId}}">阅读全文</router-link></p>
    </article>
-->
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props:[
      'tagSelect'
    ],
    data () {
      return {
        list: [],
        page: 1,
        pageSize: 10,
        count: 0
      }
    },
    watch: {
      tagSelect () {
        this.getTagList()
      }
    },
    mounted () {
      this.getlist()
    },
    methods: {
      getlist () {
        var param = {
          page: this.page,
          pageSize: this.pageSize
        }
        axios.get("/api/articleList", {
          params: param
        }).then((result)=>{
          let res = result.data
          if (res.status == "0") {
          if (res.result.count == 0) {
            this.page -= 1
            return
          } else {
            this.list = res.result.list
          }
        } else {
          this.list = []
        }
      })
      },
      getTagList () {
        var param = {
          page: this.page,
          pageSize: this.pageSize,
          tag: this.tagSelect
        }
        axios.get("/api/tagsDetial", {
          params: param
        }).then((result)=>{
          let res = result.data
          if (res.status == "0") {
          if (res.result.count == 0) {
            this.page -= 1
            return
          } else {
            this.list = res.result.list
          }
        } else {
          this.list = []
        }
      })
      },
      go () {
        if (this.page<1) {
          this.page = 1
          return
        } else {
          this.getlist()
        }
      }
    }
  }
</script>

<style media="screen">
  .banner-list {
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    /*box-shadow: 1px 1px 2px rgba(0,0,0,0.08)*/
    box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14),
    0 6px 50px 1px rgba(0, 0, 0, 0.12),
    0 6px 10px -5px rgba(0, 0, 0, 0.2);
    display:table;
  }
</style>
