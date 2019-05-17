<template>
  <section id="spoitfy">
    <div class="row">
        
        <h2 v-in-viewport.once>RELEASES</h2>
        <div class='embed-container'><iframe src="https://open.spotify.com/embed/album/4Zjv4ZymYRCSYXEvtl1nxL" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>

        <div class='embed-container'><iframe src="https://open.spotify.com/embed/album/4pNjq1E2dLUWBMOzYFUna9" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>

        <div class='embed-container'><iframe src="https://open.spotify.com/embed/album/4G7MFbwIEqSxbw7u1tB6ND" width="300" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>

        <iframe id="follow" src="https://open.spotify.com/follow/1/?uri=spotify:artist:3mqAQkve4Njy0QFTaeutdM?si=xkYBRMXCSWqWcCSjFDGfPA&size=detail&theme=dark" width="205" height="56" scrolling="no" frameborder="0" style="border:none; overflow:hidden; text-align: center;" allowtransparency="true"></iframe>

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
  padding: 5rem 0;
  background: #393939;
  border-top: 1px solid #222;
}

#follow{
  display: block;
  margin: 4rem auto 0 auto;
}

.embed-container {
  position: relative;
  padding-bottom: 36.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  height: auto;
  width: 30.2%;
  display: inline-block;
  margin: 0 1.25%;
  box-shadow: 0px 13px 57px -19px rgba(0,0,0,0.75);
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


@media screen and (max-width: 960px) {
  .embed-container {
    width: 30%;
      padding-bottom: 56.25%;
  }
}
@media screen and (max-width: 768px) {
  .embed-container {
    width: 90%;
    margin: 2rem 5%;
  }
}



</style>
