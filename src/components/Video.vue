<template>
<section id="video">
  <div class="row"> 
    <iframe id="ytplayer" type="text/html" width="100%" height="405" style="display:block;" src="https://www.youtube.com/embed/?listType=playlist&list=PLira2lCbJjXV7fhTI2r3BQ-JwRQAkm8Ua" frameborder="0" allowfullscreen></iframe>
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
    background: #000;
  }
</style>
