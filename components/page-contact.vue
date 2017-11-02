<template>
	<div class="page" id="pagecontact">
		<div class="left-container contact-left-container">
      <div class="about-text">
        <h1 class="title">Get in touch</h1><br />
        <h2 class="small">
          If you want to work with me or just if you want to chat about something,
          email me here!
        </h2>
        <p>I'm also joignable on social media.</p>
      </div>
		</div>
    <div class="right-container contact-container">
      <div class="contactform">
        <img src="contact_bg.png" class="contact-bg"/>
        <form action="https://formspree.io/charline.creativedev@gmail.com" method="post" id="contactform"><br/>
          <input class="input" type="email" placeholder="Your email adress" name="from" required /><br/>
          <input class="input" type="text" placeholder="What do you want to talk about?" name="subject" /><br/>
          <textarea class="input text" form="contactform" placeholder="Your message" name="message"></textarea><br/>
          <input class="input" type="submit" value="Send" />
        </form>
      </div>
    </div>
	</div>
</template>

<script>
  import workText from '../components/work-text'
  export default {
    components: {
      workText
    }
  }
</script>

<style>
  .contactform {
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-content:center;
    text-align:center;
    width:50%;
    margin-left: -12%;
  }
  .input {
    margin: 5px;
    width: 80%;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-family: 'Podkova', "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .text {
    height: 150px;
    max-width: 80%;
    max-height:50vh;
    resize: vertical;
  }

  input[type="submit"] {
    background-color: #ca036a;
    color:white;
  }

  .contact-bg {
    z-index: -1;
    position: absolute;
    left: 60%;
    /*transform: rotate(10deg);*/
    animation-name: floatingPortrait;
    animation-duration:6s;
    animation-iteration-count:infinite;
    animation-direction:alternate;
  }

  @media (max-width: 800px) {
    .contact-bg {
      width:90%;
    }
    .contact-left-container {
      flex-basis:25%;
    }
  }

  @media (max-width:500px) {
    .contactform{
      width:90%;
      margin-left:0;
    }
    .contact-bg {
      width: 60%;
      left:42%;
      margin-top:-25%;
    }
    .contact-container {
      margin-left: 0%;
      align-items: flex-start;
    }
  }

  @media (max-width:400px) {
    .input {
      height:40px;
    }
    .text {
      height: 80px;
    }
    .contact-bg {
      display: none;
    }
  }
	</style>