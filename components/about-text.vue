<template>
  <div class="about-text" id="about-text">
    <h1 class="title">
      {{ $t('about.title')}}
    </h1>
    <h2 class="small">{{ $t('about.sent1')}}</h2>
  <h2 class="small">{{ $t('about.sent2')}}</h2>
  <h2 class="small">{{ $t('about.sent3')}}</h2><br />
  <h2 class="small">{{ $t('about.moreexp')}} <a target="_blank" href="https://www.linkedin.com/in/charline-moncoucut/">Linkedin</a>.</h2>
  <br /><br />
  <h1>{{ $t('about.besidecoding')}}:</h1>
    <p>{{ $t('about.besidetext')}}
  <br />
  <br /> {{ $t('about.chatinvit')}} <a href="#">{{ $t('about.writeme')}}</a>!
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