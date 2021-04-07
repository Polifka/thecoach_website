<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <h2>
            <br />
            Gönn dir deine eigenen Coach Regeln!
            <br />
          </h2>
          <div class="md-layout md-gutter md-alignment-center">
            <div
              class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            >
              <md-card>
                <carousel :per-page="1" loop :speed="700" :mouse-drag="false">
                  <slide>
                    <img :src="carousel1" alt="carousel1" />
                  </slide>
                  <slide>
                    <img :src="carousel2" alt="carousel2" />
                  </slide>
                  <slide>
                    <img :src="carousel3" alt="carousel3" />
                  </slide>
                </carousel>
              </md-card>
            </div>
            <div
              class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            >
              <md-card>
                <carousel :per-page="1" loop :speed="700" :mouse-drag="false">
                  <slide>
                    <img :src="carousel4" alt="carousel1" />
                  </slide>
                  <slide>
                    <img :src="carousel5" alt="carousel2" />
                  </slide>
                  <slide>
                    <img :src="carousel6" alt="carousel3" />
                  </slide>
                </carousel>
              </md-card>
            </div>
            <div
              class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            >
              <md-card>
                <carousel :per-page="1" loop :speed="700" :mouse-drag="false">
                  <slide>
                    <img :src="carousel7" alt="carousel1" />
                  </slide>
                  <slide>
                    <img :src="carousel8" alt="carousel2" />
                  </slide>
                  <slide>
                    <img :src="carousel9" alt="carousel3" />
                  </slide>
                </carousel>
              </md-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHorizontalResponsive",
  bodyClass: "profile-page",
  data() {
    return {
      classicModal: false,
      selectedDate: new Date("2018/03/26"),
      carousel1: require("@/assets/img/rules/2.webp"),
      carousel2: require("@/assets/img/rules/3.webp"),
      carousel3: require("@/assets/img/rules/4.webp"),
      carousel4: require("@/assets/img/rules/5.webp"),
      carousel5: require("@/assets/img/rules/9.webp"),
      carousel6: require("@/assets/img/rules/10.webp"),
      carousel7: require("@/assets/img/rules/3.webp"),
      carousel8: require("@/assets/img/rules/9.webp"),
      carousel9: require("@/assets/img/rules/2.webp")
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/team/lr_team_wine.webp")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
</style>
