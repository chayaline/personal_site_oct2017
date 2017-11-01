<template>
  <div class="bg-triangles">
    <div class="Triangle Triangle--one" :class="{'scroll-anim': scrollAnim}"></div>
    <div class="Triangle Triangle--two"></div>
    <!--<div class="Triangle Triangle--three"></div>
    <div class="Triangle Triangle--four"></div>-->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        scrollAnim: false,
        scrollPosition: 0
      }
    },
    methods: {
      handleScroll () {
        this.scrollAnim = true
        this.scrollPosition = window.scrollY
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style>
  .bg-triangles {
    display: flex;
    animation: turn 2s linear forwards 1s;
    position: fixed;
    overflow: visible;
    top:0px;
    left: -100px;
    height: 100vh;
    width: 100vw;
    z-index:-10;
  }

  .scroll-anim {
    animation-name: rotateTriangle;
    animation-duration:3s;
    animation-iteration-count:initial;
  }

  .Triangle--one {
    transform:rotate(-10deg);
    position:absolute;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: 10%;
    border-width: 25px 0 750px 480px;
    border-color: transparent transparent transparent rgba(255,255,255,0.3);
  }

  .Triangle--two {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: 10%;
    border-width: 825px 0 0px 600px;
    border-color: transparent transparent transparent rgba(255,255,255,0.4);
  }

  @keyframes rotateTriangle {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-150px);
    }
  }
</style>
