<template>
  <div class="work-text">
    <h1 class="title">
      What I do
    </h1><br/>
    <h2 class="small"><span class="cat-puces">
      <img src="/star.svg" class="puces"/> Logo design</span>
    <br/><img src="/star.svg" class="puces"/> Brand identity
    <br/><img src="/star.svg" class="puces"/> Print communication
    <br/><img src="/star.svg" class="puces"/> Websites
    <br/><img src="/star.svg" class="puces"/> Web apps
    <br/><img src="/star.svg" class="puces"/> Data visualisations
    <br/><img src="/star.svg" class="puces"/> Infographics
    <br/><img src="/star.svg" class="puces"/> Visuals for social media
    <br/><br/>What you want is not on the list? I'd be happy to work on something new, <a href="#" v-scroll-to="'#pagecontact'">tell me about it</a>!</h2>
    <br/>
    <h3><a href="#" v-scroll-to="'#pageportfolio'">Want to see some examples?</a></h3>
  </div>
</template>

<style>
  .work-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 50%;
    width: 90%;
    /* border: 1px solid green; */
  }
  .cat-puces::before {
    content: ;
  }
  .puces {
    width:0.7em;
    padding-top:0.2em;
  }
  @media (max-width: 800px) {
    .work-text{
      width:80%;
      padding-left:5%;
      margin-top:40%;
      margin-bottom:5%;
    }
  }

  		 @media (max-height:500px) {
   .work-text {
     margin-top: 0%;
	 } 
  }
</style>