<template>
	<div class="projet-container">
    <div class="project-info">
    <h1>{{projectToShow.title}}</h1><br/>
    <p>{{projectToShow.description}}</p><br/>
    <div v-for="(link, key) in projectToShow.links" :key="key" >
    <img src="/star.svg" class="puces"/>&nbsp<a  :href="link.url" target="_blank" >{{link.text}}</a><br/>
    </div>
    <br/><a href="#" @click="back($event)" class="back-arrows"> << </a>
    </div>
    <div class="project-images">
      <div class="project-image" v-for="(image, key) in projectToShow.images" :key="key" :style="{ backgroundImage: 'url(' + image.source + ')', flexBasis: image.flexbasis, flexGrow: image.flexgrow}">
      </div>
    </div>
	</div>
</template>
<script>
import projects from '../static/projects.json'
export default {
  props: {
    project: String
  },
  data () {
    return {
      i18nlocale: this.$i18n.locale,
      projectToShow: projects[this.$i18n.locale][this.project] || ''
    }
  },
  methods: {
    back (el) {
      el.preventDefault()
      this.$emit('back')
    }
  }
}
</script>
<style>
.projet-container {
   /* border: 1px solid orange; */
   width:86vw;
   height:50vh;
   flex-wrap: wrap;
   overflow: hidden;
   flex-shrink: 0;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-end;
   flex-shrink: 0;
}

.project-images {
  /* border:1px solid fuchsia; */
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 5%;
  height:100%;
  padding-bottom: 15px;
}

.project-image {
  /* border:1px solid fuchsia; */
  height:100%;
  margin-right:2px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position:bottom center;
}

.project-info {
  flex-basis: 20%;
  /* border: 1px solid blue; */
}

.back-arrows {
  font-size: 1.4em;
}

@media (max-width: 800px) {
  .projet-container {
    width:90vw;
    height:auto;
    justify-content: center;
    align-items: flex-start;
  }
  .project-info {
    flex-basis: 100%;
    padding:5px;
    flex-grow: 1;
  }
  .project-images {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    flex-basis: 90%;
    min-width: 100vw;
    height:auto;
    flex-grow:3;
  }
  .project-image {
    min-width:70vw;
    background-position: center center;
    flex-basis: 90vw !important;
  }
}


  @media (max-height:600px) {
    .projet-container {
      padding-top: 7%;
    }
  }
</style>