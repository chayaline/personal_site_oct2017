<template>
  <div class="social">
    <img :src="facebook" @mouseover="facebook = facebook_pink" @mouseleave="facebook = facebook_grey" class="svg" />
    <img :src="twitter"  @mouseover="twitter = twitter_pink" @mouseleave="twitter = twitter_grey" class="svg" />
    <a href="https://www.instagram.com/charline.creativedev/" target="_blank"><img :src="instagram" @mouseover="instagram = instagram_pink" @mouseleave="instagram = instagram_grey" class="svg" /></a>
    <img :src="behance" @mouseover="behance = behance_pink" @mouseleave="behance = behance_grey" class="svg" />
    <img :src="linkedin" @mouseover="linkedin = linkedin_pink" @mouseleave="linkedin = linkedin_grey" class="svg" />
    <img :src="pinterest" @mouseover="pinterest = pinterest_pink" @mouseleave="pinterest = pinterest_grey" class="svg" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        facebook: '',
        facebook_grey: '/facebook_grey.svg',
        facebook_pink: '/facebook_pink.svg',
        twitter: '',
        twitter_grey: '/twitter_grey.svg',
        twitter_pink: '/twitter_pink.svg',
        instagram: '',
        instagram_grey: '/instagram_grey.svg',
        instagram_pink: '/instagram_pink.svg',
        behance: '',
        behance_grey: '/behance_grey.svg',
        behance_pink: '/behance_pink.svg',
        linkedin: '',
        linkedin_grey: '/linkedin_grey.svg',
        linkedin_pink: '/linkedin_pink.svg',
        pinterest: '',
        pinterest_grey: '/pinterest_grey.svg',
        pinterest_pink: '/pinterest_pink.svg'
      }
    },
    created: function () {
      this.facebook = this.facebook_grey
      this.twitter = this.twitter_grey
      this.instagram = this.instagram_grey
      this.behance = this.behance_grey
      this.linkedin = this.linkedin_grey
      this.pinterest = this.pinterest_grey
    }
  }
</script>
<style>
  .social {
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
    width: 70%;
    position: fixed;
    bottom: 10%;
    left: 7%;
  }

  .svg {
    width:25px;
    margin:5px;
  }

  @media (max-width: 800px) {
    .social {
      bottom:initial;
      left:initial;
      right:5%;
      top: 5vh;
      /*width:90%;*/
      justify-content:flex-end;
      /*border:1px solid blue;*/
    }
  }
</style>
