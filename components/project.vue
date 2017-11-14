<template>
	<div class="projet-container">
    <!-- <div class="project-images">
      <div class="project-image" v-for="(image, key) in projectToShow.images" :key="key" :style="{ backgroundImage: 'url(' + image.source + ')' }">
      </div>
    </div> -->
    <div class="project-info">
    <h1>{{projectToShow.title}}</h1>
    <p>{{projectToShow.description}}</p><br/>
    </div>
    <a href="#" @click="back($event)"> << </a>
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
   width:90vw;
   height:100vh;
   flex-wrap: nowrap;
   overflow: hidden;
   flex-shrink: 0;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   padding-bottom:10%;
   padding-top:8%;
}

.project-images {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}

.project-image {
  width:20em;
  height:20em;
  background-size: contain;
  background-repeat: no-repeat;
  background-position:top center;
}
</style>