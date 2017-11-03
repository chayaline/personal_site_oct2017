<template>
<div>
    <img :src="project.source"/>
</div>
</template>
<script>
export default {
  props: {
    project: Object
  }
}
</script>