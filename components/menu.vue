<template>
  <div class="menu-container">
    <img src="star.svg" class="star" :class="starClass"  @click="showDrop = !showDrop, first = !first" alt="menu" title="menu" />
    <transition name="menuSlide">
      <div class="dropdown" v-show="showDrop">
        <ul>
          <li><a href="#" v-scroll-to="'#pageone'">{{ $t('menu.intro')}}</a></li>
          <li><a href="#" v-scroll-to="'#pagetwo'">{{ $t('menu.about')}}</a></li>
          <li><a href="#" v-scroll-to="'#pagethree'">{{ $t('menu.WhatIdo')}}</a></li>
          <li><a href="#" v-scroll-to="'#pageportfolio'">{{ $t('menu.portfolio')}}</a></li>
          <li><a href="#" v-scroll-to="'#pagecontact'">{{ $t('menu.contact')}}</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showDrop: false,
        first: true,
        starClass: ''
      }
    },
    watch: {
      showDrop (val) {
        this.starClass = val ? 'animated-star' : 'rewind'
      }
    },
    methods: {
      handleScroll () {
        this.showDrop = false
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
  .dropdown a {
    color: black;
  }
  .star {
    width: 25px;
    cursor: pointer;
    transition: all .5s ease;
  }
  .star:hover {
    transform: rotate(45deg);
  }

  .menu-container{
    position:fixed;
    top:10%;
    left:7%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    z-index:10;
  }

  .dropdown {
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    opacity:1;
    margin-left:-1em;
  }

  .dropdown ul {
    list-style:none;
  }

  .dropdown ul li {
    margin-top:5px;
  }
  .menuSlide-enter-active, .menuSlide-leave-active {
    transition: all .5s;
    margin-top: 0;
    opacity: 1;
  }

  .menuSlide-enter, .menuSlide-leave-to {
    transition: all .5s;
    margin-top: -140px;
    opacity: 0;
  }

  .animated-star {
    animation-name: rotateStar;
    animation-duration:0.5s;
  }

  .rewind {
    animation-name: rotateStarRewind;
    animation-duration: 0.5s;
  }

  @keyframes rotateStar {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }
  @keyframes rotateStarRewind {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(-360deg);
    }
  }

  @media (max-width: 800px) {
    .menu-container {
      left: 5%;
      top: 5vh;
    }

    .dropdown a {
      background-color: rgb(255, 255, 255, 0.8);
    }
  }
</style>