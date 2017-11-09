<template lang="html" xmlns:v-popover="http://www.w3.org/1999/xhtml">
<div class="article-list">
  <div>
    <h2>金闪闪 <small>这是一个有节操的签名</small></h2>
  </div>
  <div class="col">
    <article>
      <a>
        <img src="/static/card.jpg" alt="我的头像">
      </a>
      <h2>福建省地方就是-----title</h2>
      <div class="entry-content clearfix"><p>好久没有更新博客了，上次更新还是十月，最近一阵瞎忙。好久没写代码了，感觉脑子有点僵硬了。原本博客都是用的gravatar 头像，但是有的小伙伴没有设置，为了避免难看我把类型设置为wavatar。
      </p>
      </div>
    </article>
  </div>

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
      axios.get("/articleList", {
        params: param
      }).then((result)=>{
        let res = result.data
        this.list = res.result.data;
        if (res.status == "200") {
          if (res.result.count == 0) {
            this.page -= 1
            return
          } else {
            this.list = res.result.data
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
.article-list {
  padding: 50px;
  background: #fff;
  border-radius: 10px;
  /*box-shadow: 1px 1px 2px rgba(0,0,0,0.08)*/
  box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14),
              0 6px 50px 1px rgba(0, 0, 0, 0.12),
              0 6px 10px -5px rgba(0, 0, 0, 0.2);
  display: table;
}
</style>
