<template>
  <div class="landing-container" id="landing-sec">
    <img class="cloud" id="c-1" :src="require('@/assets/cloud.png')" >
    <img class="cloud" id="c-6" :src="require('@/assets/cloud.png')" >
    <img class="cloud" id="c-4" :src="require('@/assets/cloud.png')" >
    <img class="cloud" id="c-5" :src="require('@/assets/cloud.png')" >
    <div id="landing" class="landing"></div>
    <img class="cloud-footer" :src="require('@/assets/img/Home/cloudfoot-01.png')" alt="cloud footer">
    <NextButton @click.native="nextSection()" class="next-button" />
  </div>
</template>

<script>
import NextButton from '@/components/icons/NextButton.vue'
import animation from '@/assets/Animation/LandingPage/data.json'

export default {
  components: {
    NextButton
  },
  data () {
    return {
      screen: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    bodymovin.loadAnimation({
      container: document.getElementById('landing'),
      rederer: 'svg',
      loop: false,
      autoplay: true,
      animationData: animation
    })
  },
  methods: {
    nextSection () {
      console.log('next!')
      this.$emit('nextpage', 1)
    }
  }
}
</script>

<style scoped>
.next-button {
  position: absolute;
  bottom: 0;
  cursor: pointer;
}

.cloud-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none
}
.landing-container{
  background: #CAECFC;
  padding-top: 70px;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: 80;
}
.landing {
  width: 100vw;
  left: 0;
  position: absolute;
}

/* cloud animation */
.cloud {
  position: absolute;
  max-width: 100px;
  z-index: 1;
  animation: cloudMove 10s linear infinite;
}

#c-1 {
  left: 20%;
  top: 10%
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
  left: 5%;
  top: 50%
}

#c-5 {
  right: 20%;
  top: 5%
}

#c-6 {
  left: 85%;
  top: 75%
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
