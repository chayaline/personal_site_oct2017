<template>
	<div class="page" id="pagecontact">
		<div class="left-container contact-left-container">
      <div class="about-text">
        <h1 class="title">{{$t('contact.title')}}</h1><br />
        <h2 class="small">
          {{$t('contact.contacttext')}}
        </h2>
        <p>{{$t('contact.alsomedia')}}</p>
      </div>
		</div>
    <div class="right-container contact-container">
      <div class="contactform">
        <img src="contact_bg.png" class="contact-bg"/>
        <form action="https://formspree.io/charline.creativedev@gmail.com" method="post" id="contactform"><br/>
          <input class="input" type="email" :placeholder="$t('contact.yourmail')" name="from" required /><br/>
          <input class="input" type="text" :placeholder="$t('contact.subject')" name="subject" /><br/>
          <textarea class="input text" form="contactform" :placeholder="$t('contact.message')" name="message"></textarea><br/>
          <input class="input" type="submit" :value="$t('contact.send')" />
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
    width:55%;
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
  @media (max-width:1000px) {
    .contact-bg {
      width:100%;
    }
  }
  @media (max-width: 800px) {
    .contact-bg {
      width:70%;
    }
    .contact-left-container {
      flex-basis:25%;
    }
  }

  @media (max-width:500px) {
    .contactform{
      width:100%;
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