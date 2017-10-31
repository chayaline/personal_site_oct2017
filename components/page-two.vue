<template>
	<div class="page pagetwo" id="pagetwo">
		<div class="left-container">
      <aboutText :logos="logosToDisplay"/>
		</div>
    <div class="right-container">
      <div class="logoscompo">
        <img class="algae" src="about_bg.png" alt="photo par Kevin Mesme" title="My creative developper face"/>
      </div>
    </div>
	</div>
</template>

<script>
  import aboutText from '../components/about-text'
  export default {
    data () {
      return {
        logosToDisplay: []
      }
    },
    components: {
      aboutText
    }
  }
</script>

<style>
  .logoscompo {
    position:relative;
  }

  .algae {
    width: 100%;
    animation-name: floatingPortrait;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    transform-origin: 20% 40%;
  }

  @keyframes floatingPortrait {
    0% {
      transform: translatey(5px) rotate3d(1,5,0,10deg);
    }

    100% {
      transform: translatey(-4px) translateX(3px);
    }
  }
	</style>]