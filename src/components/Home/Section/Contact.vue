<template>
  <div id="contact-section" class="d-flex justify-content-center flex-column">
    <div style="max-width: 800px; margin: 0 auto;" class="container text-center">
      <img class="strawlogo" :src="require('@/assets/img/Contact/logo.png')" alt="" srcset="">
      <h3 style="margin-top: 20px;" class="subtopic">Phinchunan Potipassa</h3>
      <h3 class="subtopic thai">{ ภินญ์ชุนันท์ โพธิปัสสา }</h3>
      <h4 class="subtopic thai">PP./พีพี</h4>
      <hr class="new2">
      <h3 style="margin-top: 20px;" class="subtopic">Email : ppkhemmud@gmail.com</h3>
      <h3 class="subtopic thai">Tel : 0989453593</h3>
    </div>
    <!-- <router-link
      :to="{name: 'About'}"
      class="seemore text-center"
      tag="a">
      WANT TO KNOW US MORE
    </router-link> -->
    <div class="footer">
      Fruity Bloom
    </div>
  </div>
</template>

<style scoped>
.topic {
  font-family: 'Renogare Regular';
  color: #F7ED72;
}

.footer {
  padding: 10px 0;
  background: #CAECFC;
  color: #3994D1;
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 50px;
  text-align: center;
  font-family: 'YoungSerif';
}

hr.new2 {
  margin-top: 20px;
  border-top: 2px solid #F7ED72;
}

.subtopic {
  color: #CAECFC;
  font-family: 'YoungSerif';
}

.subtopic.thai {
  color: #CAECFC;
  font-family: 'Kanit';
}

#contact-section {
  background: #2D69A3;
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 90;
}

.seemore {
  margin: 25px auto;
  display: block;
  width: 300px;
  align-self: center;
  padding: 13px 20px;
  color: white;
  border: white solid 2px;
  border-radius: 15px;
  font-family: 'YoungSerif';
}

.strawlogo {
  width: 250px;
  margin-left: 20px;
}
</style>
