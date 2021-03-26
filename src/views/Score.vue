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
            Berechne deinen Coach Score!
            <br />
          </h2>
        </div>
      </div>
      <div id="inputs">
        <div class="md-layout md-gutter md-alignment-center">
          <div
            class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25"
          >
            <md-field>
              <label>Dein Alter</label>
              <md-input v-model="age" type="number"></md-input>
            </md-field>
          </div>
          <div class="title">
            <h5>Jahre beim Coach</h5>
          </div>
          <pagination no-arrows v-model="years" :page-count="3"> </pagination>
        </div>
      </div>
      <div id="progress-pagination">
        <v-progress-circular
          :rotate="360"
          :size="100"
          :width="15"
          :value="value"
          color="teal"
        >
          {{ value }}
        </v-progress-circular>
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-xsmall-size-100">
            <div class="row mb-1" v-for="bar in bars" v-bind:key="bar.name">
              <div class="col-sm">
                <badge :type="bar.badgeType">{{ bar.name }}</badge>
                <badge :type="bar.badgeType">{{ bar.value }}</badge>
                <md-progress-bar
                  :class="bar.variant"
                  :md-value="bar.value"
                  show-value
                ></md-progress-bar>
              </div>
            </div>
          </div>

          <div class="md-layout-item md-size-50 md-xsmall-size-100">
            <div class="row row-margin">
              <div class="col-1"></div>
              <div class="col-10">
                <div class="row">
                  <div class="col-9">
                    <md-button
                      class="md-raised"
                      :disabled="disableButtonStart"
                      @click="randomValue"
                      variant="outline-secondary"
                      style="margin-right: 3%"
                      >Start Calculation</md-button
                    >
                    <md-button
                      class="mt-3"
                      :disabled="disableButtonStop"
                      @click="stopTheCount"
                      variant="outline-danger"
                      >Stop the Count</md-button
                    >
                  </div>

                  <b-modal ref="error-modal" hide-footer title="Na hör mal!">
                    <div class="d-block text-center">
                      <h4>
                        <u>{{ text }}</u>
                      </h4>
                    </div>
                    <md-button
                      class="md primary"
                      :variant="this.variantBC"
                      block
                      @click="hideModal"
                      style="margin: auto"
                      >Ok Chef
                    </md-button>
                  </b-modal>

                  <div class="col">
                    <md-button
                      class="mt-3 float-right"
                      :disabled="disableButtonComment"
                      :variant="this.variantBC"
                      @click="showModal"
                      style="float: right"
                      >Comment from Coach</md-button
                    >
                  </div>
                </div>
              </div>
              <div class="col-1"></div>
            </div>
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
    Pagination
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
          value: 0
        },
        {
          name: "Style",
          variant: "md-primary",
          badgeType: "default",
          value: 0
        },
        {
          name: "Hustle",
          variant: "md-default",
          badgeType: "primary",
          value: 0
        },
        { name: "Nosh", variant: "md-primary", badgeType: "default", value: 0 },
        { name: "Bike", variant: "md-default", badgeType: "primary", value: 0 },
        {
          name: "Bitcoin",
          variant: "md-primary",
          badgeType: "default",
          value: 0
        },
        { name: "Bier", variant: "md-default", badgeType: "primary", value: 0 }
      ],
      disableButtonStartV: false,
      disableButtonStop: true,
      disableButtonComment: true,
      timer: null,
      text: ``
    };
  },

  methods: {
    move() {
      var elem = document.getElementById("myBar");
      var width = 20;
      var id = setInterval(frame(), 10);
    },
    frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width * 1 + "%";
      }
    },
    randomValue() {
      this.disableButtonStartV = true;
      this.disableButtonStop = false;
      this.timer = setInterval(() => {
        this.bars.forEach(bar => (bar.value = 0 + Math.random() * 100));
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

    showModal() {
      this.$refs["error-modal"].show();
    },
    hideModal() {
      this.$refs["error-modal"].hide();
    }
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/team/lr_team_wine.jpg")
    }
  },
  computed: {
    disableButtonStart: function() {
      if (this.age != null && !(this.disableButtonStartV == true)) {
        return false;
      }
      return true;
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  move() {
    var elem = document.getElementById("myBar");
    var width = 20;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width * 1 + "%";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
.badge.badge-primary {
  background-color: #0b0b0b;
}
.badge.badge-info {
  background-color: #727272;
}
</style>
