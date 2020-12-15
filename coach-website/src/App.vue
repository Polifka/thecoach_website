<template>
  <div id="app">
    <CoachHeader/>
    <CoachNavbar/>
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import CoachNavbar from "./components/CoachNavbar";
import CoachHeader from "./components/CoachHeader";

export default {
  name: "app",
  components: {
    CoachNavbar,
    CoachHeader
  },
  props: {},
};
</script>

<style scoped>
.main-container {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5px;
}
</style>
