<template>
  <div class="logos">
    <img src="vue.svg" v-if="logos.includes('Vue')" class="technologo" />
    <img src="react.svg" v-if="logos.includes('React')" class="technologo" />
    <img src="angular.svg" v-if="logos.includes('Angular')" class="technologo" />
    <img src="nodejs.svg" v-if="logos.includes('Nodejs')" class="technologo" />
    <img src="php.svg" v-if="logos.includes('php')" class="technologo" />
  </div>
</template>
<script>
  export default {
    props: {
      logos: Array
    },
    mounted: function () {
      console.log('logos')
    }
  }
</script>
<style>
  .technologo {
    width:40px;
  }
  .logos {
    height:40px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;

  }
  @keyframes floatingLogos {
    0% {
      transform: translatey(4px);
    }

    100% {
      transform: translatey(-3px) translateX(3px);
    }
  }
</style>