<template>
  <section class="container">
      <starMenu />
      <languages />
      <bgTrianglesv2/>
      <pageOne id="pageone"/>
      <pageTwo id="pagetwo"/>
      <pageThree id="pagethree" />
      <pagePortfolio id="pageportfolio"/>
      <pageContact id="pagecontact" />
      <socialIcons />
  </section>
</template>

<script>
  import bgTrianglesv2 from '../components/bg-trianglesv2'
  import pageOne from '../components/page-one'
  import pageTwo from '../components/page-two'
  import pageThree from '../components/page-three'
  import pagePortfolio from '../components/page-portfolio'
  import pageContact from '../components/page-contact'
  import socialIcons from '../components/social-icons'
  import starMenu from '../components/menu'
  import languages from '../components/languages'

  export default {
    components: {
      bgTrianglesv2,
      pageOne,
      pageTwo,
      pageThree,
      pagePortfolio,
      pageContact,
      socialIcons,
      starMenu,
      languages
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
  flex-direction:column;
  flex-shrink:0;
}

  .page {
    width:100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding-left: 7%;
    flex-shrink: 0;
  }

  .left-container {
    display: flex;
    min-height: 90vh;
    max-width: 30vw;
    flex-basis:40%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-shrink: 0;
  }

  .right-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-basis:60%;
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

.small {
  font-size:1.1em;
}

  @media (max-width: 800px) {
    .container{
      width:100vw;
      max-width:100vw;
    }
    .left-container {
      max-width: initial;
      min-height: initial;
      min-height: 20vh;
      max-height: 80vh;
      max-width: none;
      padding-bottom:5%;
      flex-basis: 100%;
      width: 100%;
      order: 1;
    }
    .right-container{
      width:100%;
      max-height:50vh;
      min-height:50vh;
      margin-top:18%;
      order:2;
    }
    .page {
      max-width: 100vw;
      width:100vw;
      padding-left: 0;
      min-height:100vh;
      height:auto;
      justify-content: flex-end;
      flex-direction: column;
    }
  }

  @media (max-width: 500px) {
    .title {
      font-size: 1.5em;
    }
  }
</style>
