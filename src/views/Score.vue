<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Berechne deinen Coach Score!</h2>
              <h5 class="description">
                Betrügen gibts nicht, denk an deine Browser Cookies, we know everything!!!
              </h5>
            </div>
          </div>
          <div class="md-layout md-gutter md-alignment-center">
            <div
              class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25 input-color"
            >
              <md-field>
                <label>Dein Alter</label>
                <md-input v-model="age" type="number"></md-input>
              </md-field>
            </div>
            <div class="title">
              <h5>Jahre beim Coach</h5>
            </div>
            <pagination type = "success" no-arrows v-model="years" :page-count="3"> </pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from "@/components";
export default {
  components: {
    Pagination,
  },
  name: "LayoutHorizontalResponsive",
  bodyClass: "profile-page",
  data() {
    return {
      age: null,
      years: 0,
      variantBC: "md-primary",
      variantCS: "md-accent",
      valueCS: null,
      name: null,
      visible: false,

      bars: [
        {
          name: "Money",
          variant: "md-default",
          badgeType: "primary",
          value: 0,
        },
        {
          name: "Style",
          variant: "md-primary",
          badgeType: "default",
          value: 0,
        },
        {
          name: "Hustle",
          variant: "md-default",
          badgeType: "primary",
          value: 0,
        },
        { name: "Nosh", variant: "md-primary", badgeType: "default", value: 0 },
        { name: "Bike", variant: "md-default", badgeType: "primary", value: 0 },
        {
          name: "Bitcoin",
          variant: "md-primary",
          badgeType: "default",
          value: 0,
        },
        { name: "Bier", variant: "md-default", badgeType: "primary", value: 0 },
      ],
      disableButtonStartV: false,
      disableButtonStop: true,
      disableButtonComment: true,
      timer: null,
      text: ``,
    };
  },

  methods: {
    randomValue() {
      this.disableButtonStartV = true;
      this.disableButtonStop = false;
      this.timer = setInterval(() => {
        this.bars.forEach((bar) => (bar.value = 0 + Math.random() * 100));
      }, 500);
    },
    stopTheCount() {
      (this.disableButtonStop = true), clearInterval(this.timer);
      this.timer = null;
      this.calculateCoachscore();
    },
    calculateCoachscore() {
      this.valueCS = 0;
      this.variantCS = "success";

      for (let i in this.bars) {
        switch (this.bars[i].name) {
          case "Money":
            this.valueCS += this.bars[i].value * 1.0;
            break;
          case "Style":
            this.valueCS += this.bars[i].value * 0.9;
            break;
          case "Nosh":
            this.valueCS += this.bars[i].value * 0.2;
            break;
          case "Bike":
            this.valueCS += this.bars[i].value * 0.5;
            break;
          case "Bitcoin":
            this.valueCS += this.bars[i].value * 0.3;
            break;
          case "Bier":
            this.valueCS += this.bars[i].value * 0.5;
            break;
          default:
            break;
        }
        if (this.age < 35) {
          (this.valueCS += this.age * Math.random() * 0), 5;
        }
        if (this.years <= 3) {
          this.valueCS += 10 * this.years;
        }
        if (this.valueCS < 150) {
          this.variantCS = "danger";
          this.variantBC = "danger";
          this.text = `Dat ist ja wohl nicht dein Ernst, du und der Coach, LACHHAFT!`;
        } else if (this.valueCS >= 150 && this.valueCS < 350) {
          this.variantCS = "warning";
          this.variantBC = "warning";
          this.text = `Da fehlt aber noch ein Schritt auf der Buisnesscoach-Leiter du Amateur!`;
        } else {
          this.variantCS = "success";
          this.variantBC = "success";
          this.text = `Immer diese Hacker...`;
        }
        this.disableButtonComment = false;
      }
    },
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/team/lr_team_wine.webp"),
    },
  },
  computed: {
    disableButtonStart: function () {
      if (this.age != null && !(this.disableButtonStartV == true)) {
        return false;
      }
      return true;
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
.md-field:before {
  background-color: #4caf50 !important;
}
</style>
