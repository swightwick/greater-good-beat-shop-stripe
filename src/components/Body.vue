<template>
  <section id="music">
  <div class="row">
    <h1>LATEST TRACKS</h1>
    <h3>AVAILABLE TO PURCHASE</h3>

    <div id="trackHolder">
      <article>
        <aplayer :music="{
        title: 'The speakeasy',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/the-speakeasy.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat1option1">BUY MP3</button>
          <button @click="beat1option2">BUY WAV</button>
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
          <button @click="beat2option1">BUY MP3</button>
          <button @click="beat2option2">BUY WAV</button>
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
          <button @click="beat3option1">BUY MP3</button>
          <button @click="beat3option2">BUY WAV</button>
        </div>
      </article>

      <!-- <article>
        <aplayer :music="{
        title: 'The Cloud',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/the-cloud.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat4option1">BUY MP3</button>
          <button @click="beat4option2">BUY WAV</button>
        </div>
      </article>

      <article>
        <aplayer :music="{
        title: 'Western',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/western.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat5option1">BUY MP3</button>
          <button @click="beat5option2">BUY WAV</button>
        </div>
      </article>

      <article>
        <aplayer :music="{
        title: 'Boppy',
        theme: '#888',
        artist: 'Greater Good',
        src: './assets/mp3/boppy.mp3',
        pic: './assets/gg.png' }" />
        <div class="buyButtons">
          <button @click="beat6option1">BUY MP3</button>
          <button @click="beat6option2">BUY WAV</button>
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
    beat1option1() {
      this.$checkout.open({
        name: 'Beat 1 MP3',
        currency: 'GBP',
        amount: 5000,
        token: (token) => {
        } 
      });
    },
    beat1option2() {
      this.$checkout.open({
        name: 'Beat 1 WAV',
        currency: 'GBP',
        amount: 10000,
        token: (token) => {
        } 
      });
    },
    /// BEAT2
    beat2option1() {
      this.$checkout.open({
        name: 'Beat 2 MP3',
        currency: 'GBP',
        amount: 5000,
        token: (token) => {
        } 
      });
    },
    beat2option2() {
      this.$checkout.open({
        name: 'Beat 2 WAV',
        currency: 'GBP',
        amount: 100,
        token: (token) => {
        } 
      });
    },
    /// BEAT3
    beat3option1() {
      this.$checkout.open({
        name: 'Beat 2 MP3',
        currency: 'GBP',
        amount: 50,
        token: (token) => {
        } 
      });
    },
    beat3option2() {
      this.$checkout.open({
        name: 'Beat 2 WAV',
        currency: 'GBP',
        amount: 100,
        token: (token) => {
        } 
      });
    },
    beat4option1() {
      this.$checkout.open({
        name: 'Beat 2 MP3',
        currency: 'GBP',
        amount: 50,
        token: (token) => {
        } 
      });
    },
    beat4option2() {
      this.$checkout.open({
        name: 'Beat 2 WAV',
        currency: 'GBP',
        amount: 100,
        token: (token) => {
        } 
      });
    },
    beat5option1() {
      this.$checkout.open({
        name: 'Beat 2 MP3',
        currency: 'GBP',
        amount: 50,
        token: (token) => {
        } 
      });
    },
    beat5option2() {
      this.$checkout.open({
        name: 'Beat 2 WAV',
        currency: 'GBP',
        amount: 100,
        token: (token) => {
        } 
      });
    },
    beat6option1() {
      this.$checkout.open({
        name: 'Beat 2 MP3',
        currency: 'GBP',
        amount: 50,
        token: (token) => {
        } 
      });
    },
    beat6option2() {
      this.$checkout.open({
        name: 'Beat 2 WAV',
        currency: 'GBP',
        amount: 100,
        token: (token) => {
        } 
      });
    },
  },
  name: 'HelloWorld',
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


</style>
