<template>
  <div class="about-text" id="about-text">
    <h1 class="title">
      About me
    </h1>
    <h2 class="small">
  I code mainly in JS, I'm in love with Vue.js, Node.js and passionate about CSS!</h2>
  <h2 class="small">I'm also familiar with React, Angular, PHP and C and I love learning new technologies.</h2>
  <h2 class="small">I built my first website in 2009 and never stoped since then!</h2><br />
  <h2 class="small"> You'll find more details about my experiences on <a target="_blank" href="https://www.linkedin.com/in/charline-moncoucut/">Linkedin</a>.</h2>
  <br /><br />
  <h1>Beside coding:</h1>
    <p>I'm also a dancer, specialized in tribal fusion. Dance is my main passion and I love to fuse coding and dancing, by creating usefull apps for dancers.
  <br />
  <br /> Want to chat about code and/or dance? <a href="#">Write to me</a>!
</p>
  </div>
</template>
<script>
  export default {
    props: {
      logos: Array
    },
    methods: {
      addLogo (val) {
        const position = this.logos.indexOf(val)
        !this.logos.includes(val) ? this.logos.push(val) : this.logos.splice(position, 1)
      }
    }
  }
</script>
<style>
  .about-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 20%;
    width: 90%;
    flex-shrink: 0;
    /* border:1px solid purple; */
  }

  .detail-text {
    font-size: 0.8em;
  }

  .techno:hover{
    cursor:pointer;
  }


  @media (max-width: 800px) {
    .about-text {
      width: 80%;
      margin-top:5%;
      padding-left: 5%;
      /*border:1px dotted red;*/
    }
  }

  @media (max-height:550px) {
   .about-text {
     margin-top: 0%;
     font-size: 0.8em;
	 } 
  }
</style>