<template>
  <div class="bg-triangles">
    <div class="Triangle Triangle--one" :class="{'Triangle--one-stage2': stage2}"></div>
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
        scrollPosition: 0,
        stage2: false
      }
    },
    methods: {
      handleScroll () {
        // console.log(window.scrollY, window.innerHeight)
        // this.stage2 = window.scrollY >= window.innerHeight
        // this.scrollPosition = window.scrollY
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
    position: fixed;
    overflow: visible;
    top:0;
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
    transition:cubic-bezier(0.075, 0.82, 0.165, 1);
    border-color: transparent transparent transparent rgba(255,255,255,0.3);
  }

  .Triangle--one-stage2 {
    margin-top: 50%;
    border-width: 25px 0 750px 480px;
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
