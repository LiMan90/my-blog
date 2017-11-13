<template lang="html">
  <div class="banner-list">
    <div class="banner">
        <banner >
          <a href="/">
            <img src="/static/card.jpg">
          </a>
          <h3>标题</h3>
          <div><p>内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略</p></div>
        </banner>
    </div>
    <div class="banner">
      <banner >
        <a href="/">
          <img src="/static/card.jpg">
        </a>
        <h3>标题</h3>
        <div><p>内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略</p></div>
      </banner>
    </div>
    <div class="banner">
      <banner >
        <a href="/">
          <img src="/static/card.jpg">
        </a>
        <h3>标题</h3>
        <div><p>内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略</p></div>
      </banner>
    </div>
    <div class="banner">
      <banner >
        <a href="/">
          <img src="/static/card.jpg">
        </a>
        <h3>标题</h3>
        <div><p>内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略内容缩略</p></div>
      </banner>
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

    },
    methods: {

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
</script>

<style>


</style>
