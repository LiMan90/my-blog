<template lang="html" xmlns:v-popover="http://www.w3.org/1999/xhtml">
  <div class="article">
    <nav-header></nav-header>
    <div class="headpic">
      <div class="container headtitle full">
        <div class="title">
          <a h1 href="/"><h1>ShanShan</h1></a>
        </div>
      </div>
    </div>

    <div class="container content full">
      <div class="list">
        <div class="main">
          <!--上面都是公共模版-->

          <div style="margin: 20px 25px;">
          <div class="messages-text">
            <!--留言板-->
            <div class="msg">
              <ol class="msg-list">
                <h3 class="hestia-title text-center">留言板</h3>
                <li class="msg-list-item" v-for="item in messagesList">
                  <article>
                    <header>
                      <!-- <img class="avatar" :src="'https://cdn.v2ex.com/gravatar/' + item.email + '?s=120&d=mm&r=g'"
                            alt="">-->
                      <img class="avatar post-image" src="/static/images/boy.jpg"
                           alt="">
                      <div class="msg-author">
                        <div class="msg-author-name">{{item.name}} <span id="admin"
                                                                         v-if="item.email == 'e210aaaced957c912a7dd01cccc53004'">管理员</span>
                        </div>
                      </div>
                      <div class="msg-author-time">{{item.createDate}}</div>
                    </header>
                    <section class="msg-main">
                      <div class="msg-reply">
                        <p>{{item.content}}</p>
                      </div>
                    </section>
                  </article>
                </li>
              </ol>
            </div>

            <!--翻页-->
            <div class="pages">
              <a href="javascript:;" @click="go(page.pageNum-=1)" style="float: left; margin: 0px;">上一页</a>
              <a href="javascript:;" @click="go(page.pageNum+=1)" style="float: right; margin: 0px;">下一页</a>
            </div>
          </div>


          <!--新增留言-->
            <div style="overflow:hidden;margin-bottom:20px;">
                <textarea ref='textBox' spellcheck='false' row="1" placeholder="咱们交♂流交♂流~~" v-model="message"
                          class="msg-content" cols="45" rows="8" aria-required="true"></textarea>
              <div class="input">
                <input type="text" placeholder="你的名字。不想填? 那我把你当宮水三葉了" v-model.trim="name" class="msg-name">
                <input type="email" placeholder="你的邮箱。这个总该填一下了吧" v-model.trim="email" class="msg-email">
              </div>
              <span style="color:red; font-size: 12px;">{{status}}</span>
              <br>
              <button @click='submit' :disabled='submitFlag' class="submit">
                <span>{{submitFlag ? '提交中...' : '发布留言'}}</span>
              </button>
            </div>

          </div>

          </div>


        <div class="side">
            <div slot="sidecontent">
              <h3 class="entry-title">
                <router-link to="/about">预留位置先把布局撑起来</router-link>
                <span class="cat-desc"></span>
              </h3>

              <div class="pres">
                <img :src="author.image" class="post-image" width="100%" height="auto" alt="我的头像">
              </div>
              <p class="personal-signed"><i class="iconfont pers-icon">&#xe606;</i>
                欢迎来到我们的情侣博客，这里记录着一个小仙女和一个程序员的故事，如果你喜欢我们的博客，记得和我们留言互动哦！<i class="iconfont pers-icon">&#xe605;</i>
              </p>
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
  import axios from 'axios'
  import md5 from 'md5'
  export default {
    data () {
      return {
        messagesList:  [
          {
            name: '111',
            emial: '123@qq.com',
            content: '留言内容测试1',
            createDate:'2017-12-31 21:02:31'
          },
          {
            name: '222',
            emial: '123@qq.com',
            content: '留言内容测试12',
            createDate:'2017-12-31 21:02:31'
          },
          {
            name: '333',
            emial: '123@qq.com',
            content: '留言内容测试31',
            createDate:'2017-12-31 21:02:31'
          },
          {
            name: '444',
            emial: '123@qq.com',
            content: '留言内容测试14',
            createDate:'2017-12-31 21:02:31'
          },
        ],
        author:'',
        message: '',
        email: '',
        name: '',
        status: '',
        submitFlag: false,
        page: {
          pageNum: 1,
          pageSize: 10
        }
      }
    },
    components: {
      NavHeader,
      NavFooter,
      scrollTop
    },
    mounted () {
      if (localStorage.name) {
        this.email = localStorage['e-mail']
        this.name = localStorage['name']
      }
      /*this.getMessages()*/
    },
    methods: {
      getMessages () {
        this.$api.get('/message/list', this.page, r => {
          this.messagesList = r;
        })
      },
      submit () {
        let reg = /^[\w_-]+@[\w_-]+\.[\w\\.]+$/
        if (!this.name || !this.email || !this.message) {
          this.status = '怕是有什么没填哦'
          return
        } else if (!reg.test(this.email)) {
          this.status = '邮箱格式不对呀'
          return
        } else if (this.message.length > 500) {
          this.status = '可不能这么长哦'
          return
        } else if (/\d{7,}/i.test(this.message) || // 连续7个以上数字，过滤发Q号和Q群的评论
          /(\d.*){7,}/i.test(this.message) || // 非连续的7个以上数字，过滤用字符间隔开的Q号和Q群的评论
          /\u52A0.*\u7FA4/i.test(this.message) || // 包含“加群”两字的通常是发Q群的垃圾评论
          /(\u9876.*){5,}/i.test(this.message) || // 过滤5个以上“顶”字的评论
          /([\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D\u25CB\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396\u96F6].*){7,}/i.test(this.message) // 过滤用汉字发Q号和Q群的评论
        ) {
          this.status = '可不能发不好的东东哦'
          return
        }
        this.summitFlag = true
        localStorage.setItem('e-mail', this.email)
        localStorage.setItem('name', this.name)
        this.$api.post("/message/sub", {
          "name": this.name,
          "email": this.email,
          "content": this.message
        }, res => {
          this.message = null;
          this.status = res;
        }, fail => {
          this.status = '你做了什么，蜜汁错误！！▄█▀█●给跪了，联系博主吧';
        })
      }
    }
  }
</script>

<style media="screen">
  body {
    background-color: #f4f4f4;
    font-family: 'Open Sans', 'Helvetica Neue', "Microsoft YaHei", 'Hiragino Sans GB', 'LiHei Pro', Arial, sans-serif;
  }
  .main{
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
    box-shadow: 0 16px 24px 1px rgba(0, 0, 0, .14), 0 6px 50px 1px rgba(0, 0, 0, .12), 0 6px 10px -5px rgba(0, 0, 0, .2);
  }


  .post-content {
    text-indent:28px;
    width: 82%;
    margin: 0 auto;
    margin-bottom: 60px;
  }

  .content-title {
    text-align: center;
    margin: 30px auto;
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -.03em;
    color: #444;
  }

  .byline {
    text-align: center;
    width: auto;
    margin: 14px 0;
  }

  .byline span.sep {
    margin: 0 4px;
    font-weight: normal;
    color: #ddd;
  }

  .byline span.date {
    margin-right: 12px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: .03em;
    color: #bbb;
  }
  .byline span.date a{
    font-size:14px;
  }
  /*markdown补充*/
  .wysiwyg img {
    max-width: 100%;
    display: block;
  }

  .wysiwyg ul li {
    list-style-type: disc;
  }

  .wysiwyg ol li {
    list-style-type: decimal;
  }




  #admin {
    padding: 1px 5px;
    background-color: rgb(213, 103, 103);
    color: #fff;
    border-radius: 20px;
    font-size: 5px;
  }

  .messages-text {
    width: 100%;
    overflow: hidden;
  }

  textarea {
    margin: 10px 0;
    height: 100px;
    width: 100%;
  }

  .input {
    margin: 10px 0;
    font-size: 0;
  }

  .msg-content, .msg-name, .msg-email {
    display: inline-block;
    padding: 10px;
    background: #f4f6f7;
    outline: none;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 3px;
  }

  .msg-content:focus, .msg-name:focus, .msg-email:focus {
    border: 1px solid #b0b5b9;
  }

  .msg-content {
    width: 100%;
    max-width: 100%;
    height: 270px;
    max-height: 500px;
  }

  .msg-name, .msg-email {
    width: 48%;
    height: 25px;
    margin-right: 4%;
    padding: 0 10px;
  }

  .msg-email {
    margin-right: 0;
  }

  .submit {
    float: right;
    padding: 5px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: center;
    line-height: 24px;
    background-color: #e91e63;
    border: none;
    color: #fff;
    border-radius: 3px;
    margin-top: 10px;
  }

  .msg-list > li {
    border-bottom: 1px solid #e5eaed;
  }

  .msg-list > li article {
    margin: 20px 0;
  }

  .msg-list > li section {
    line-height: 20px;
    font-size: 14px;
    margin-left: 80px;
    white-space: normal;
    word-break: break-all;
    word-wrap: break-word;
  }

  .msg-list .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    float: left;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    margin-right: 15px;
  }

  .msg-author-time {
    color: #aaa;
    font-size: 12px;
    display: block;
  }

  .msg-reply > p {
    margin: 5px 0;
    line-height: 24px;
  }

  .full-content header {
    margin: 0 0 !important;
  }


</style>
