<template>
  <div :class="{noscroll: $refs.cart ? $refs.cart.active : false}">
    <Cart ref="cart" />
    <div class="container-fluid">
      <div class="nav row">
        <img class="image-bg" :src="require('@/assets/img/Shop/BG-01.png')" />
        <div class="col-6">
          <router-link id="homeNavShop" :to="{name: 'Home'}" tag="a">
            <HomeIcon/>
          </router-link>
        </div>
        <div class="col-6">
          <div class="d-flex justify-content-end">
            <button data-toggle="modal" data-target="#login-modal" id="login">
              <UserIcon />
            </button>
            <button @click="$refs.cart.active = true" :data-badge="cartAmount" :class="{cart: true, badge: cartAmount > 0 }">
              <CartIcon />
            </button>
          </div>
        </div>
      </div>

      <Login />
      <Calendar />

      <div class="row" id="first">
        <div class="col-12 col-md-6">
          <div @click="calendarInside" class="calendar-container d-flex justify-content-center">
            <div class="white">View Inside</div>
            <img :src="require('@/assets/img/Shop/calendar.png')" width="100%">
          </div>
        </div>

        <div class="col-12 col-md-4 offset-md-1 col-xl-4">
          <div style="height: 100%" class="d-flex flex-column justify-content-center calendar-info">
            <h4 style="white-space: nowrap;">Fruity Bloom Calendar 2020</h4>
            <p class="text-justify">
              Body Shaming is a story that exists in every phase
              of our lives. Which may cause many people to lack
              confidence, which this calendar will help you Love
              your body more and and be proud of who you are.
            </p>
            <br>
            <p>
              calendar size- 16 x 24 cm.<br>
              120 paper
            </p>
            <br>
            <h3 class="text-center">120 ฿</h3>
            <div class="d-flex justify-content-center">
              <button @click="addToCart({
                id: 'calendar',
                detail: {
                  product: 'Calendar',
                  image: require('@/assets/img/Shop/calendar/all1-01.jpg'),
                  striped: '',
                  amount: 1,
                  price: 120
                }
              })" class="shop">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center" id="second">
        <div class="col-12 col-md-9 col-lg-8 col-xl-7" >
          <div class="text-center">
            <h3>Our brand</h3>
            <p>mainly focus on design, character edge Because each one is designed from being body shaming,
            so we want our products to end has a character in it to help boost your confidence in you.</p>
          </div>
        </div>
      </div>

      <div class="product-img">
        <div class="row">
          <div class="product-outer col-12 col-lg-4">
            <div @click="changeView('notebook')" class="product">
              <div class="white">SHOP NOW</div>
              <img :src="require('@/assets/img/Shop/clear spring 01.jpg')">
            </div>
            <h6>Fruity Bloom Notebook</h6>
          </div>
          <div class="product-outer col-12 col-lg-4">
            <div @click="changeView('notepad')" class="product">
              <div class="white">SHOP NOW</div>
              <img :src="require('@/assets/img/Shop/all.jpg')">
            </div>
            <h6>Fruity Bloom Notepad</h6>
          </div>
          <div class="product-outer col-12 col-lg-4">
            <div @click="changeView('pen')" class="product">
              <div class="white">SHOP NOW</div>
              <img :src="require('@/assets/img/Shop/jan(pen).jpg')">
            </div>
            <h6>Fruity Bloom Pen</h6>
          </div>
        </div>
      </div>

      <img id="shopnow-pattern" :src="require('@/assets/img/Shop/shopnow pattern-01.png')">
      <div class="shopnow">
        <button @click="changeView('notebook')" class="shopnow-btn">
          <div class="text">Shop Now</div>
          <Pointer />
        </button>
      </div>
      <Product />
      <MProduct product='notepad' />
      <MProduct product='pen' />
    </div>
    <div class="row">
      <div class="col-12">
        <p class="text-right" style="color: #4997cc; margin-top: 100px; padding: 20px 10px;">
          Contact<br>Email : ppkhemmud@gmail.com<br>Tel
          : 0989453593</p>
      </div>
    </div>
    <div class="text-center font-weight-bold"
      style="padding: 10px 0; color: #4997cc; margin-top: 50px; background-color: #b7d8ee;">
      <h3>Friuty Bloom</h3>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Cart from '@/components/Shop/Cart.vue'
import Calendar from '@/components/Shop/Calendar.vue'
import HomeIcon from '@/components/icons/Home.vue'
import UserIcon from '@/components/icons/User.vue'
import CartIcon from '@/components/icons/Cart.vue'
import Product from '@/components/Product.vue'
import MProduct from '@/components/Shop/Month-Product.vue'
import Pointer from '@/components/icons/Pointer.vue'
import { mapGetters, mapMutations } from 'vuex'
import '@/assets/Fonts/font.css'

export default {
  components: {
    Product,
    HomeIcon,
    UserIcon,
    CartIcon,
    Pointer,
    Login,
    Calendar,
    MProduct,
    Cart
  },
  data () {
    return {
      view: null
    }
  },
  methods: {
    calendarInside () {
      // eslint-disable-next-line no-undef
      $('#calendar-modal').modal()
    },
    changeView (name) {
      this.view = name
      this.$nextTick(() => {
        if (this.view) {
          console.log(document.querySelector('#' + name))
          document.querySelector('#' + name).scrollIntoView()
        }
      })
    },
    ...mapMutations(['addToCart'])
  },
  mounted () {
    this.$store.state.start = true
    this.$store.state.isLoadFinish = true
    // eslint-disable-next-line no-undef
    $('#login-modal').modal()
  },
  computed: {
    ...mapGetters(['cartAmount'])
  }
}
</script>

<style>

.calendar-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform: translateY(-100px);
}

.calendar-container .white{
  left: 28%;
  width: 40% !important;
  height: 20% !important;
}

.calendar-container:hover .white,
.calendar-container:focus .white {
  transform: translateY(-50px);
}

.cls-1 {
  fill: #6CAADD;
  transition: all 0.2s;
}

.cart-background {
  fill: #6CAADD;
  transition: all 0.2s;
}

.cart:hover .cart-background {
  fill: #FFFFFF;
}

#homeNavShop .cls-1 {
  fill: #6CAADD;
}

#homeNavShop:hover .cls-1 {
  fill: #FFFFFF;
}

#login .background {
  transition: all 0.2s;
}

#login:hover .background {
  fill: #FFFFFF;
}

#login:hover .cls-2 {
  fill: #6caadd;
}

.shopnow-btn #pointer {
  margin-top: 10px;
  stroke: #4896CC;
  stroke-width: 1px;
  stroke-linejoin: round;
}

.shopnow-btn .pointer-background {
  fill: #4896CC;
  transition: all 0.2s;
}

.shopnow-btn:hover .pointer-background {
  fill: white;
}

html {
  scroll-behavior: smooth;
}

</style>

<style scoped>
.cart[data-badge] {
  position:relative;
}

button {
  padding: 0;
  border: none;
  background: none;
  margin-left: 15px;
}

.cart.badge[data-badge]:after {
  position:absolute;
  right:-10px;
  top:-10px;
  padding: 0px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color:#fff;
  background-color: #EA5242;
  font-size: 15px;
  border-radius: 50%;
  content: attr(data-badge);
}

img {
  align-self: center;
}

.nav {
  padding: 20px 10px;
}

h1, h2, h3,
h4, h5, h6 {
  color: #3994D1;
  font-family: 'YoungSerif';
}

p {
  font-family: 'myriad-pro', sans-serif;
  color: #5AB0E0;
  font-size: 1em;
}

@media screen and (max-width: 992px) {
  .modal-open .nav img {
    padding-right: 0;
  }
}

.nav img {
  position: absolute;
  z-index: 0;
  width: 100vw;
  left: 0;
  top: 0;
}

.product {
  display: flex;
  justify-content: center;
}

.product-outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

.product-outer h6 {
  margin-top: 30px;
}

.product-outer:nth-child(2) {
  border-left: 1px solid #4896CC;
  border-right: 1px solid #4896CC;
}

.product img {
  height: 35vh !important;
}

@media screen and (max-width: 1024px) {
  .product img {
    height: 30vh !important;
  }
}

@media screen and (max-width: 768px) {
  .product-outer:nth-child(2) {
    border-left: 0;
    border-right: 0;
  }
}

.product img {
  max-width: 100vw;
  height: 19vh;
}

.shopnow {
  margin-top: 18%;
  margin-bottom: 20px;
  z-index: 1;
}

.shopnow button {
  z-index: 99;
}

#shopnow-pattern {
  width: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
}

.row {
  margin-top: 50px;
  margin: auto;
}

#first {
  margin-top: 18%;
}

#second {
  margin: 5%;
}

#fourth {
  margin-left: 30px;
  margin-right: 30px;
}

#text {
  margin-top: 10px;
}

#img-fourth {
  margin-top: 50px;
  max-width: 100%;
  height: auto;
}

.footer {
  text-align: center;
  font-size: 12px;
  padding: 15px;
}

.shop {
  background: #4896CC;
  color: white;
  font-size: 20px;
  font-family: myriad-pro, sans-serif;
  font-weight: 700;
  padding: 5px 25px;
  border-radius: 20px;
  margin: 0;
  cursor: pointer;
  border: 1px solid #4896CC;
  transition: all 0.5s;
}

.shop:hover {
  background: white;
  color: #4896CC;
}

.shopnow {
  display: flex;
  justify-content: center;
}

.shopnow-btn {
  cursor: pointer;
  font-family: 'YoungSerif';
  font-size: 18pt;
  color: #4896CC;
}

.product {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.product:hover .white{
  transform: translateY(0);
}

.white {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  font-family: 'YoungSerif';
  width: 100%;
  height: 30%;
  opacity: 0.5;
  bottom: 0;
  transform: translateY(100%);
  transition: all 0.3s;
}

button:focus {
  outline:0;
}

</style>
