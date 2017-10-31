<template>
	<div class="page" id="pagecontact">
		<div class="left-container">
      <h1 class="title">Get in touch</h1><br/>
      <h2 class="small">If you want to work with me or just if you want to chat about something,
      email me here!</h2>
      <p>I'm also on social media if you prefer (links below)</p>
		</div>
    <div class="right-container contact-container">
      <div class="contactform">
        <img src="contact_bg.png" class="contact-bg"/>
        <form action="https://formspree.io/cha.moncoucut@gmail.com" method="post" id="contactform"><br/>
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
  }

  /*.contact-container {
    background-image: url("/contact_bg.png");
    background-repeat:no-repeat;
    background-size:40%;
    background-position-x:right;
    background-position-y:center;
  }*/

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
    left: 50%;
    /*transform: rotate(10deg);*/
    animation-name: floatingPortrait;
    animation-duration:6s;
    animation-iteration-count:infinite;
    animation-direction:alternate;
  }
	</style>