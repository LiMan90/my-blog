<template lang="html">
<div class="article">
  <nav-header></nav-header>
  <div class="headpic">
    <div class="container headtitle full">
      <div class="title">
        <h1 href="/blog">Chunibyo</h1>
      </div>
    </div>
  </div>
  <div class="container full">
    <div class="list">
      <div class="main-full">
        <div class="full-content">
          <header>
           <!-- <h2>{{article.title}}</h2>-->
            <h2>css垂直居中总结</h2>
            <p class="byline">by JhonXY
              <span class="sep">|</span>
              <!--<span class="date">{{article.createDate}}</span>-->
              <span class="date">2017-11-11 14:14:15</span>
            </p>
          </header>
          <div class="post-content wysiwyg" v-html="article.content">
            webkit支持

            webkit支持拥有overflow属性的区域，列表框，下拉菜单，textarea的滚动条自定义样式。
            属性

            ::-webkit-scrollbar 滚动条整体部分。
            ::-webkit-scrollbar-thumb 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）。
            ::-webkit-scrollbar-track 滚动条的轨道（里面装有Thumb）。
            ::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
            ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）。
            ::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处。
            ::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件。

            伪类与伪元素

            伪类：:focus,:hover,:nth-child;
            伪元素：::selecion,::first-letter,::after;

            伪类的效果可以通过添加一个实际的类来达到，而伪元素的效果则需要通过添加一个实际的元素才能达到，这也是为什么他们一个称为伪类，一个称为伪元素的原因。
            伪元素和伪类之所以这么容易混淆，是因为他们的效果类似而且写法相仿，但实际上 css3 为了区分两者，已经明确规定了伪类用一个冒号来表示，而伪元素则用两个冒号来表示。
            具体属性
          </div>
        </div>
      </div>
    </div>
  </div>
  <scroll-top></scroll-top>
  <nav-footer></nav-footer>
</div>
</template>

<script>
import NavHeader from '@/components/Header.vue'
import NavFooter from '@/components/Footer.vue'
import scrollTop from '@/components/scrollTop.vue'
import 'wysiwyg.css'
import axios from 'axios'
export default {
  name: 'Article',
  components: {
    NavHeader,
    NavFooter,
    scrollTop
  },
  data() {
    return {
      article: ''
    }
  },
  methods: {
    init() {
      let articleId = this.$route.query.articleId
      let param = {
        articleId: articleId
      }
      axios.get("/api/articleDetial", {
        params: param
      }).then((result) => {
        let res = result.data
        if (res.status == "0") {
          this.article = res.result
        } else {
          this.article = ''
        }
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style media="screen">
body {
  background-color: #f4f4f4;;
}
.main-full {
  width: 100%;
  margin: 0 0 30px 0;
  margin-top: -90px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
  /*position: absolute;
  top: -90px;*/
  overflow: hidden;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
  box-shadow: 0 16px 24px 1px rgba(0,0,0,.14),0 6px 50px 1px rgba(0,0,0,.12),0 6px 10px -5px rgba(0,0,0,.2);
}

.full-content {
  padding: 60px 0;
}

.full-content header {
  width: 66%;
  margin: 0 auto 50px auto;
}

.post-content {
  width: 66%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.full-content h2 {
  margin: 0 20px 0 0;
  font-size: 40px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -.03em;
  color: #444;
}

.byline {
  width: auto;
  margin: 12px 0;
  font-weight: 500;
}

.byline span.sep {
  margin: 0 4px;
  font-weight: normal;
  color: #ddd;
}

.byline span.date {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: .03em;
  color: #bbb;
}

/*markdown补充*/
.wysiwyg img {
  max-width: 100%;
  display: block;
}

.wysiwyg ul li{
  list-style-type: disc;
}
.wysiwyg ol li {
    list-style-type: decimal;
}
</style>
