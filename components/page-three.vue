<template>
	<div class="page" id="pagethree">
		<div class="left-container projects-left-container">
      <workText />
		</div>
    <div class="right-container projects-right-container">
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
  .arrow {
    font-size: 1.5em;
  }
  .projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    height: 70%;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    flex-shrink: 0;
    /*border:1px solid red;*/
  }
  .project-min {
    overflow:hidden;
    position:relative;
    margin:10px;
    width: 30%;
    min-width:100px;
    height:10vw;
    min-height:100px;
    border-radius:5px;
  }

  .overlay {
    position: absolute;
    top:0;
    left:0;
    background-color: #ca036a;
    opacity: 0;
    height:100%;
    width:100%;
    transition: .5s ease;
  }

  .project-min:hover .overlay {
    opacity: .5;
  }

  .project-min:hover .project-preview {
    opacity: .5;
  }

  .project-min:hover .project-info {
    opacity: 1;
  }
  .work-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 90%;
    width: 90%;
    /* border: 1px solid green; */
  }

  @media (max-width:800px) {
    .projects-left-container {
      flex-basis:25%;
    }
    .projects-right-container {
      flex-basis:70%;
    }
    .projects {
      width:80%;
      height:80%;
    }
  }
  @media (max-width:500px) {
    projects {
      flex-wrap:nowrap;
      overflow-x:scroll;
    }
  }
	</style>