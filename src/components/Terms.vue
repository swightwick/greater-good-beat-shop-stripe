<template>
<section id="terms">
  <div class="row"> 
    
    <h2 v-in-viewport.once>EXCLUSIVE RIGHTS</h2>
    <p>You will receive a MP3 file of the beat (or song), untagged (free of soundmarks) and/or a copy of the raw WAV file. The song file can be delivered digitally through email. Exclusive rights grant you unlimited commercial recordings and broadcasts. You have full rights to record, mix the beat/song in any shape, way, or form (except reselling the beat), do live performances license your song to Film/TV/Movie companies. Greater Good request 50/50 split publishing for any track that we produced that's released commercially and reaches over 5,000 sales. You cannot alter the beat unless given permission to do so by Greater Good. Greater Good may no longer lease or sell the beat/song, except for his own promotional page (no downloads). Greater Good will receive publishing royalty from the sale of records or downloads. You must however give full credit to Greater Good on all commercial recordings.</p>
    
    <p>
    Please be aware: ***IF ANY PARTY USE ANY BEATS PRODUCED, COMPOSED AND WRITTEN BY GREATER GOOD WITHOUT PERMISSION OR AUTHORIZATION WE WILL BRING UPON LEGAL ACTION TO ALL PARTIES INVOLVED.</p>

  </div>
</section>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section{
  border-top: 1px solid #222;
  /* background-image: url(./assets/texture.png); */
  padding: 5rem 0 9rem 0;
  background: #0e0e0e;
}
#line{
  background: rgb(71,229,188);
  background: linear-gradient(90deg, rgba(71,229,188,1) 0%, rgba(129,228,218,1) 100%);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
