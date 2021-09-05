<template>
  <div id="about-section" :style="{ backgroundImage: `url('${image}')` }" class="d-flex justify-content-center">
    <div class="about-container d-flex align-item-center flex-column justify-content-center">
      <div class="container text-center">
        <div :class="{appear: section == 1}">
          <h1 class="topic text-center">About</h1>
          <h6 class="subtopic text-center">{ Source }</h6>
          <p class="aboutus text-justify">
            ในสังคมไทยมีพวกชอบติหุ่นคนอื่น หรือที่ฝรั่งเรียกว่า body shaming ( การล้อเลียนรูปร่างหน้าตาของคนอื่น )
            เกิดจากพฤติกรรมของคนที่ตั้งใจอยากประณามโดยการพูดหรือกระทำแบบไม่คิดถึงจิตใจของคน ทำให้ผู้อื่นได้รับ
            ความทุกข์ ละอายใจต่อรูปลักษณ์ร่างกายของตนเอง ซึ่งผลสะท้อนมาจาก ค่านิยม มาตรฐานความงามทางสังคม
            ในช่วงๆนั้น ที่ถูกหล่อหลอมจากสื่อและค่านิยมเก่าที่ส่งต่อกันมาถึงเรื่องความงาม ซึ่งส่งผลให้คนที่ได้รับนำเก็บไป
            คิดแล้ว กลับกลายเป็นคนที่ขาดความมั่นใจ กลัวในสิ่งที่ตัวเองเป็น เพียงเพราะค่านิยมทางร่างกาย
          </p>
          <div class="pro-items aboutus quote">
            “ ทั้งที่ความจริงแล้ว ไม่ว่าร่างกายของคุณนั้นจะเป็นอย่างไร มันก็เป็นร่างกายของเรา  ”
            <div style="font-family: 'YoungSerif'; text-align: right">{ my body, my choice }</div>
          </div>
        </div>

        <router-link
          :to="{name: 'About'}"
          class="seemore"
          tag="a">
          SEE MORE
        </router-link>
      </div>
    </div>
    <NextButton @click.native="nextSection()" class="next-button" />
  </div>
</template>

<script>
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
      image: require('@/assets/img/Home/aboutbg-01.jpg')
    }
  },
  methods: {
    nextSection () {
      console.log('next!')
      this.$emit('nextpage', 2)
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

#about-section {
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  position: relative;
  background-position: center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 90;
}
.about-container {
  width: 680px;
}

.topic {
  font-family: 'Renogare Regular';
  color: #F7ED72;
}

.subtopic {
  font-family: 'YoungSerif';
  color: #436FB5;
}

.aboutus {
  font-family: 'kanit';
  color: #436FB5;
}

.seemore {
  margin: 25px auto;
  display: block;
  width: 150px;
  align-self: center;
  padding: 13px 20px;
  color: #F7ED72;
  border: #F7ED72 solid 2px;
  border-radius: 15px;
  font-family: 'YoungSerif';
}

#about-section .container {
  padding: 0 15px 0 15px;
}

.appear {
  animation: 1s ease-in-out .5s appearing backwards;
}

@keyframes appearing {
  from {
    opacity: 0;
  }
}
</style>
