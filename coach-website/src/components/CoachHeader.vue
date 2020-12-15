<template>
    <div class="row">
      <div class="row margin-block-header">
        <div class="row">
            <img class="imgCss" src="../assets/logo.png" />
            <h2>THEBUISNESSCOACH</h2>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "CoachHeader",
  props: {},
};
</script>

<style scoped>
.margin-block-header {
  margin: auto;
  margin-top: 15px;
  margin-bottom: 10px;
}

.imgCss {
  width: 40px;
  height: 40px;
}
</style>