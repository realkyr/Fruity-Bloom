<template>
  <div :class="['navhome', 'container-fluid', backg[section]]" id="home-navbar">
    <span id="home">
      <HomeIcon @click.native="navTo(0)" :width="30" />
    </span>

    <div class="d-flex justify-content-center align-item-center" style="height: 100%">
      <ul class="menu">
        <li><a :class="{active: section == 1}" @click="navTo(1)">ABOUT</a></li>
        <li><a id="story-a" :class="{active: section == 2}" @click="navTo(2)">STORY OF US</a></li>
        <li><a :class="{active: section == 3}" @click="navTo(3)">SHOP</a></li>
        <li><a :class="{active: section == 4}" @click="navTo(4)">CONTACT</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import HomeIcon from '@/components/icons/Home.vue'

export default {
  props: {
    section: {
      type: Number,
      default: 0
    }
  },
  components: {
    HomeIcon
  },
  data () {
    return {
      backg: ['', 'about-home', 'story-home', 'shop-home', 'contact-home']
    }
  },
  methods: {
    navTo (section) {
      this.$emit('navto', section)
    }
  }
}
</script>

<style>
@media screen and (max-width: 400px) {
  .navhome {
    font-size: 13px;
  }

  .menu li a:nth-child(2) {
    white-space: nowrap;
  }
}
#home {
  cursor: pointer;
  position: fixed;
  left: 30px;
  top: 15px;
}

#home .cls-1 {
  fill: #6CAADD;
  fill-opacity: 1;
}

.about-home #home .cls-1 {
  fill: #436FB5;
  fill-opacity: 1;
  transition: all 0.2s;
}

.story-home #home .cls-1 {
  fill: var(--story-color, #F7E7AD);
  fill-opacity: 1;
}

.shop-home #home .cls-1 {
  fill: #3994D1;
  fill-opacity: 1;
}

.contact-home #home .cls-1 {
  fill: #CAECFC;
  fill-opacity: 1;
}

#home:hover .cls-1 {
  fill-opacity: 1;
}
</style>

<style scoped>
.navhome {
  position: fixed;
  z-index: 99;
  height: 60px;
  width: 100%;
  transition: all 1s;
  background: none;
}

.navhome.about-home {
  background: #F7ED72;
}

.navhome.story-home {
  background: #458D5F;
}

.navhome.shop-home {
  background: #CAECFC;
}

.navhome.contact-home {
  background: #155A93;
}

.menu {
  list-style: none;
  align-self: center;
  text-align: center;
  margin: 0;
  padding: 0;
}

.menu li {
  display: inline;
  margin: 0 15px;
  font-family: 'YoungSerif';
  color: #436FB5;
}

.menu li a {
  cursor: pointer;
  position: relative;
  text-decoration: none;
}

a:before {
  height: 2px;
  content: "";
  position: absolute;
  background-color: #436FB5;
  width: 100%;
  transform: scaleX(0);
  bottom: -5px;
  /* left: 50%; */
  border-radius: 15px;
  transition: all .7s ease;
}

.story-home a:before {
  background-color: var(--story-color, #F7E7AD);
}

.shop-home a:before {
  background-color: #3994D1;
}

.contact-home a:before {
  background-color: #CAECFC;
}

a:hover:before,
a.active:before {
  width: 100%;
  transform: scaleX(1);
}

.story-home .menu li {
  color: var(--story-color, #F7E7AD);
}

.shop-home .menu li {
  color: #3994D1;
}

.contact-home .menu li {
  color: #CAECFC;
}

</style>
