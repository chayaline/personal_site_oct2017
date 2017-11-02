<template>
  <div class="intro-text">
    <h1 class="title">
      Hi! I'm <a href="#" v-scroll-to="'#pagetwo'">char*line;</a>
    </h1>
    <h2 class="subtitle">
      I'm a <a href="#">graphic designer</a> and a <a href="#">web developper</a>, based in Paris, France.
      <br/><br />
      <a href="#" v-scroll-to="'#pagecontact'">let's talk!</a>
</h2>
  </div>
</template>

<style>
  .intro-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 50%;
    width: 90%;
    /*border: 1px solid green;*/
  }

  @media (max-width: 800px) {
    .intro-text{
      width:80%;
      padding-left:5%;
      margin-top:40%;
      margin-bottom:5%;
    }
  }

  		 @media (max-height:500px) {
   .intro-text {
     margin-top: 0%;

	 } 
  }
</style>
