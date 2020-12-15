<template>
  <div id="app">
    <div class="row">
      <div class="row margin-block-header">
        <div class="row">
            <img class="imgCss" src="./assets/logo.png" />
            <h2>THEBUISNESSCOACH</h2>
        </div>
      </div>
    </div>
    <CoachNavbar />
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CoachNavbar from "./components/CoachNavbar";
export default {
  name: "app",
  components: {
    CoachNavbar,
  },
  props: {},
};
</script>

<style scoped>
.imgCss {
  width: 40px;
}
.main-container {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5px;
}

.margin-block-header {
  margin: auto;
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>
