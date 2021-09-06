<template>
  <div class="work-text">
    <h1 class="title">
      {{$t('whatido.title')}}
    </h1><br/>
    <h2 class="small"><span class="cat-puces">
      <img src="/star.svg" class="puces"/> {{$t('whatido.logodesign')}}</span>
    <br/><img src="/star.svg" class="puces"/> {{$t('whatido.uxdesign')}}
    <br/><img src="/star.svg" class="puces"/> {{$t('whatido.designOps')}}
    <br/><img src="/star.svg" class="puces"/> {{$t('whatido.brandid')}}
    <br/><img src="/star.svg" class="puces"/> {{$t('whatido.printcom')}}
    <br/><img src="/star.svg" class="puces"/> {{$t('whatido.websites')}}
    <br/><img src="/star.svg" class="puces"/> {{$t('whatido.datavis')}}
    <br/><img src="/star.svg" class="puces"/> {{$t('whatido.socialmedia')}}
    <br/><br/>{{$t('whatido.notonthelist')}} <a href="#" v-scroll-to="'#pagecontact'">{{$t('whatido.tellaboutit')}}</a></h2>
    <br/>
    <h3><a href="#" v-scroll-to="'#pageportfolio'">{{$t('whatido.somexmpl')}}</a></h3>
  </div>
</template>

<style>
  .work-text {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 50%;
    width: 90%;
    flex-shrink: 0;
  }
  .puces {
    width:0.7em;
    padding-top:0.2em;
  }

  @keyframes rotateBullet {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }

  @media (max-width: 800px) {
    .work-text{
      width:80%;
      padding-left:5%;
      margin-top:10%;
      margin-bottom:5%;
    }
  }

  @media (max-height:550px) {
   .work-text {
     font-size: 0.8em;
	 } 
  }
</style>