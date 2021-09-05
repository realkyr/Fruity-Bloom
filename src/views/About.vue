<template>
  <div class="about">
    <div ref="propose" class="about-section">
      <div class="container-fluid nav">
        <router-link id="homeNav" :to="{name: 'Home'}" tag="a">
          <HomeIcon />
        </router-link>
      </div>
      <div :class="{
        ['propose-section']: true,
        'appear': true,
        container: true
      }">
        <h1 class="pro-items topic">About</h1>
        <h6 class="pro-items subtopic">{ Source }</h6>
        <p class="pro-items aboutus">
          ในสังคมไทยมีพวกชอบติหุ่นคนอื่น หรือที่ฝรั่งเรียกว่า body shaming ( การล้อเลียนรูปร่างหน้าตาของคนอื่น )
          เกิดจากพฤติกรรมของคนที่ตั้งใจอยากประณามโดยการพูดหรือกระทำแบบไม่คิดถึงจิตใจของคน ทำให้ผู้อื่นได้รับ
          ความทุกข์ ละอายใจต่อรูปลักษณ์ร่างกายของตนเอง ซึ่งผลสะท้อนมาจาก ค่านิยม มาตรฐานความงามทางสังคม
          ในช่วงๆนั้น ที่ถูกหล่อหลอมจากสื่อและค่านิยมเก่าที่ส่งต่อกันมาถึงเรื่องความงาม ซึ่งส่งผลให้คนที่ได้รับนำเก็บไป
          คิดแล้ว กลับกลายเป็นคนที่ขาดความมั่นใจ กลัวในสิ่งที่ตัวเองเป็น เพียงเพราะค่านิยมทางร่างกาย
        </p>
        <div class="pro-items aboutus quote">
          “ ทั้งที่ความจริงแล้ว ไม่ว่าร่างกายของคุณนั้นจะเป็นอย่างไร มันก็เป็นร่างกายของเรา  ”
          <div style="text-align: right">{ my body, my choice }</div>
        </div>
      </div>
    </div>
  <div ref="learnto" class="about-section">
    <div :class="{
        ['learnto-section']: true,
        appear: this.visibility.learnto === true,
        disappear: this.visibility.learnto === false,
        container: true
      }">
      <h1 class="learnto-items topic aboutus">“ Learn to<br/>
        <span style="margin-left: 35px">Love my body ”</span>
      </h1>
      <p class="learnto-items aboutus">
        เราจึงอยากสร้างแบรนด์ที่จะมาถ่ายถอดเอกลักษณ์อันโดดเด่นจากการถูกบลูลี่ทางรูปร่างให้สาวๆนั้ได้มีความ
มั่นใจ ไม่ว่าเราจะมีรูปร่างหน้าตาแบบไหน เราก็มีดี มีคุณค่าในแบบของเราไม่ว่าจะช่วงเวลาไหนก็ตาม ภายใต้
concept 12 month of body shaming เพราะเรื่องของ body shaming มีอยู่ในทุกๆช่วงชีวิตของเราโดย
จะมีเหล่าแก็งส์สาวจาก “ Fruity Bloom ” characterทั้ง 12 ตัว มาคอยเสริมความมั่นใจของเรา
      </p>
    </div>
    <img id="beoriginal" :src="require('@/assets/img/About/beoriginal.png')" />
  </div>
  <div ref="fruit" class="about-section">
    <div :class="{
        ['fruit-section']: true,
        appear: this.visibility.fruit === true,
        disappear: this.visibility.fruit === false,
        container: true
      }">
      <h1 class="fruit-items topic">
        “ Fruity Bloom ”
      </h1>
      <br/>
      <p class="fruit-items fruit-article">
คือชื่อของแก็งส์สาวทั้ง12 คน ที่ต่างก็ผ่านการถูก body shaming มาในรูปแบบที่
แตกต่างกันออกไป ทั้ง12 คนจึงมาร่วมตัวกันแล้วดึงเอกลักษณ์เฉพาะตัวออกมาเพื่อ
ที่จะสามารถก้าวข้ามผ่านอุปสสรค์เหล่านี้ และรักที่จะเป็นตัวของตัวเอง ซึ่งสาวๆ
เหล่านี้แทนตัวมาจากผลไม้ทั้ง12 เดือน จึงเป็นที่มาของ “ Fruity bloom ”
Fruity คือ ลักษณะของผลไม้ที่มีจุดเด่นที่แตกต่างกัน ไม่ว่าจะกลิ่น หรือรสชาติของ
ผลไม้ เปรียบกับทั้ง 12 character ที่มีทั้งจุดเด่น ลักษณะนิสัยที่แตกต่างของแต่ละคน
Bloom คือความเบ่งบาน เปรียบเสมือนกับความงามของผู้หญิงที่กำลังเบ่งบาน
อย่างสวยงาม <br> ซึ่งก็หมายถึง ผู้หญิงเหล่านี้เปรียบกับผลไม้ของทั้ง 12 เดือน  ขนาดผลไม้ที่มีรูปร่าง
ที่แปลก ก็ยังได้รับความนิยมและจัดให้เป็นผลไม้ของแต่ละหน้า ก็เหมือนกับคน
สุดท้ายแล้วไม่ว่าเราจะมีรูปร่างหน้าตาแบบไหน เราก็มีดี มีคุณค่าที่พร้อมจะเบ่งบาน
ในแบบของเราไม่ว่าจะช่วงเวลาไหนก็ตาม
      </p>
    </div>
    <div class="container-fluid nav footer">
      <router-link id="homeNav" :to="{name: 'Home'}" tag="a">
        <HomeIcon />
      </router-link>
    </div>
  </div>
  </div>
</template>

<style scoped src="@/assets/css/about.css"></style>
<style scoped src="@/assets/css/about-animation.css"></style>

<script>
import HomeIcon from '../components/icons/Home'
export default {
  components: {
    HomeIcon
  },
  mounted () {
    this.$store.state.start = true
    this.$store.state.isLoadFinish = true
    window.addEventListener('scroll', this.checkVisibility)
  },
  data () {
    return {
      position: window.scrollY,
      visibility: {
        propose: true,
        learnto: null,
        fruit: null
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.checkVisibility)
  },
  methods: {
    checkVisibility () {
      let step = 400
      if (window.innerHeight >= 1000) step = 1000
      this.position = window.scrollY + step
      if (this.position >= this.$refs.learnto.offsetTop) {
        this.visibility.learnto = true
      } else {
        this.visibility.learnto = this.visibility.learnto === null ? null : false
      }

      if (this.position >= this.$refs.fruit.offsetTop + 200) {
        this.visibility.fruit = true
      } else {
        this.visibility.fruit = this.visibility.fruit === null ? null : false
      }
      return true
    },
    sectionStyle (name) {
      const sectionName = `${name}-section`
      return {
        [sectionName]: true,
        appear: this.visibility[name] === true,
        disappear: this.visibility[name] === false,
        container: true
      }
    }
  }
}
</script>

<style>
.cls-1 {
  fill: #dd2c39;
  transition: all 0.2s;
}

.footer .cls-1 {
  fill: #D6751E;
  transition: all 0.2s;
}

#homeNav:hover .cls-1 {
  fill: #9cd6f7;
}
</style>
