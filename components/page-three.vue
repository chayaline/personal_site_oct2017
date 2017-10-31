<template>
	<div class="page" id="pagethree">
		<div class="left-container">
      <workText />
			
		</div>
	</div>
</template>

<script>
  import workText from '../components/work-text'
  export default {
    components: {
      workText
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
    border: 1px solid green;
  }
	</style>