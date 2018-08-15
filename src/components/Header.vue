<template>
  <header>
      <img src="../assets/gg.png" class="logo">
    <nav>
    <ul>
      <li><a v-scroll-to="'#music'">Music</a></li>     
      <li><a v-scroll-to="'#about'">About</a></li>     
      <li><a v-scroll-to="'#terms'">Terms</a></li>     
    </ul>
    </nav>
  </header>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo{
  float: left;
  width: 3rem;
}
nav {
  float: right;
  margin-top: 1.5rem;
  font-size: 1rem;
}
a{
  cursor: pointer;
}
header{
  padding: 1rem 3rem;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 999;
  /* border-bottom: 1px solid #b5b5b5; */
}
header:after {
  content: "";
  display: table;
  clear: both;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

@media screen and (max-width: 600px) {
  header{
    padding: 1rem;
  }
}

</style>
