<template>
	<div class="page" id="pagethree">
		<div class="left-container projects-left-container">
      <workText />
		</div>
    <div class="right-container projects-right-container">
      <div class="projects" v-if="showMins">
        <miniature class="project-min" v-for="(project, key) in projects" :project="project" @openProject="function (name) { test(name)}" :showMins="showMins"/>
      </div>
      <project class="project-container" v-if="!showMins" :project="projectToOpen" @back="back()"/>
      <a href="#" @click="back($event)" v-if="!showMins"><p class="arrow"><<</p></a>
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

  .project-info {
    font-weight:700;
    display:flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: white;
    text-shadow: 1px 1px 1px black;
    opacity: 0;
    z-index: 2;
    transition: .5s ease;
    padding-left:5px;
  }

    .project-info > h2 {
      text-transform:uppercase;
    }
  .project-preview {
    display:block;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  .work-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 90%;
    width: 90%;
    border: 1px solid green;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 70%;
    height: 70%;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    flex-shrink: 0;
    /*border:1px solid red;*/
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
  @media (max-width:400px) {
    projects {
      flex-wrap:nowrap;
      overflow-x:scroll;
    }
  }
	</style>