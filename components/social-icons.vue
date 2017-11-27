<template>
  <div class="social">
    <a href="https://www.facebook.com/charlinem.creadev/" target="_blank"><img :src="facebook" @mouseover="facebook = facebook_pink" @mouseleave="facebook = facebook_grey" class="svg" /></a>
    <!-- <img :src="twitter"  @mouseover="twitter = twitter_pink" @mouseleave="twitter = twitter_grey" class="svg" /> -->
    <a href="https://www.instagram.com/charline.creativedev/" target="_blank"><img :src="instagram" @mouseover="instagram = instagram_pink" @mouseleave="instagram = instagram_grey" class="svg" alt="instagram - daily pics" :title="$t('imagesalt.instagram')"/></a>
    <a href="https://www.behance.net/chamoncouca613" target="_blank"><img :src="behance" @mouseover="behance = behance_pink" @mouseleave="behance = behance_grey" class="svg" alt="behance - graphic design portfolio" :title="$t('imagesalt.behance')" /></a>
    <a href="https://www.linkedin.com/in/charline-moncoucut/" target="_blank"><img :src="linkedin" @mouseover="linkedin = linkedin_pink" @mouseleave="linkedin = linkedin_grey" class="svg" alt="linkedin - online resume" :title="$t('imagesalt.linkedin')"/></a>
    <a href="https://www.redbubble.com/fr/people/charline-m/shop/" target="_blank"><img :src="redbubble" @mouseover="redbubble = redbubble_pink" @mouseleave="redbubble = redbubble_grey" class="svg" alt="Redbubble - design shop" :title="$t('imagesalt.redbubble')"/></a>
    <!-- <img :src="pinterest" @mouseover="pinterest = pinterest_pink" @mouseleave="pinterest = pinterest_grey" class="svg" /> -->
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
        pinterest_pink: '/pinterest_pink.svg',
        redbubble: '',
        redbubble_grey: '/redbubble_grey.svg',
        redbubble_pink: '/redbubble_pink.svg'
      }
    },
    created: function () {
      this.facebook = this.facebook_grey
      this.twitter = this.twitter_grey
      this.instagram = this.instagram_grey
      this.behance = this.behance_grey
      this.linkedin = this.linkedin_grey
      this.pinterest = this.pinterest_grey
      this.redbubble = this.redbubble_grey
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
      top: 4vh;
      justify-content:flex-end;
    }
  }
</style>
