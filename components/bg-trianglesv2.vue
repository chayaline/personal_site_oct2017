<template>
  <div class="bg-triangles">
    <transition name="blinkTriangle">
      <div class="Triangle Triangle1" v-show="show.triangle1"></div>
    </transition>
    <transition name="blinkTriangle">
    <div class="Triangle Triangle--two" v-show="show.triangle2"></div>
     </transition>
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
        show: {
          triangle1: true,
          triangle2: true
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
        // console.log('it changed', val)
        this.show.triangle1 = window.scrollY < window.innerHeight
        this.show.triangle2 = window.scrollY < (window.innerHeight + window.innerHeight / 3)
        // this.triangle1classes.Triangle1p2 = window.scrollY >= (window.innerHeight - 50) && window.scrollY < (window.innerHeight * 2)
        // this.triangle1classes.Triangle1p3 = window.scrollY >= (window.innerHeight * 2)
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

  .Triangle--two {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: 10%;
    border-width: 100vh 0 0px 70vh;
    border-color: transparent transparent transparent rgba(255,255,255,0.4);
  }

  .blinkTriangle-leave-active {
    animation-name: blinkTriangle-out;
    animation-duration: .5s;
  }

  .blinkTriangle-enter-active {
    animation-name: blinkTriangle-out;
    animation-direction: reverse;
    animation-duration: .5s;
  }
  @keyframes blinkTriangle-out {
    0% {
      border-color: transparent transparent transparent rgba(255,255,255,0.3);
    }
    20% {
      border-color: transparent transparent transparent rgba(255,255,255,0.6);
    }
    30% {
      border-color: transparent transparent transparent rgba(255,255,255,0.2);
    }
    70% {
      border-color: transparent transparent transparent rgba(255,255,255,0.5);
    }
    100% {
      border-color: transparent transparent transparent rgba(255,255,255,0);
    }
  }
</style>
