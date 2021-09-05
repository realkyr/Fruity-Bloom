<template>
  <div>
    <transition name="fade" appear>
      <div v-if="isLoadFinish" class="home">
        <!-- <img id="image-cloud" :src="require('../assets/cloud-01.png')" />
        <img class="cloud" id="c-1" :src="require('@/assets/cloud.png')" >
        <img class="cloud" id="c-6" :src="require('@/assets/cloud.png')" >
        <img class="cloud" id="c-4" :src="require('@/assets/cloud.png')" >
        <img class="cloud" id="c-5" :src="require('@/assets/cloud.png')" >
        <div class="row align-end" style="overflow: hidden; height: 100%;">
          <div :class="['align-self-start', 'col-' + (isScreenVertical ? 12 : 6)]">
            <transition name="fade-delay" appear>
              <div :class="menuClasses">
                <img id="logo" :src="logo">
                <ul :class="{
                  menu: true,
                  mobile: this.isMobile ? true : false,
                  verticle: this.isScreenVertical ? true : false
                }">
                  <li><router-link :to="{name : 'About'}" tag="a">ABOUT</router-link></li>
                  <li><router-link :to="{name: 'Shop'}" tag="a">SHOP</router-link></li>
                  <li><router-link :to="{name: 'Story'}" tag="a">STORY OF US</router-link></li>
                </ul>
              </div>
            </transition>
          </div>
          <div :class="['align-self-end', 'col-' + (isScreenVertical ? 12 : 6)]">
            <div class="d-flex justify-content-center">
              <transition name="people" appear>
                <img
                  :class="{verticle: this.isScreenVertical ? true : false, mobile: this.isMobile ? true : false}"
                  id="image-people"
                  :src="require('../assets/people-01.png')"
                >
              </transition>
            </div>
          </div>
        </div> -->
        <LandingPage />
      </div>
      <div class="loading" v-else>
        <video v-if="start" ref="opening" :width="screen.width" preload autoplay>
          <source :src="require('@/assets/videos/Opening.mp4')" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="pre-opening" v-else>
          <img class="cloud" id="c-1" :src="require('@/assets/cloud.png')" >
          <img class="cloud" id="c-2" :src="require('@/assets/cloud.png')" >
          <img class="cloud" id="c-3" :src="require('@/assets/cloud.png')" >
          <h1 style="z-index: 99; text-align: center; color: #436FB5; font-size: 5vh; font-family: 'YoungSerif'">Hello! welcome to our gang.</h1>
          <div @click="enterHome" @mouseenter="changeStrawberry('in')" @mouseleave="changeStrawberry('out')" class="start-button">
            <img class="strawberry" ref="strawberry" :src="require('@/assets/strawberry.png')" >
            <img class="border-text" :src="require('@/assets/textborder.png')" >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import LandingPage from '@/components/Home/LandingPage'
import '@/assets/css/animation.css'
import '@/assets/css/nprogress.css'
import '@/assets/css/youngserif.css'

export default {
  name: 'Home',
  components: {
    LandingPage
  },
  data () {
    return {
      appearing: false,
      screen: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
  },
  computed: {
    loaded () {
      return this.loadingPercent + '%'
    },
    isLoadFinish () {
      return this.$store.state.isLoadFinish
    },
    start () {
      return this.$store.state.start
    }
  },
  methods: {
    handleResize () {
      this.screen.width = window.innerWidth
      this.screen.height = window.innerHeight
    },
    changeStrawberry (status) {
      if (status === 'in') this.$refs.strawberry.src = require('@/assets/strawberry-cut.png')
      else this.$refs.strawberry.src = require('@/assets/strawberry.png')
    },
    enterHome () {
      this.$store.state.start = true
      NProgress.configure({ showSpinner: false })
      NProgress.start()
      setTimeout(() => {
        NProgress.done()
        this.$store.state.isLoadFinish = true
      }, 12000)
    }
  },
  mounted () {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
    window.addEventListener('resize', () => { this.handleResize() })
  },
  destroyed () {
    window.addEventListener('resize', () => { this.handleResize() })
  }
}
</script>

<style scoped>
body {
  background-color: #cbecfd;
}
</style>

<style>
body {
  margin: 0;
  -webkit-overflow-scrolling: touch;
}

.home {
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  overflow: hidden;
  position: relative;
}

.loading {
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background: #cbecfd;
}

.pre-opening {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.start-button {
  position: relative;
  margin-top: 30px;
  z-index: 99;
}

.start-button:hover img.border-text {
  cursor: pointer;
  animation: rotate 10s infinite linear both;
}

.start-button img.strawberry {
  position: absolute;
  left: 30%;
  top: 25%;
  max-width: 100px;
}

.start-button img.border-text {
  max-width: 245px;
  animation: none;
}

/* cloud animation */
.cloud {
  position: absolute;
  max-width: 100px;
  z-index: 1;
  animation: cloudMove 10s linear infinite;
}

#c-1 {
  left: 32%;
  top: 55%
}

#c-2 {
  left: 40%;
  top: 30%
}

#c-3 {
  left: 65%;
  top: 44%
}

#c-4 {
  left: 10%;
  top: 20%
}

#c-5 {
  right: 10%;
  top: 5%
}

#c-6 {
  left: 40%;
  top: 30%
}

@media (max-width: 1024px) {
  #c-1 {
    left: 25%;
  }

  #c-2 {
    left: 32%;
  }
}

@media (max-width: 800px) {
  #c-1 {
    left: 20%;
  }

  #c-2 {
    left: 30%;
  }

  #c-6 {
    display: none;
  }
}

@media (max-width: 600px) {
  #c-1 {
    left: 10%;
  }

  #c-2 {
    left: 20%;
  }

  #c-6 {
  left: 70%;
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

@keyframes cloudMove {
  0% {
    transform:  translateY(0);
  }
  50% {
    transform:  translateY(100%);
  }
  100% {
    transform:  translateY(0);
  }
}
</style>
