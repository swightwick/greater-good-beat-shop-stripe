<template>
  <div id="app">
    <Header msg="copy"/>
    <Hero/>
    <Body/>
    <About/>
    <Spotify/>
    <Faq/>
    <Video/>
    <Terms/>
    <section id="line"></section>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Body from './components/Body.vue'
import Video from './components/Video.vue'
import About from './components/About.vue'
import Spotify from './components/Spotify.vue'
import Faq from './components/Faq.vue'
import Terms from './components/Terms.vue'
import Social from './components/Social.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Header,
    Hero,
    Body,
    Faq,
    Video,
    About,
    Spotify,
    Terms,
    Social,
    Footer
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'GG',
    // all titles will be injected into this template
    titleTemplate: 'Greater Good | Music producer. Beats, instrumentals, composition. Beats for sale',
    meta: [
      // OpenGraph data (Most widely used)
      {property: 'og:title', content: 'Beats for sale'},
      {property: 'og:site_name', content: 'Greater Good Beats'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://www.my-site.com/my-special-page'},
      {property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Hip hop beatmaker and producer'},

      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
      {name: 'twitter:title', content: 'Greater Good beatmaker'},
      {name: 'twitter:description', content: 'Hip hop beatmaker and producer'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@greater_good13'},
      {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'Greater Good beatmaker'},
      {itemprop: 'description', content: 'Hip hop beatmaker and producer'},
      {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'}
    ]
  }
}
</script>

<style lang="scss">

$black: #0E0E0E;
$grey: #393939;
$primary: #47E5BC;
$secondary: #81E4DA;

// $primary: #D1D2F9;
// $secondary: #C9CAD9;

$gradient: linear-gradient(45deg, rgba(71,229,188,1) 0%, rgba(129,228,218,1) 100%);


html, body{
  margin: 0;
  padding: 0;
  background: #0e0e0e;
  color: #a5a5a5;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  line-height: 1.75rem;
}
a{
  color: $primary;
}
h1{
  font-size: 2.5rem;
}
h2{
  font-size: 2rem;
}
h2:nth-of-type(2){
  margin-top: 8rem;
}
h3{
  font-size: 1rem;
}
h1,h2,h3{
  font-family: 'Pathway Gothic One', sans-serif;
  text-align: center;
  letter-spacing: 8px;
  color: #ddd;
  margin-bottom: 4rem;
  color: $primary;
}
.row{
  max-width: 1080px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
section#terms{
  background: $grey;
}
#line{
  height: 10px;
  background: rgb(71,229,188);
  background: linear-gradient(90deg, rgba(71,229,188,1) 0%, rgba(129,228,218,1) 100%);
}
.buyButtons button{
  background: $gradient;
  &:hover{
    background: $primary;
    cursor: pointer;
    outline: none;
  }
}
ul{
  margin: 0;
  padding: 0;
}
ul a{
  text-decoration: none;
}
iframe .timeline-Header{
  display: none !important;
}
.aplayer-body .aplayer-info{
  background: transparent !important;
}
.aplayer-body .aplayer-pic{
    height: 50px;
    width: 50px;
}
.aplayer .aplayer-title{
  text-transform: uppercase;
  font-family: 'Pathway Gothic One', sans-serif;
}

article .aplayer .aplayer-body .aplayer-info{
  padding: 0 .5rem;
  height: 50px;
}

article .aplayer .aplayer-body .aplayer-info .aplayer-music .aplayer-title {
  font-size: 1.75rem;
  line-height: 24px;
  color: white;
  letter-spacing: 2px;
}

article .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{
  margin-right: -15px;
}
.aplayer .aplayer-body .aplayer-info .aplayer-music .aplayer-author{
  display: none;
}

article .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{
  background-color: $primary !important;  
  border-color: $primary !important;  
}
.aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-mode{
  display: none;
}
.aplayer-body .aplayer-pic .aplayer-pause{
  width: 26px;
  height: 26px;
  border: 2px solid #fff;
  bottom: 50%;
  right: 50%;
  margin: 0 -15px -15px 0;
}

.aplayer-body .aplayer-pic .aplayer-pause button{
    position: absolute;
    top: 3px;
    left: 3px;
    height: 20px;
    width: 20px;
}

@media screen and (max-width: 600px) {
  article .aplayer .aplayer-body .aplayer-info .aplayer-music .aplayer-title {
    font-size: 1.25rem;
  }
}

h2{
  opacity: 0;
}
h2.in-viewport{
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}


</style>
