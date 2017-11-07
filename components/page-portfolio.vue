<template>
	<div class="page pageportfolio">
  <div class="pictures-container">
    <div class="project-picture" v-for="(project, key) in projects"  :key="key">
      <img :src="project.preview_img"/>
    </div>
  </div>
	</div>
</template>
<script>
  export default {
    components: {

    },
    data () {
      return {
        projects: [
          {
            'title': 'CityTaps',
            'tags': ['#graphicdesign', '#devsoftware'],
            'preview_img': 'https://image.ibb.co/iwYgqw/couverture7.jpg'
          },
          {
            'title': 'Mozaïka',
            'tags': ['#graphicdesign', '#poster'],
            'preview_img': 'https://image.ibb.co/foCkHb/affiche2017_v1.jpg'
          },
          {
            'title': 'Paper & ink',
            'tags': ['#illustration'],
            'preview_img': 'https://image.ibb.co/ccqGOG/crow_totem.jpg'
          },
          {
            'title': 'Aste Béon',
            'tags': ['#schoolproject', '#graphicdesign'],
            'preview_img': 'https://image.ibb.co/hiAuAw/affiche.jpg'
          },
          {
            'title': 'Tribal Fusion Layers Madness',
            'tags': ['#web'],
            'preview_img': 'https://image.ibb.co/gvdsxb/tfm.jpg'
          }
        ],
        projectsWidth: '25%'
      }
    }
  }
</script>

<style>
 .pageportfolio {
   padding-right:7%;
   padding-left:7%;
 }
 .pictures-container {
   /* border: 1px solid blue; */
   width:100%;
   height:90%;
   flex-wrap: nowrap;
   overflow-x: hidden;
   flex-shrink: 0;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
 }

 .project-picture img {
   width: 100%;
 }

 @media (max-width: 600px){
   .pictures-container{
     flex-direction: column;
     height:auto;
   }
 }
	</style>