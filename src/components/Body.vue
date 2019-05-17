<template>
  <section id="music">
  <div class="row">
    <h1 v-in-viewport.once>LATEST TRACKS</h1>
    <h3 v-in-viewport.once>AVAILABLE TO PURCHASE</h3>

    <div id="trackHolder">



      <article>
        <aplayer :music="{
        title: 'The speakeasy',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/the-speakeasy.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat1">BUY WAV</button>
        </div>
      </article>

      <article>
        <aplayer :music="{
        title: 'Cluster',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/cluster.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat2">BUY WAV</button>
        </div>
      </article>

      <article>
        <aplayer :music="{
        title: 'Footprints on the moon',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/footprints-on-the-moon.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat3">BUY WAV</button>
        </div>
      </article>

      <!-- <article>
        <aplayer :music="{
        title: 'Lazy Piano',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/lazy-piano.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat5">BUY WAV</button>
        </div>
      </article>

      <article>
        <aplayer :music="{
        title: 'Access',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/access.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat6">BUY WAV</button>
        </div>
      </article> -->

    </div>


  </div>
    </section>

</template>

<script>

import Aplayer from 'vue-aplayer'

export default {
    methods: {
    beat1() {
      this.$checkout.open({
        name: 'The Speakeasy WAV',
        currency: 'GBP',
        amount: 10000,
        token: (token) => {
        } 
      });
    },
    /// BEAT2
    beat2() {
      this.$checkout.open({
        name: 'Cluster WAV',
        currency: 'GBP',
        amount: 10000,
        token: (token) => {
        } 
      });
    },
    /// BEAT3
    beat3() {
      this.$checkout.open({
        name: 'Footprints on the moon WAV',
        currency: 'GBP',
        amount: 10000,
        token: (token) => {
        } 
      });
    },
    /// BEAT4
    beat4() {
      this.$checkout.open({
        name: 'Beat 2 MP3',
        currency: 'GBP',
        amount: 10000,
        token: (token) => {
        } 
      });
    },
    /// BEAT4
    beat5() {
      this.$checkout.open({
        name: 'Beat 2 MP3',
        currency: 'GBP',
        amount: 10000,
        token: (token) => {
        } 
      });
    },
    /// BEAT4
    beat6() {
      this.$checkout.open({
        name: 'Beat 2 MP3',
        currency: 'GBP',
        amount: 10000,
        token: (token) => {
        } 
      });
    },
  },
  props: {
    msg: String,
    mini: true
  },
  components: {
    Aplayer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  color: white;
}
section{
  margin-top: 10rem;
}
article{
  padding: .5rem 0;
  border-top: 1px solid #333;
  display: flex;
}
article:first-of-type{
  border-top: none;
  padding-top: 0;
}
article:last-of-type{
  border-bottom: none;
  padding-bottom: 0;
}
article:before{
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
#trackHolder{
  width: 70%;
  margin: 0 auto;
  background: #222;
  padding: 1rem;
  margin-bottom: 10rem;
  margin-top: 5rem;
  box-shadow: 0px 10px 100px 1px rgb(0, 0, 0);
}
.aplayer .aplayer-body .aplayer-info{
  background: transparent !important;
}
.buyButtons{
  display: inline-block;
  width: 30%;
  vertical-align: top;
}
.aplayer{
  width: 70%;
  display: inline-block;
  box-shadow: none;
  margin: 0;
  font-family: 'Roboto Mono', monospace;
}

button{
  padding: 6px 1rem;
  border: none;
  background: #888888;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  font-family: 'Roboto Mono', monospace;
  height: 100%;
}
button:last-of-type{
  margin-bottom: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

@media screen and (max-width: 960px) {
  article{
    display: block;
  }
  .aplayer{
    width: 100%;
  }
  .buyButtons{
    width:100%;
  }
  #trackHolder{
    width: 80%;
  }
}


h1, h3{
  opacity: 0;
}
h1.in-viewport, h3.in-viewport{
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
