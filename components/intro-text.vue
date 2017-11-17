<template>
  <div class="intro-text">
    <h1 class="title">
      {{$t('intro.hi')}} <a href="#" v-scroll-to="'#pagetwo'">char*line;</a>
    </h1>
    <h2 class="subtitle">
      {{$t('intro.im')}} <a href="#" v-scroll-to="'#pagethree'">{{$t('intro.graphicdesigner')}}</a> {{$t('intro.and')}} <a href="#" v-scroll-to="'#pagethree'"> {{$t('intro.webdevelopper')}}</a>, {{$t('intro.basedin')}}.
      <br/><br />
      <a href="#" v-scroll-to="'#pagecontact'">{{$t('intro.letstalk')}}</a>
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
  }

  @media (max-width: 800px) {
    .intro-text{
      width:80%;
      padding-left:5%;
      margin-top:0vh;
      margin-bottom:5%;
    }
  }

  		 @media (max-height:500px) {
   .intro-text {
     margin-top: 0%;
	 } 
  }
</style>
