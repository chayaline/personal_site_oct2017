<template>
	<div class="page" id="pagethree">
		<div class="left-container projects-left-container">
      <workText />
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
  
  .projects-left-container {
    /* border:2px solid blue; */
  }
  @media (max-width:800px) {
  }
	</style>