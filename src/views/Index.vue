<template lang="html">
  <div id="mainDiv">
    <div id="content-index">
      <div id="code">
        <span class="comments">/**</span><br/>
        <span class="space"/><span class="comments">*Dear juan, I'm so lucky to meet you. I was deeply attracted by your charm day-by-day.</span><br/>
        <span class="space"/><span class="comments">* so I write some code to show my love to you.</span><br/>
        <span class="space"/><span class="comments">*/</span><br/>
        Boy i = <span class="keyword">new</span> Boy(<span class="string">"Li man"</span>);<br/>
        Girl u = <span class="keyword">new</span> Girl(<span class="string">"Yin juanjuan"</span>);<br/>
        <span class="comments">// November 14, 2016, I tell you I love you. Bucause I love you, so I don't want to hurt you. I chose to leave quietly </span><br/>
        i.love(u);<br/>
        <span class="comments">// but...,November 15, 2016, Miss you like the tide in the mind and I cann't get you out of my mind... On the same day,I feel like I've got the whole world when you told me you love me too</span><br/>
        u.sayLoveMe();<br/>
        <span class="comments">// Since then, Every corner of my heart is you.</span><br/>
        <span class="keyword">var</span> heart=i.addHeart(u);<br/>
        $("body").append(heart);<br/>
        <span class="comments">// You say you just want us to be happy to talk about love, do not have to consider the results .</span><br/>
        <span class="comments">// You say you hope I love you, you love me forever. I was touched by your heart</span><br/>
        <span class="comments">// So I decided take care of you and our love.</span><br/>
        i.takeCareOf(u);<br/>
        <span class="keyword">boolean</span> isAccept = <span class="keyword">true</span>;<br/>
        <span class="keyword">while</span> (isAccept) {<br/>
        <span class="placeholder"/>i.takeCareOf(u);<br/>
        <span class="placeholder"/><span class="comments">// I think it is an important decision</span><br/>
        <span class="placeholder"/><span class="comments">// and you should forgot the unhappy things that happended before.</span><br/>
        <span class="placeholder"/>isAccept = u.thinkOver();<br/>
        }<br/>
        <span class="comments">// After a please sound of accept, we will live happily ever after.</span><br/>
        u.accept(i);<br/>
        i.liveHappilyWith(u);<br/>


      </div>
      <div id="loveHeart">
        <canvas id="garden"></canvas>
        <div id="words">
          <div id="messages">
            亲爱的，这是我们相爱在一起的时光。
            <div id="elapseClock"></div>
          </div>
          <div id="loveu">
            <router-link to="/blog">爱你直到永永远远。</router-link><br/>
            <div class="signature">- 爱你的人</div>
          </div>
        </div>
      </div>
    </div>
    <div id="copyright">
      <!--	<a href="#">....</a><br />
          <a href="#">....</a><br />-->
      <div id="meetClock"></div>
    </div>
  </div>
</template>

<script>
  import {query} from '@/assets/js/jquery.js'
  import {garden} from '@/assets/js/garden'
  import {functions} from '@/assets/js/functions'

  export default {
    mounted () {
      this.init();
    },
    methods: {
        init(){

        }
    }

  }
</script>
