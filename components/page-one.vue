<template>
	<div class="page" id="pageone">
		<div class="left-container intro-container">
			<introText />
		</div>
		<div class="right-container meduse-container">
			<transition name="fadeUp">
				<div class="relax" v-show="isStressed">{{$t('jellyfish')}}</div>
			</transition>
			<img @click="isStressed = !isStressed" src="meduse.png" class="meduse" :alt="$t('imagesalt.jellyfish')" :title="$t('imagesalt.jellyfish')"/>
		</div>
	</div>
</template>

<script>
  import introText from '../components/intro-text'

  export default {
    components: {
      introText
    },
    data () {
      return {
        isStressed: false
      }
    }
  }
</script>

<style>	
	.meduse {
	  width:80%;
	  animation-name: floatingMeduse;
	  animation-duration:6s;
	  animation-iteration-count:infinite;
	  animation-direction:alternate;
	  transform-origin:center top;
	}
	  .relax {
		font-weight: 700;
		background-color: #ca036a;
		color: white;
		padding: 5px;
		border-radius: 5px;
		z-index: 10;
		position: absolute;
		bottom: 5%;
		right: 5%;
		animation-name: floatingMeduse;
		animation-duration: 6s;
		animation-iteration-count:infinite;
		animation-direction: alternate;
	  }

	  .fadeUp-enter-active, .fadeUp-leave-active {
		transition: opacity .5s;
	  }

	  .fadeUp-enter, .fadeUp-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	  }

	  @keyframes floatingMeduse {
		0% {
		  transform: translatey(20px) rotate3d(1,0,0,20deg);
		}

		100% {
		  transform: translatey(-50px);
		}
	  }

	  @media (max-width: 800px) {
      .meduse-container{
        display:none;
      }
      .intro-container {
        flex-basis:50%;
				/* border:1px solid blue; */
      }
	  }
	</style>