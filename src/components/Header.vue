<template lang="html">
<div class="header navbar animated">
  <div class="container">
    <nav id="primary-navigation" class="site-navigation primary-navigation">
      <div class="menum">
        <ul class="nav-menu">
          <li class="menu-item"><router-link href="#" to="/blog"><i class="fa fa-home"></i>首页</router-link></li>
          <li class="menu-item"><router-link to="/share"><i class="fa fa-paw"></i>每日分享</router-link></li>
          <li class="menu-item"><router-link to="/about"><i class="fa fa-user"></i>关于我们</router-link></li>
          <li class="menu-item"><router-link to="/messages"><i class="fa fa-comments"></i>留言板</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
// 实现导航条的自动显示
import Headroom from 'headroom.js'
import { unique } from '@/assets/js/unique';
export default {
  data () {
    return {
      tags: []
    }
  },
  methods: {

  },
  mounted () {
    var myElement = document.querySelector(".header");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement, {
      "tolerance": 1,
      "offset": 10,
      "classes": {
        "initial": "animated",
        "pinned": "slideDown",
        "unpinned": "slideUp"
      }
    });
    headroom.init();
  }
}
</script>
