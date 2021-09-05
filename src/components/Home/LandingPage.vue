<template>
  <div class="landing-page-container" >
    <Navbar @navto="nextSection" :section="section" />
    <Landing  @nextpage="nextSection" />
    <About :section="section" @nextpage="nextSection" />
    <Story :section="section" ref="homeStory" @nextpage="nextSection" />
    <Shop :section="section" @nextpage="nextSection" />
    <Contact />
    <div :class="['section-indicator', sectionName[section]]">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar'
import Landing from '@/components/Home/Section/Landing'
import About from '@/components/Home/Section/About'
import Story from '@/components/Home/Section/Story'
import Shop from '@/components/Home/Section/Shop'
import Contact from '@/components/Home/Section/Contact'
import smoothscroll from 'smoothscroll-polyfill'

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 32: 1, 37: 1, 38: 1, 39: 1, 40: 1 }

function preventDefaultForScrollKeys (e) {
  if (keys[e.keyCode]) {
    e.preventDefault()
    return false
  }
}

// modern Chrome requires { passive: false } when adding event
let supportsPassive = false
try {
  window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true }
  }))
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

export default {
  components: {
    Landing,
    Navbar,
    About,
    Story,
    Shop,
    Contact
  },
  data () {
    return {
      section: 0,
      scrollable: true,
      isScrolling: null,
      sectionName: [
        'home-sec-in', 'about-sec-in',
        'story-sec-in', 'shop-sec-in',
        'contact-sec-in']
    }
  },
  mounted () {
    // kick off the polyfill!
    smoothscroll.polyfill()
    window.__forceSmoothScrollPolyfill__ = true
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', this.handleRisize)
    this.disableScroll()
  },
  destroyed () {
    console.log('destroyed')
    this.enableScroll()
    window.removeEventListener('resize', this.handleRisize)
  },
  methods: {
    handleRisize () {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      setTimeout(() => { this.navTo(this.section) }, 1000)
    },
    nextSection (e) {
      if (!this.scrollable) return
      document.querySelector('#home-navbar').style.background = ''
      if (e === 2) {
        document.querySelector('#home-navbar').style.background = this.$refs.homeStory.navbg[this.$refs.homeStory.month]
      }
      console.log(e)
      this.section = e

      this.navTo(this.section)
    },
    navTo (e) {
      if (e === 1) {
        const section = document.querySelector('#about-section')
        section.scrollIntoView({ behavior: 'smooth' })
      } else if (e === 2) {
        const section = document.querySelector('#story-section')
        section.scrollIntoView({ behavior: 'smooth' })
      } else if (e === 3) {
        const section = document.querySelector('#shop-section')
        console.log(section)
        section.scrollIntoView({ behavior: 'smooth' })
      } else if (e === 4) {
        const section = document.querySelector('#contact-section')
        section.scrollIntoView({ behavior: 'smooth' })
      } else if (e === 0) {
        const section = document.querySelector('#landing-sec')
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
    disableScroll () {
      window.addEventListener('DOMMouseScroll', this.preventDefault, false) // older FF
      window.addEventListener(wheelEvent, this.mousePrevent, wheelOpt) // modern desktop
      window.addEventListener('touchmove', this.preventDefault, wheelOpt) // mobile
      window.addEventListener('keydown', preventDefaultForScrollKeys, false)
    },
    enableScroll () {
      window.removeEventListener('DOMMouseScroll', this.preventDefault, false)
      window.removeEventListener(wheelEvent, this.mousePrevent, wheelOpt)
      window.removeEventListener('touchmove', this.preventDefault, wheelOpt)
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
    },
    preventDefault (e) {
      e.preventDefault()
    },
    mousePrevent (e) {
      e.preventDefault()
      const delta = e.deltaY
      if (delta > 0) {
        // direction = 'up'
        if (this.section < 4) this.nextSection(this.section + 1)
        this.scrollable = false
      } else {
        // direction = 'down'
        if (this.section > 0) this.nextSection(this.section - 1)
        this.scrollable = false
      }
      // Clear our timeout throughout the scroll
      window.clearTimeout(this.isScrolling)

      // Set a timeout to run after scrolling ends
      this.isScrolling = setTimeout(() => {
        // Run the callback
        console.log('Scrolling has stopped.')
        setTimeout(() => {
          this.scrollable = true
        }, 200)
      }, 66)
    }
  }
}
</script>

<style>
.seemore {
  text-decoration: none !important;
  transition: all 0.7s ease;
}

.seemore:hover {
  transform: scale(0.8);
}
</style>

<style scoped>
.landing-page-container {
  -webkit-overflow-scrolling: touch;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -17px; /* Increase/Decrease this value for cross-browser compatibility */
  overflow-y: scroll;
  overflow-x: hidden;
}

@media screen and (max-width: 992px) {
  .landing-page-container {
    /* scroll-behavior: smooth; */
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
.section-indicator {
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 99;
  transition: all .5s ease;
}
.section-indicator .circle {
  width: 15px;
  height: 15px;
  margin: 5px;
  border-radius: 50%;
  background: none;
  border: white solid 2px;
  transition: all .5s ease;
}

.section-indicator.contact-sec-in {
  bottom: 50px;
}

.section-indicator.home-sec-in .circle {
  border-color: #74C5E8;
}

.section-indicator.home-sec-in .circle:nth-child(1) {
  background: #74C5E8;
}

.section-indicator.about-sec-in .circle {
  border-color: #F7ED72;
}

.section-indicator.about-sec-in .circle:nth-child(2) {
  background: #F7ED72;
}

.section-indicator.story-sec-in .circle {
  border-color: white;
}

.section-indicator.story-sec-in .circle:nth-child(3) {
  background: white;
}

.section-indicator.shop-sec-in .circle {
  border-color: #3994D1;
}

.section-indicator.shop-sec-in .circle:nth-child(4) {
  background: #3994D1;
}

.section-indicator.contact-sec-in .circle {
  border-color: white;
}

.section-indicator.contact-sec-in .circle:nth-child(5) {
  background: white;
}
</style>
