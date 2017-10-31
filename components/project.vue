<template>
	<div>
    <h1>{{projectToShow.title}}</h1>
    <p>{{projectToShow.description}}</p><br/>
    <iframe v-if="projectToShow.video" frameborder="0" width="480" height="270" src="//www.dailymotion.com/embed/video/x63x5a6?autoPlay=0" allowfullscreen=""></iframe>
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

</style>