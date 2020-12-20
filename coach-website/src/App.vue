<template>
  <div id="app">
    <CoachHeader/>
    <CoachNavbar/>
    <div class="main-container">
      <router-view></router-view>
    </div>
    <CoachFooter/>
  </div>
</template>

<script>
import CoachNavbar from "./components/CoachNavbar";
import CoachHeader from "./components/CoachHeader";
import CoachFooter from "./components/CoachFooter";


export default {
  name: "app",
  components: {
    CoachNavbar,
    CoachHeader,
    CoachFooter
  },
  props: {},
};
</script>

<style scoped>
.main-container {
  margin-left: 5%;
  margin-right: 5%;
  min-height: 90%;
}
</style>
