<template>
<div>
    
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
