<template>
  <footer>
      <b-navbar toggleable="lg" variant="light">
        <b-navbar-brand style="margin: auto">
          <router-link to="/">
            <img class="imgCss" href="/" src="../assets/logo.png" />
          </router-link>
        </b-navbar-brand>
      </b-navbar>
  </footer>
</template>

<script>
export default {
  name: "CoachFooter",
  props: {},
};
</script>

<style scoped>
.imgCss {
  width: 40px;
  height: 40px;
}

footer {
    margin-top: 5%;
}
</style>