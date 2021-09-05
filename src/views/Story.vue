<template>
  <div id="story-big-con" style="height: 100vh; width: 100vw; overflow: hidden; background: #AEE0F4;">
    <transition name="fadeonly">
      <div id="start-page" v-if="finish && !start" style="height: 100vh;" class="story-container d-flex flex-column justify-content-center align-items-center">
        <div class="band-container" style="position: relative;">
          <img class="start-story-branding" :src="require('@/assets/img/Story/startstory-01.png')" alt="">
        </div>
        <div @click="startStory" class="start-button" style="position: relative;">
          <img class="border-star" :src="require('@/assets/img/Story/textborder-star.png')" alt="">
          <img class="arrow-up" :src="require('@/assets/img/Story/arrowup.png')" alt="">
        </div>
      </div>
    </transition>
    <transition name="fade" appear>
      <div v-if="!finish" style="height: 100vh;" class="story-container d-flex flex-column justify-content-center align-items-center">
        <img :src="require('@/assets/img/Story/lOADING_2.gif')" alt="">
        <h4 class="load">LOADING</h4>
      </div>
    </transition>

    <Month @return="returnToStart" v-if="start" />

    <router-link id="homeNavStory" :to="{name: 'Home'}" tag="a">
      <HomeIcon/>
    </router-link>
  </div>
</template>

<style>
#homeNavStory {
  z-index: 99;
  position: absolute;
  left: 20px;
  top: 20px;
}

#homeNavStory .cls-1 {
  fill: white;
  fill-opacity: 0.5;
  transition: all 0.2s;
}

#homeNavStory:hover .cls-1 {
  fill-opacity: 1;
}
</style>

<script>
import '@/assets/css/animation.css'
import HomeIcon from '@/components/icons/Home.vue'
import Month from '@/views/Month.vue'

export default {
  components: {
    HomeIcon,
    Month
  },
  data () {
    return {
      finish: false,
      start: false,
      month: 'jan'
    }
  },
  mounted () {
    this.$store.state.start = true
    this.$store.state.isLoadFinish = true
    this.$nextTick(() => {
      setTimeout(() => {
        this.finish = true
      }, 5000)
    })
  },
  methods: {
    startStory () {
      document.querySelector('#story-big-con').style.background = '#F8B978'
      document.querySelector('#start-page').classList.add('starting')
      setTimeout(() => { this.start = true }, 5000)
    },
    returnToStart () {
      document.querySelector('#story-big-con').style.transition = 'all .5s ease'
      document.querySelector('#story-big-con').style.background = '#AEE0F4'
      setTimeout(() => {
        document.querySelector('#story-big-con').style.transition = ''
        this.start = false
      }, 500)
    }
  }
}
</script>

<style scoped>
html, body {
  overflow: hidden;
}

#story-big-con {
  transition: background-color 5s ease;
}

.start-button {
  height: 150px;
  width: 150px;
}
.start-button .border-star {
  position: absolute;
  width: 100%;
}

.start-button {
  position: relative;
  margin-top: 30px;
  z-index: 99;
  cursor: pointer;
}

.start-button:hover img.border-star {
  animation: rotate 10s infinite linear both;
}

.start-button .arrow-up{
  position: relative;
  max-width: 50%;
  left: 25%;
  top: 25%;
  animation: arrow 1s infinite ease-out;
}

@media screen and (max-width: 1024px) {

  .start-button {
    height: 100px;
    width: 100px;
  }
}

@media screen and (max-width: 425px) {
  .start-button {
    height: 80px;
    width: 80px;
  }
}

.starting#start-page {
  background: #F8B978;
  transition: all 5s;
}

.starting .start-button{
  height: 500px;
  width: 500px;
  opacity: 0;
  transition: all 5s;
}

.band-container {
  width: 50%;
  height: 45%;
  /* transform: translate(0, -150%); */
}

.band-container .start-story-branding {
  position: absolute;
  width: 100%;
}

.starting .band-container {
  width: 300%;
  opacity: 0;
  transition: all 5s;
}

@keyframes startStory {
  0% {
    transform:  scale(100%);
  }
  100% {
    transform:  scale(1000%);
  }
}

@keyframes arrow {
  0% {
    opacity: 0;
    transform: translateY(40%)
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateY(0)
  }
}

@keyframes rotate {
  0% {
    transform:  rotateZ(0deg);
  }
  100% {
    transform:  rotateZ(360deg);
  }
}

h1, h2, h3,
h4, h5, h6 {
  font-family: 'YoungSerif';
}

.load {
  color: #53A4DB;
  animation: loading 3s infinite linear;
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
