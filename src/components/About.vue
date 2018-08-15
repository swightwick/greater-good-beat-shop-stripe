<template>
<section id="about">
  <div class="row">
    <div class="aboutContent">
      
    <h2>ABOUT</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, beatae dolores reprehenderit perferendis labore architecto. Voluptatibus, voluptate quod? Autem animi sunt qui culpa perspiciatis esse excepturi fugit modi? Aperiam, esse.</p>
    <h2>FAQ</h2>
    <p>1. The prices of the beats are lease prices?</p>
    <p>Yes. The prices that you see are lease prices. If you want to purchase the exclusives rights to the beat contact us first.</p>
    <p>2. Once I purchase the exclusive rights do I own the beat?</p>
    <p>No. You don't own the beat. We retain ownership of all our beats. You have exclusive rights to the beat meaning you will have the right to use the beat to be present to the public. You also can distributed to iTunes/Spotify/Tidal etc. Click here to read the terms and conditions.</p>
    <p>3. If I lease a beat and record my lyrics on the beat, can I put it on iTunes/Spotify/Tidal etc.?</p>
    <p>No you can not without contacting us first. Keep in mind even we give you the permission to do so an artist or label can purchase the exclusive rights to the beat. We highly suggest you purchase the exclusives to the beat if you plan on making money.</p>
    <p>4. Do you clear the samples of the beats? </p>
    <p>No. We don't clear the samples. That will be the responsibility of the artist(s) or record label when putting the track out into the public.</p>
    <p>5. Can you create a custom beat just for me/my artists?</p>
    <p>Yes we do. For more details click here.</p>   
    </div>
    <!-- <Timeline :id="'greatergood13'" :sourceType="'profile'" :options="{ tweetLimit: '3', linkColor: '#55acee', theme: 'dark' }" :widget-class="'twitterBox'"/> -->
  </div>
</section>


</template>

<script>
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
  components:{
    Timeline
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
section{
  padding: 5rem 0;
  background: #171717;
  border-top: 1px solid #222;
}
.aboutContent{
  width: 100%;
  display: inline-block;
  margin-right: 5%;
  vertical-align: top;
}
.twitterBox{
  width: 34%;
  display: inline-block;
}




</style>
