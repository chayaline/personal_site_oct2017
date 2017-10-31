<template>
  <section class="container">
      <bgTriangles/>
      <starMenu />
      <pageOne id="pageone"/>
      <pageTwo id="pagetwo"/>
      <pageThree id="pagethree" />
      <pageContact id="pagecontact" />
      <socialIcons />
  </section>
</template>

<script>
  import bgTriangles from '../components/bg-triangles'
  import pageOne from '../components/page-one'
  import pageTwo from '../components/page-two'
  import pageThree from '../components/page-three'
  import pageContact from '../components/page-contact'
  import socialIcons from '../components/social-icons'
  import starMenu from '../components/menu'

  export default {
    components: {
      bgTriangles,
      pageOne,
      pageTwo,
      pageThree,
      pageContact,
      socialIcons,
      starMenu
    },
    data () {
      return {
        isStressed: false
      }
    },
    methods: {
      stressed () {
        this.isStressed = !this.isStressed
      }
    }
  }
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction:column;
  /*align-items: center;*/
}

.page {
    /*min-height: 100vh;*/
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-direction:row;
    padding-left: 7%;
    /*border: 1px solid red;*/
  }

.left-container {
  display:flex;
  min-height:90vh;
  max-width: 30vw;
  flex-direction: column;
  justify-content:center;
  align-items:flex-start;
  /*border:1px solid green;*/
}

.right-container {
  display:flex;
  justify-content: center;
  width: 100%;
  align-items:center;
  /*border: 1px solid red;*/
}

.title {
  font-family: "Podkova", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 800;
  font-size: 2em;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 700;
  font-size: 1.3em;
  word-spacing: 5px;
  padding-bottom: 15px;
}

/*.star {
  width:25px;
  top: 10%;
  position:fixed;
  left:7%;
}*/

.small {
  font-size:1.1em;
}
</style>
