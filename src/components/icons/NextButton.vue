<template>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 163 60" style="enable-background:new 0 0 163 60;" xml:space="preserve" :width="width">
    <path class="st0" d="M158.28,59.5c0-30.38-33.8-55-75.5-55s-75.5,24.62-75.5,55H158.28z"/>
    <path class="st1" d="M69.44,24.06c7.29-0.03,19.39,0.04,26.68,0.09c2.48,0.02,3.84,2.89,2.29,4.82L85.23,45.39
      c-1.18,1.47-3.42,1.48-4.61,0.02L67.16,28.9C65.58,26.97,66.95,24.07,69.44,24.06z"/>
  </svg>
</template>

<style scoped>
  .st0{
    fill:none;
    stroke:#74C5E8;
    stroke-miterlimit:10;
  }
  #about-section .st0 { stroke: #F7ED72; }
  #story-section .st0 { stroke: white; }
  #shop-section .st0 { stroke: #3994D1; }

  .st1 { fill:#74C5E8; }
  #about-section .st1 { fill:#F7ED72; }
  #story-section .st1 { fill: white; }
  #shop-section .st1 { fill: #3994D1; }
</style>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 130
    }
  }
}
</script>
