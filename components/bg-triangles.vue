<template>
  <div class="bg-triangles">
      <div :class="{'Triangle': true,
                    'Triangle1': triangle1classes.Triangle1,
                    'Triangle1p2': triangle1classes.Triangle1p2,
                    'Triangle1p3': triangle1classes.Triangle1p3,}"></div>
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
        isScrolling: false,
        stage2: false,
        previousVal: 0,
        triangle1classes: {
          'Triangle': true,
          'Triangle1': true,
          'Triangle1p2': false,
          'Triangle1p3': false,
          'Triangle1p4': false,
          'Triangle1p5': false
        }
      }
    },
    methods: {
      handleScroll () {
        this.isScrolling = window.scrollY
      }
    },
    watch: {
      isScrolling (val) {
        console.log('it changed', val)
        this.triangle1classes.Triangle1 = window.scrollY < window.innerHeight
        this.triangle1classes.Triangle1p2 = window.scrollY >= (window.innerHeight - 50) && window.scrollY < (window.innerHeight * 2)
        this.triangle1classes.Triangle1p3 = window.scrollY >= (window.innerHeight * 2)
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

  .Triangle1 {
    transform:rotate(-10deg);
    position:absolute;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: 10%;
    border-width: 25px 0 60vh 380px;
    border-color: transparent transparent transparent rgba(255,255,255,0.3);
  }

  .Triangle1p2 {
    transform:rotate(10deg);
    position:absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 25px 0 750px 480px;
    border-color: transparent transparent transparent rgba(255,255,255,0.5);
    margin-top: 10%;
    animation-name: rotateTriangle;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

    .Triangle1p3 {
    transform:rotate(5deg);
    position:absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 25px 0 750px 480px;
    border-color: transparent transparent transparent rgba(255,255,255,0.5);
    margin-top: 10%;
    animation-name: rotateTriangle;
    animation-duration: 2s;
    animation-direction: reverse;
    animation-fill-mode: forwards;
  }

  .Triangle--two {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: 10%;
    border-width: 100vh 0 0px 70vh;
    border-color: transparent transparent transparent rgba(255,255,255,0.4);
  }

  .triangle1trans-enter-active {
    transform: translateX(0);
  }

  .triangle1trans-leave-active {
    transform: translateX(360px);
  }

  @keyframes rotateTriangle {
    from {
      transform: rotate(-10deg);
      border-color: transparent transparent transparent rgba(255,255,255,0.3);
    }
    to {
      transform: rotate(10deg);
      border-color: transparent transparent transparent rgba(255,255,255,0.5);
    }
  }
</style>
