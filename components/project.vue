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
      projectToShow: projects[this.project] || ''
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
}

.back-arrows {
  font-size: 1.4em;
}
</style>