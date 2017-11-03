<template>
	<div class="page" id="pageportfolio">
   <waterfall
        :grow="grow"
        line-gap="5px"
        ref="waterfall"
        align="center"
        line="v"
      >
  <waterfall-slot
    v-for="(item, index) in projects"
    :width="item.width"
    :height="item.height"
    :order="index"
    :key="item.index"
  >
    <img :src="item.source" />
  </waterFall-slot>
  </waterfall>
	</div>
</template>

<script>
  import {WaterFall, WaterFallSlot} from 'vue-waterfall'
  import projectTile from './waterfall-project'

  export default {
    components: {
      WaterFall,
      WaterFallSlot,
      projectTile
    },
    data () {
      return {
        grow: [3, 2, 1, 2],
        projects: [
          {
            'id': 1,
            'type': 'image',
            'title': 'CityTaps',
            'width': '20%',
            'tags': ['#graphicdesign', '#devsoftware'],
            'source': 'https://image.ibb.co/gk23dG/couverture7.jpg'
          },
          {
            'id': 2,
            'type': 'image',
            'title': 'Mozaïka',
            'width': '15%',
            'tags': ['#graphicdesign', '#poster'],
            'source': 'https://image.ibb.co/bvsVQw/affiche2017_v1.jpg'
          },
          {
            'id': 3,
            'type': 'image',
            'title': 'Paper & ink',
            'width': '20%',
            'tags': ['#illustration'],
            'source': 'https://image.ibb.co/iHCKJG/crow_totem.jpg'
          },
          {
            'id': 5,
            'type': 'image',
            'title': 'Aste-Béon',
            'width': '20%',
            'tags': ['#graphicdesign', '#schoolproject'],
            'source': 'https://image.ibb.co/gaNVTG/affiche.jpg'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style>
#pageportfolio {
  padding-right:7%;
  padding-top:7%;
}
</style>