<template>
  <div id="shop-section" class="d-flex justify-content-center flex-column">
    <div style="max-width: 800px; margin: 0 auto;" :class="{container: true, 'text-center': true, appear: section == 3}">
      <h3 class="topic">Our brand</h3>
      <p class="article">mainly focus on design, character edge Because each one is designed from being body shaming,
      so we want our products to end has a character in it to help boost your confidence in you.</p>
    </div>
    <div class="container text-center">
      <ul class="menu">
        <li v-if="!isMobile"><a :class="{active: product == 'all'}" @click="product = 'all'">All</a></li>
        <li><a :class="{active: product == 'Calendar'}" @click="product = 'Calendar'">Calendar</a></li>
        <li><a :class="{active: product == 'Notebook'}" @click="product = 'Notebook'">Notebook</a></li>
        <li><a :class="{active: product == 'Notepad'}" @click="product = 'Notepad'">Notepad</a></li>
        <li><a :class="{active: product == 'Pen'}" @click="product = 'Pen'">Pen</a></li>
      </ul>
    </div>
    <div v-if="product == 'all'" class="product-img">
      <div class="row">
        <div class="product-outer col-12 col-lg-3">
          <div class="product">
            <img :src="require('@/assets/img/Home/all1.jpg')">
          </div>
          <h6>Fruity Bloom Calendar</h6>
        </div>
        <div class="product-outer col-12 col-lg-3">
          <div class="product">
            <img :src="require('@/assets/img/Shop/clear spring 01.jpg')">
          </div>
          <h6>Fruity Bloom Notebook</h6>
        </div>
        <div class="product-outer col-12 col-lg-3">
          <div @click="changeView('notepad')" class="product">
            <img :src="require('@/assets/img/Shop/all.jpg')">
          </div>
          <h6>Fruity Bloom Notepad</h6>
        </div>
        <div class="product-outer col-12 col-lg-3">
          <div @click="changeView('pen')" class="product">
            <img :src="require('@/assets/img/Shop/jan(pen).jpg')">
          </div>
          <h6>Fruity Bloom Pen</h6>
        </div>
      </div>
    </div>
    <div v-if="product !== 'all'" class="product-img">
      <div class="row d-flex justify-content-center">
        <div class="product-outer only col-lg-3">
          <div class="product">
            <img :src="image[product]">
          </div>
          <h6>Fruity Bloom {{ product }}</h6>
        </div>
      </div>
    </div>
    <router-link
      :to="{name: 'Shop'}"
      class="seemore text-center"
      tag="a">
      SHOP NOW
    </router-link>
    <div class="d-flex justify-content-center">
      <NextButton @click.native="nextSection()" class="next-button" />
    </div>
  </div>
</template>

<script>
import '@/assets/Fonts/font.css'
import '@/assets/css/animation.css'
import NextButton from '@/components/icons/NextButton.vue'
export default {
  props: {
    section: {
      type: Number,
      default: 0
    }
  },
  components: {
    NextButton
  },
  data () {
    return {
      product: 'all',
      image: {
        Calendar: require('@/assets/img/Home/all1.jpg'),
        Notebook: require('@/assets/img/Shop/clear spring 01.jpg'),
        Notepad: require('@/assets/img/Shop/all.jpg'),
        Pen: require('@/assets/img/Shop/jan(pen).jpg')
      }
    }
  },
  methods: {
    nextSection () {
      console.log('next!')
      this.$emit('nextpage', 4)
    }
  },
  computed: {
    isMobile () {
      return window.innerWidth < 992
    }
  },
  mounted () {
    if (window.innerWidth < 992) {
      this.product = 'Calendar'
    }
  }
}
</script>

<style scoped>

.product-outer h6 {
  font-family: 'YoungSerif';
  color: #3994D1;
}

.menu {
  list-style: none;
  align-self: center;
  text-align: center;
  margin: 10px 0;
  padding: 0;
}

.menu li {
  display: inline;
  margin: 0 15px;
  font-family: 'YoungSerif';
  color: #3994D1;
}

.menu li a {
  cursor: pointer;
  text-decoration: none;
}

.next-button {
  position: absolute;
  bottom: 0;
  cursor: pointer;
}

.topic {
  font-family: 'YoungSerif' !important;
  color: #3994D1;
}

.article {
  font-family: 'myriad-pro', sans-serif;
  color: #5AB0E0;
}

#shop-section {
  background: white;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  position: relative;
  z-index: 90;
}

.seemore {
  margin: 25px auto;
  /* display: block; */
  /* width: 300px; */
  align-self: center;
  padding: 13px 20px;
  color: #3994D1;
  border: #3994D1 solid 1px;
  border-radius: 15px;
  font-family: 'YoungSerif';
}

.product {
  display: flex;
  justify-content: center;
}

.product-outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

.product-outer h6 {
  margin-top: 30px;
}

.product-outer:nth-child(2) {
  border-left: 1px solid #4896CC;
  border-right: 1px solid #4896CC;
}

.product-outer.only {
  border-left: 1px solid #4896CC;
  border-right: 1px solid #4896CC;
}

.product-outer:nth-child(3) {
  border-right: 1px solid #4896CC;
}

.product img {
  height: 15vh !important;
}

@media screen and (max-width: 992px) {
  .product img {
    height: 20vh !important;
  }
}
@media screen and (min-width: 1024px) {
  .product img {
    height: 23vh !important;
  }
}

.appear {
  animation: 1s ease-in-out .5s appearing backwards;
}

@keyframes appearing {
  from {
    opacity: 0;
  }
}

.menu a {
  position: relative;
}

.menu a:before {
  height: 2px;
  content: "";
  position: absolute;
  background-color: #3994D1;
  width: 100%;
  transform: scaleX(0);
  bottom: -5px;
  /* left: 50%; */
  border-radius: 15px;
  transition: all .7s ease;
}

.menu a.active:before,
.menu a:hover:before {
  transform: scaleX(1);
}
</style>
