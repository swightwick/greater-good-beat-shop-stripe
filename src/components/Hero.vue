<template>
  <section>
      <video-bg :sources="['./assets/vinyl.mp4']" img="../assets/hero.jpg">
          <div class="wrap">
            <div class="glitch-text" data-text="Greater Good">Greater Good</div>
          </div>
          <svg width="100%" height="780" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="white" stop-opacity="0"/>
                <stop offset="0%" stop-color="white" stop-opacity="0"/>
                <stop offset="50%" stop-color="#0e0e0e" stop-opacity="0.25"/>
                <stop offset="70%" stop-color="#0e0e0e" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#0e0e0e" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" fill="url(#Gradient2)"/>
          </svg>
      </video-bg>
  </section>

</template>

<script>
import VideoBg from 'vue-videobg'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    VideoBg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#rect1 { fill: url(#Gradient1);}

img{
  width: 100%;
}
svg{
  display: block;
  position: absolute;
  bottom: 0;
  z-index: 99;
}
.glitch-text{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  letter-spacing: 12px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
section{
    height: 45rem !important;
    width: 100%;
    background: #dddddd;
}

@mixin textGlitch($name, $intensity, $textColor, $background, $highlightColor1, $highlightColor2, $width, $height) {
  
  color: $textColor;
  position: relative;
	text-transform: uppercase;
  $steps: $intensity;
  
  // Ensure the @keyframes are generated at the root level
  @at-root {
    // We need two different ones
    @for $i from 1 through 2 {
      @keyframes #{$name}-anim-#{$i} {
        @for $i from 0 through $steps {
          #{percentage($i*(1/$steps))} {
            clip: rect(
              random($height)+px,
              $width+px,
              random($height)+px,
              0
            );
          }
        }
      }
    }
  }
  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: $background;
    clip: rect(0, 0, 0, 0); 
  }
  &:after {
    left: 2px;
        height: 20px;
    text-shadow: -1px 0 $highlightColor1;
    animation: #{$name}-anim-1 2s infinite linear alternate-reverse;
  }
  &:before {
    left: -2px;
    text-shadow: 2px 0 $highlightColor2; 
    animation: #{$name}-anim-2 3s infinite linear alternate-reverse;
  }
}
.glitch-text {
	@include textGlitch("textGlitch", 17, white, black, red, blue, 535, 115);
}

.wrap {
    max-width: 548px;
    width: 100%;
    height: 60px;
    margin: 0 auto;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 640px) {
  .glitch-text:before, .glitch-text:after{
    animation: none;
  }
  .glitch-text{
    font-size: 2.5rem;
    line-height: 6rem;
    letter-spacing: 5px;
  }
}

</style>
