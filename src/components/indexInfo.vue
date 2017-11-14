<template lang="html">
  <div>
    <div>
      <div>
        <h2>金闪闪
          <small>一个又笨又萌的小奶猪</small>
        </h2>
      </div>
      <div>
        <ul>
          <div class="">
            <article>
              <a href="#">
                <img class="" src="/static/card.jpg">
              </a>
              <h2 class=" fast">

                <a href="#" title="">页面怎么这么难写</a>
              </h2>
              <div class="">
                <p>
                  好久没有更新博客了，上次更新还是十月，最近一阵瞎忙。好久没写代码了，感觉脑子有点僵硬了。原本博客都是用的gravatar 头像，但是有的小伙伴没有设置，为了避免难看我把类型设置为wavatar。...
                </p>
              </div>

            </article>
          </div>
        </ul>
      </div>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'
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
      tagSelect () {
        this.getTagList()
      }
    },
    mounted () {
      this.getIndexInfo();
    },
    methods: {
      getIndexInfo(){

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

<style>


</style>
