<template>
  <div id="app">
    <div class="row" style="margin-top:3px;">
      <div class="col-1" style="padding-right:3px">
        <img class="imgCss" src="./assets/logo.png" align="right"/>
      </div>
      <div class="col" style="padding-left:0px;">
        <h2 class="headline" align="left">THEBUISNESSCOACH</h2>
      </div>
    </div>
    <MainContainer/>
  </div>
</template>

<script>
import MainContainer from './components/MainContainer.vue'
export default {
  components: { MainContainer },
  name: 'app',
  props: {
  }
}
</script>

<style scoped>
.imgCss {
  width: 40px;
  margin-top: 5px;
}

.headline {
  font-size: 40px;
  font-weight: 1000;
}
</style>
