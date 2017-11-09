<template>
	<div class="page" id="pagethree">
		<div class="left-container projects-left-container">
      <workText />
		</div>
    <div class="right-container projects-right-container">
    <div class="latest-projects-container">
    <h1 class="title">{{$t('whatido.latestproject')}}</h1><br/>
      <iframe frameborder="0" width="480" height="270" src="//www.dailymotion.com/embed/video/x63x5a6" allowfullscreen></iframe>
      <br/><br/><h1>{{$t('whatido.currentprojects')}}:</h1>
      <br/><p><img src="/star.svg" class="puces"/><span class="cur-projects-title">Dance Notebook:</span> {{$t('whatido.dancenotebook')}}</p>
      <br/><p><img src="/star.svg" class="puces"/><span class="cur-projects-title">What's the counts? :</span> {{$t('whatido.whatzecount')}}</p>
    </div>
    </div>
	</div>
</template>

<script>
  import workText from '../components/work-text'
  import miniature from '../components/miniatures'
  import project from '../components/project'

  export default {
    components: {
      workText,
      miniature,
      project
    },
    data () {
      return {
        projects: [
          {
            'title': 'CityTaps',
            'tags': ['#graphicdesign', '#devsoftware'],
            'preview_img': 'https://image.ibb.co/gk23dG/couverture7.jpg'
          },
          {
            'title': 'Mozaïka',
            'tags': ['#graphicdesign', '#poster'],
            'preview_img': 'https://image.ibb.co/bvsVQw/affiche2017_v1.jpg'
          },
          {
            'title': 'Paper & ink',
            'tags': ['#illustration'],
            'preview_img': 'https://image.ibb.co/iHCKJG/crow_totem.jpg'
          }
        ],
        showMins: true,
        projectToOpen: '',
        showProject: false
      }
    },
    methods: {
      test (val) {
        this.showMins = false
        this.projectToOpen = val
        this.showProject = true
      },
      back (el) {
        el.preventDefault()
        this.showProject = false
        this.projectToOpen = ''
        this.showMins = true
      }
    }
  }
</script>

<style>
  .work-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 90%;
    width: 90%;
    /* border: 1px solid green; */
  }
  .cur-projects-title {
    color:#ca036a;
    font-weight: 800;
    margin-left: 5px;
  }
 .latest-projects-container {
   width:80%;
 }
  @media (max-width:800px) {
    .projects-right-container {
      display:none;
    }
  }
	</style>