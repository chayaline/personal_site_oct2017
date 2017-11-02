<template>
  <div class="work-text">
    <h1 class="title">
      My creations
    </h1>
    <h2 class="subtitle">
      Here is a short selection of my creations
</h2>
    <h1>What I do</h1>
    <h2 class="small">Logo design, brand identity, print communication, websites, web apps, data visualisations, web based softwares, visuals for social media ... What you want is not on the list? I'd be happy to work on something new, <a href="#" v-scroll-to="'#pagecontact'">tell me about it</a>!</h2>
    <br/>
    <h3><a href="#" v-scroll-to="'#pagecontact'">Want to work with me?</a></h3>
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