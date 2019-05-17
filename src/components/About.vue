<template>
  <section id="about">
    <div class="row">
      <div class="aboutContent">
        
      <h2 v-in-viewport.once>ABOUT</h2>
      <p>Greater Good does things different. Instrumental experiments, live performances and the most obscure sampling lead to abstract and unique beats. Greater Good creates music for himself, making no boundaries or rules to work to. His love for synths, sampling and anything to do with space, shine through in his productions.</p>

      <p>Starting out during his early teens, GG messed with a demo of Dance Ejay and was instantly hooked. From there he progressed to Fruity Loops, then on to Reason, and finally settling on Ableton due to its powerful ability to handle and manipulate samples, processing, performance and workflow.</p>

      <p>After releasing a couple of instrumental albums, GG teamed up with Triple Darkness artist Ray Vendetta and together they created the 'Effortless EP'. The EP was very well recieved and brought together a variety of different artists. With new beat tapes and projects coming soon and the day to day runnings of Less Effort Clothing that he is co-founder of, the future is busy for Greater Good.</p>

      <p>Greater Good has produced for Ray Vendetta, Ten Bag Banditz, Bisk, Ja Ja Kisses & more to come.</p>

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
