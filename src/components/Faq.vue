<template>
  <section id="faq">
    <div class="row">
      <div class="aboutContent">

      <h2 v-in-viewport.once>FAQ</h2>
      <p>1. The prices of the beats are lease prices?</p>
      <p>No, these prices are for exclusive rights. The beat will only be used for the song you have purchased it for. No other artist can use it once purchased.</p>

      <p>2. Once I purchase the exclusive rights do I own the beat?</p>
      <p>No. You don't own the beat. We retain ownership of all our beats. You have exclusive rights to the beat meaning you will have the right to use the beat to be present to the public. You also can distribute to iTunes/Spotify/Tidal etc.</p>

      <p>3. If I lease a beat and record my lyrics on the beat, can I put it on iTunes/Spotify/Tidal etc.?</p>
      <p>Yes. Production must be accredited and attributed to Greater Good and written notice via email or DM required.</p>

      <p>4. Do you clear the samples of the beats? </p>
      <p>No. We don't clear the samples. That will be the responsibility of the artist(s) or record label when putting the track out into the public.</p>
  
      </div>
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
  vertical-align: top;
}
.twitterBox{
  width: 34%;
  display: inline-block;
}




</style>
