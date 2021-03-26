<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start" v-if="showHeadline == true">
        <md-list-item href="#/">
          <img
            class="navbar-logo logo-width"
            src="@/assets/img/logo/logo_big.png"
            alt="Coach Logo"
          />
          <div class="d-none d-md-block textBuisness-width">
            thebuisnesscoach
          </div>
        </md-list-item>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>
        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="true">
              <!-- Here you can add your items from the section-start of your toolbar -->
              <md-list-item href="#/">
                <i class="material-icons">home</i>
                <p>Home</p>
              </md-list-item>
            </mobile-menu>
            <md-list>
              <md-list-item href="#/rules">
                <i class="material-icons">burst_mode</i>
                <p>Rules</p>
                <md-tooltip md-direction="bottom"
                  >Erstelle deine Coach Regeln</md-tooltip
                >
              </md-list-item>
              <!-- <md-list-item href="#/score">
                <i class="material-icons">blur_linear</i>
                <p>Score</p>
                <md-tooltip md-direction="bottom"
                  >Ermittle deinen Coach Score</md-tooltip
                >
              </md-list-item> -->
              

              <md-list-item
                href="https://www.instagram.com/thebuisnesscoach/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p>Coachagram</p>
                <md-tooltip md-direction="bottom">Folge dem Coach</md-tooltip>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: require("@/assets/img/logo/logo.ico.png")
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      showHeadline: true
    };
  },
  computed: {},
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.showHeadline = !this.showHeadline;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style scoped>
.logo-width{
  max-width: 40px;
}
.textBuisness-width{
  margin-left: 10px;
}
</style>
