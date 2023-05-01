<template>
  <div id="app">
    <div id="goTop"></div>

    <router-view />

    <a href="#goTop">
      <img src="./assets/top.jpg" alt="" :class="['_img', currentScroll > 400 ? 'current' : '']">
    </a>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentScroll: 0,
    }
  },
  mounted() {
    this.getTop()
    window.addEventListener('scroll', this.getTop)
  },
  methods: {
    getTop() {
      this.currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(this.currentScroll);
    }
  }
}
</script>

<style lang="less">
@import './common/reset.css';

html {
  scroll-behavior: smooth
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ._img {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20px;
    bottom: 300px;
    cursor: pointer;
    clip-path: ellipse();
    z-index: 999;
    display: none;
  }

  .current {
    display: block;
  }
}
</style>
