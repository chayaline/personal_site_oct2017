<template>
  <div class="intro-text">
    <h1 class="title">
      Hi! I'm <a href="#" v-scroll-to="'#pageone'">char*line;</a>
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
    margin-top: 35%;
    width: 90%;
    /*border: 1px solid green;*/
  }
</style>
