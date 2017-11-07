<template>
  <div class="project-min">
    <div class="project-preview" :style="{ backgroundImage: 'url(' + project.preview_img + ')' }">
    </div>
    <a href="#" @click="test($event, project.title)">
    <div class="project-info">
      <h2>{{project.title}}</h2>
      <p v-for="(tag, key) in project.tags" :key="key">{{tag}}</p>
    </div>
    </a>
      <div class="overlay">
      </div>
  </div>
</template>
<script>
  export default {
    props: {
      project: Object,
      showMins: Boolean
    },
    data () {
      return {
        previewstyle: ''
      }
    },
    methods: {
      getPreviewBackground () {
        this.previewstyle = '{"backgroundImage":url(' + this.project.preview_img + ')}'
      },
      test (el, title) {
        el.preventDefault()
        this.$emit('openProject', title)
      }
    }
  }
</script>