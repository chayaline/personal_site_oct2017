<template>
  <div class="lang">
    <p><a href="#" @click="changelang($event, 'en')">EN</a> | <a href="#" @click="changelang($event, 'fr')">FR</a></p>  
  </div>
</template>
<script>
export default {
  methods: {
    changelang (e, l) {
      e.preventDefault()
      this.$i18n.locale = l
    }
  }
}
</script>
<style>
.lang {
    position: fixed;
    top:10%;
    right:7%;
}

.lang p {
    font-size: 0.9em;
}
</style>