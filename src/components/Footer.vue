<template>
<footer>
    <Social/>
    <span>All content copyright of Greater Good 2018. All rights reserved.</span>
</footer>
</template>

<script>
import Social from './Social.vue'
export default {
  props: {
    msg: String
  },
  components: {
    Social
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
footer{
  border-top: 1px solid #141414;
  background: #020202;
  padding: 5rem;
  text-align: center;
}

</style>
