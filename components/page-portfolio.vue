<template>
	<div class="page pageportfolio">
    <div class="safecontain">
    <transition-group name="miniatureSlide" mode="out-in">
    <div class="pictures-container" v-show="showmin" key="1">
      <a href="#" @click="openProject($event, project.title)"  v-for="(project, key) in projects" :key="key">
        <div class="project-picture" :style="{ backgroundImage: 'url(' + project.preview_img + ')' }">
          <div class="project-text">
            <h1 class="project-title">{{project.title}}</h1>
            <p><span v-for="(tag, key) in project.tags" :key="key"> {{tag}} </span></p>
          </div>
        </div>
      </a>
    </div>
    <project v-if="showproj && projToShow" :project="projToShow" @back="closeProject()" key="2"/>
    </transition-group>
    </div>
	</div>
</template>
<script>
  import project from './project'
  export default {
    components: {
      project
    },
    data () {
      return {
        showmin: true,
        showproj: false,
        projToShow: '',
        projects: [
          {
            'title': 'Adeline Arts Pilates',
            'tags': ['#personalwebsite', '#UIdesign'],
            'preview_img': 'https://i.ibb.co/j6vBkPQ/adeline-home.png'
          },
          {
            'title': 'CityTaps',
            'tags': ['#UIdesign', '#devsoftware'],
            'preview_img': 'https://image.ibb.co/iwYgqw/couverture7.jpg'
          },
          {
            'title': 'Tribal Fusion Layers Madness',
            'tags': ['#webapp'],
            'preview_img': 'https://i.ibb.co/MnWVMF0/Capture-d-e-cran-2021-09-06-a-14-23-44.png'
          },
          {
            'title': 'Code Mandalas',
            'tags': ['#illustration'],
            'preview_img': 'https://image.ibb.co/fSNwCm/json_blues_square.jpg'
          },
          {
            'title': 'Mozaïka',
            'tags': ['#graphicdesign', '#poster'],
            'preview_img': 'https://image.ibb.co/foCkHb/affiche2017_v1.jpg'
          }
        ]
      }
    },
    methods: {
      openProject (e, projet) {
        let self = this
        e.preventDefault()
        this.showmin = false
        setTimeout(function () { self.showproj = true }, 500)
        this.projToShow = projet
      },
      closeProject () {
        let self = this
        this.showproj = false
        setTimeout(function () { self.showmin = true }, 500)
      }
    }
  }
</script>

<style>
 .pageportfolio {
   padding-right:7%;
   padding-left:7%;
   width:100vw;
   height: 100vh;
   overflow: hidden;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
 }
 .pictures-container {
   width:86vw;
   height:50vh;
   flex-wrap: nowrap;
   overflow: hidden;
   flex-shrink: 0;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
 }

.safecontain {
   width:86vw;
   height:50vh;
}
 .project-picture {
   flex-basis: 14em;
   flex-grow: 1;
   height:25vh;
   background-size: cover;
   background-position:center;
   margin:5px;
   border-radius:5px;
   overflow: hidden;
 }
  .project-picture:hover .project-text{
    opacity:1;
    margin-top: 0;
  }
 .project-text {
   background-color: rgba(202, 3, 106, 0.6);
   opacity: 0;
   color: white;
   padding:5px;
   width:100%;
   height:100%;
   letter-spacing: 1px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   transition-duration: .4s;
   transition-timing-function: ease;
   margin-top:-100%;
 }

 .project-title {
   letter-spacing: 2px;
   text-transform: uppercase;
 }

 .miniatureSlide-enter-active {
    animation-name: minSlide;
    animation-duration: .3s;
    animation-direction: reverse
 }

.miniatureSlide-leave-active {
    animation-name: minSlide;
    animation-duration: .3s;
 }

@keyframes minSlide {
  0% {
    transform: rotateY(0)
  }
  100% {
    transform: rotateY(90deg)
  }
}

@media (max-width: 800px) {
  .safecontain {
   width:100vw;
   height:auto;
   min-height:100vh;
   padding-top: 30%;
   flex-direction: column;
}

 .project-picture {
   flex-basis: 10em;
   flex-grow: 1;
   width:50vw;
   background-size: cover;
   background-position:center;
   margin:5px;
   border-radius:5px;
   overflow: hidden;
 }

  .pageportfolio {
    height:auto;
  }
 .pictures-container {
   width:100vw;
   height:auto;
   flex-wrap: wrap;
   overflow: hidden;
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
 }
}
 @media (max-height: 600px) and (min-width:500px){
   .safecontain {
     padding-top: 5%;
   }
 }
	</style>