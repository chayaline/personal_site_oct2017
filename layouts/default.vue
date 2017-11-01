<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Podkova:700,800');
  html {
    font-family: "Podkova", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue";
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    background-image: url('/paper_background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #161616;
    font-weight:700;
    overflow-x:hidden;
  }

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

  a {
    text-decoration: none;
    color: #ca036a;
  }

    a:hover, .techno:hover {
      animation-duration: 2s;
      animation-name: floatingLink;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      border-bottom:none;
    }

  @keyframes floatingLink {
    from {
      color: transparent;
      text-shadow: 0px 0px 8px #ca036a;
    }
    10% {
      color: transparent;
      text-shadow: -1px -1px 1px #ca036a;
    }
    50% {
      color: transparent;
      text-shadow: 0px 1px 2px #ca036a;
    }
    60% {
      color: transparent;
      text-shadow: 0px 1px 1px #ca036a;
    }
    80% {
      color: transparent;
      text-shadow: 0px 0px 2px #ca036a;
    }
    to {
      color: transparent;
      text-shadow: 1px 0px 5px #ca036a;
    }
  }

  @media (max-width:400px){
    html {
      font-size: 14px;
    }
  }
</style>
