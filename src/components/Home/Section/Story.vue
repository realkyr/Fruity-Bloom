<template>
  <div @mousemove="updateCoord" id="story-section" :style="{ background: color[month] }" class="d-flex justify-content-center">
    <div :class="['s-indicator', monthList[month]]">
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
      <div class="s-dot"></div>
    </div>

    <div @click="prevMonth()" class="left-circle story-circle"></div>
    <div @click="nextMonth()" class="right-circle story-circle"></div>
    <img @load="imageLoaded()" ref="imageContent" id="imageContent" class="middle-circle story-circle" :src="require(`@/assets/img/Home/Story/${monthList[month]}.png`)">
    <img class="hs-arrow next" :src="require(`@/assets/img/Story/arrow-up-w.png`)">
    <img class="hs-arrow prev" :src="require(`@/assets/img/Story/arrow-up-w.png`)">

    <div ref="mouse" class="mouse" style="left: 0; right: 0;">
      <div :class="['mouse-inner', monthList[month]]"></div>
    </div>

    <router-link
      :to="{ name: 'Story' }"
      class="seemore text-center"
      tag="a">
      WANT TO KNOW US MORE
    </router-link>
    <NextButton @click.native="nextSection()" class="next-button" />
  </div>
</template>

<script>
import NextButton from '@/components/icons/NextButton.vue'
export default {
  components: {
    NextButton
  },
  props: {
    section: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      month: 0,
      monthList: [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
      ],
      color: [
        '#F6B87D', '#87CFF0', '#C54C4E', '#F6C6D3',
        '#ED7A7F', '#7E70AD', '#F4C382', '#79BA7F',
        '#8D6039', '#EA686E', '#9AC88B', '#F4C1D6',
        '#AEE0F4'
      ],
      navbg: [
        '#458D5F', '#2D69A3', '#3E793F', '#638545',
        '#68B177', '#8BC17A', '#E76552', '#2D5D35',
        '#E8D995', '#A83133', '#D64648', '#F77981'
      ],
      textColor: [
        '#F7E7AD', '#EBCB50', '#D0DB5B', '#F6C6D3',
        '#3A725B', '#4C3F8F', '#F7E7AD', '#E3C13C',
        '#517638', '#F7D492', '#F1E8C4', '#F9DCE7'
      ],
      clickable: true,
      steate: 'next'
    }
  },
  methods: {
    nextSection () {
      console.log('next!')
      this.$emit('nextpage', 3)
    },
    async prevMonth () {
      if (!this.clickable) return
      if (this.month > 0) {
        this.clickable = false
        this.$refs.imageContent.classList.remove('appear-p')
        this.$refs.imageContent.classList.remove('appear')
        this.$refs.imageContent.classList.add('leave-p')
        await this.wait(1000)
        this.state = 'prev'
        this.month -= 1
      }
    },
    async nextMonth () {
      if (!this.clickable) return
      if (this.month < 11) {
        this.clickable = false
        this.$refs.imageContent.classList.remove('appear-p')
        this.$refs.imageContent.classList.remove('appear')
        this.$refs.imageContent.classList.add('leave')
        await this.wait(1000)
        this.state = 'next'
        this.month += 1
      }
    },
    async imageLoaded () {
      console.log('complete image load')
      if (this.section === 2) {
        document.querySelector('#home-navbar').style.background = this.navbg[this.month]
        document.documentElement.style.setProperty('--story-color', `${this.textColor[this.month]}`)
      }
      if (this.state === 'next') {
        this.$refs.imageContent.classList.remove('leave')
        this.$refs.imageContent.classList.add('appear')
      } else {
        this.$refs.imageContent.classList.remove('leave-p')
        this.$refs.imageContent.classList.add('appear-p')
      }
      await this.wait(1000)
      this.clickable = true
    },
    async wait (ms) {
      return new Promise(resolve => {
        setTimeout(resolve, ms)
      })
    },
    updateCoord (e) {
      this.$refs.mouse.style.left = e.clientX + 'px'
      this.$refs.mouse.style.top = e.clientY + 'px'
    }
  },
  mounted () {
    document.documentElement.style.setProperty('--story-color', `${this.textColor[this.month]}`)
  }
}
</script>

<style scoped>
.mouse {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px white solid;
  border-radius: 50%;
  position: absolute;
  transform: translate(-40%, -30%);
  z-index: 110;
  pointer-events: none;
}

.mouse-inner {
  /* margin: 10px; */
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: black;
  pointer-events: none;
  /* transform: translate(-100%, -100%); */
  transform: scale(0.5);
  opacity: 0;
  transition: all .2s ease-in-out;
}

.mouse-inner.jan {
  background: #458D5F;
}
.mouse-inner.feb {
  background: #EBCB50;
}
.mouse-inner.mar {
  background: #7EBE86;
}
.mouse-inner.apr {
  background: #859F6C;
}
.mouse-inner.may {
  background: #B73635;
}
.mouse-inner.jun {
  background: #8BC17A;
}
.mouse-inner.jul {
  background: #E76552;
}
.mouse-inner.aug {
  background: #F9D84F;
}
.mouse-inner.sep {
  background: #B48556;
}
.mouse-inner.oct {
  background: #A83133;
}
.mouse-inner.nov {
  background: #D64648;
}
.mouse-inner.dec {
  background: #F77981;
}

.right-circle:hover ~ .mouse .mouse-inner,
.left-circle:hover ~ .mouse .mouse-inner {
  /* border: 1px red solid; */
  opacity: 1;
  transform: scale(1);
  /* transform: translate(-20%, -20%); */
}

.next-button {
  position: absolute;
  bottom: 0;
  cursor: pointer;
  z-index: 105;
}

/* .next-button:hover ~ .mouse {
  cursor: pointer;
} */

#story-section {
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 90;
  transition: all 1s ease;
  cursor: none;
}

.seemore {
  position: absolute;
  bottom: 8%;
  font-size: 12px;
  margin: 25px auto;
  display: block;
  /* width: 300px; */
  align-self: center;
  padding: 10px 20px;
  color: white;
  border: white solid 1px;
  border-radius: 15px;
  font-family: 'YoungSerif';
  z-index: 110;
  cursor: none;
}

.s-indicator {
  position: absolute;
  top: 15%;
  z-index: 9;
}

.s-indicator .s-dot {
  height: 10px;
  width: 10px;
  display: inline-block;
  margin: 5px;
  border-radius: 50%;
  background: #F7E7AD;
  transition: all 1s ease;
}

.s-indicator.jan .s-dot:nth-child(1) {
  background: #EE7324;
  opacity: 1;
}

.s-indicator.feb .s-dot:nth-child(2) {
  background: #2D69A3;
  opacity: 1;
}

.s-indicator.mar .s-dot:nth-child(3) {
  background: #7EBE86;
  opacity: 1;
}

.s-indicator.apr .s-dot:nth-child(4) {
  background: #638545;
  opacity: 1;
}

.s-indicator.may .s-dot:nth-child(5) {
  background: #B73635;
  opacity: 1;
}

.s-indicator.jun .s-dot:nth-child(6) {
  background: #82D879;
  opacity: 1;
}

.s-indicator.jul .s-dot:nth-child(7) {
  background: #588960;
  opacity: 1;
}

.s-indicator.aug .s-dot:nth-child(8) {
  background: #588960;
  opacity: 1;
}

.s-indicator.sep .s-dot:nth-child(9) {
  background: #517638;
  opacity: 1;
}

.s-indicator.oct .s-dot:nth-child(10) {
  background: #A83133;
  opacity: 1;
}

.s-indicator.nov .s-dot:nth-child(11) {
  background: #C33335;
  opacity: 1;
}

.s-indicator.dec .s-dot:nth-child(12) {
  background: #F77981;
  opacity: 1;
}

.story-circle {
  height: 50vh;
  width: 50vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: white solid 1px;
  border-radius: 50%;
}

.left-circle.story-circle {
  left: 0;
  z-index: 101
}
.right-circle.story-circle {
  left: 100%;
  z-index: 101
}

.middle-circle.story-circle {
  border: none;
  pointer-events: none;
  z-index: 102;
}

.middle-circle.story-circle.leave {
  animation: 1s ease-in-out 0s leave forwards;
}

.middle-circle.story-circle.leave-p {
  animation: 1s ease-in-out 0s leave-p forwards;
}

.middle-circle.story-circle.appear-p {
  animation: 1s ease-in-out 0s appear-p forwards;
}

.middle-circle.story-circle.appear {
  animation: 1s ease-in-out 0s appear forwards;
}

@keyframes leave {
  from {
    transform: scale(1) translate(-50%, -50%);
    left: 50%;
  }
  to {
    opacity: 0;
    transform: scale(0.8) translate(-50%, -60%);
    left: 0;
  }
}

@keyframes leave-p {
  from {
    transform: scale(1) translate(-50%, -50%);
    left: 50%;
  }
  to {
    opacity: 0;
    transform: scale(0.8) translate(-50%, -60%);
    left: 100%;
  }
}

.hs-arrow {
  align-self: center;
  position: absolute;
  top: 48%;
  left: 50%;
  max-width: 80px;
  transform: translate(-50%, -50%);
}

.hs-arrow.prev {
  left: 2.5%;
  transform: rotate(-90deg);
}

.hs-arrow.next {
  left: auto;
  right: 2.5%;
  transform: rotate(90deg);
}

@keyframes appear-p {
  from {
    opacity: 0;
    transform: scale(0.8) translate(-50%, -60%);
    left: 0;
  }
  to {
    transform: scale(1) translate(-50%, -50%);
    left: 50%;
  }
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scale(0.8) translate(-50%, -60%);
    left: 100%;
  }
  to {
    transform: scale(1) translate(-50%, -50%);
    left: 50%;
  }
}
</style>
