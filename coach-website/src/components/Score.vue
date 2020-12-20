<template>
  <div>
    <div class="row">
      <div class="col">
        <form>
          <h2>Berechne deinen Coach-Score!</h2>
          <br />
          <div class="form-group">
            <label for="subject1">Dein Alter:</label>
            <input
              type="number"
              max="99"
              v-model="subject1"
              class="form-control"
              id="age"
              placeholder="Only numbers"
            />
          </div>
          <div>
            <label for="subject2">Jahre beim Coach:</label>
            <input
              type="number"
              v-model="subject2"
              class="form-control"
              id="years"
              max="2"
              min="0"
              placeholder="Hier tippen"
            />
          </div>
        </form>
      </div>
    </div>

    <div class="row row-margin">
      <div class="col-1"></div>
      <div class="col-10">
        <div class="row">
          <div class="col-9">
            <b-button
              class="mt-3"
              :disabled="disableButtonStart"
              @click="randomValue"
              variant="outline-secondary"
              style="margin-right: 3%"
              >Start Calculation</b-button
            >
            <b-button
              class="mt-3"
              :disabled="disableButtonStop"
              @click="stopTheCount"
              variant="outline-danger"
              >Stop the Count</b-button
            >
          </div>

          <div class="col">
            <b-button
              class="mt-3 float-right"
              :disabled="disableButtonComment"
              :variant="this.variantBC"
              :class="visible ? null : 'collapsed'"
              :aria-expanded="visible ? 'true' : 'false'"
              aria-controls="collapse-4"
              @click="visible = !visible"
              style="float: right"
              >Comment from Coach</b-button
            >
          </div>
        </div>

        <b-collapse id="collapse-4" v-model="visible">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </div>
      <div class="col-1"></div>
    </div>

    <div class="row">
      <div class="col-sm">
        <div class="row mb-2">
          <div class="col-sm-2">{{ name }}COACHSCORE:</div>
          <div class="col-sm-10 pt-1">
            <b-progress
              height="2rem"
              :variant="this.variantCS"
              striped
              :animated="true"
              show-progress
              :value="this.valueCS"
              :max="440"
            ></b-progress>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-1" v-for="bar in bars" v-bind:key="bar.name">
      <div class="col-sm-2">{{ bar.name }}:</div>
      <div class="col-sm-10 pt-1">
        <b-progress
          :value="bar.value"
          :variant="bar.variant"
          :key="bar.variant"
          show-value
        ></b-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject1: null,
      subject2: null,
      variantBC: null,
      variantCS: null,
      valueCS: null,
      name: null,
      visible: false,

      bars: [
        { name: "Money", variant: "dark", value: 0 },
        { name: "Style", variant: "secondary", value: 0 },
        { name: "Hustle", variant: "dark", value: 0 },
        { name: "Nosh", variant: "secondary", value: 0 },
        { name: "Bike", variant: "dark", value: 0 },
        { name: "Bitcoin", variant: "secondary", value: 0 },
        { name: "Bier", variant: "dark", value: 0 },
      ],
      disableButtonStart: false,
      disableButtonStop: true,
      disableButtonComment: true,
      timer: null,
      text: `dd`,
    };
  },
  methods: {
    randomValue() {
      this.disableButtonStart = true;
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
        if (this.valueCS < 150) {
          this.variantCS = "danger";
          this.variantBC = "danger";
          this.text = `Dat ist ja wohl nicht dein Ernst, du und der Coach, LACHHAFT...`;
        } else if (this.valueCS >= 150 && this.valueCS < 350) {
          this.variantCS = "warning";
          this.variantBC = "warning";
          this.text = `Da fehlt aber noch ein Schritt auf der Buisnesscoach-Leiter du Amateur`;
        } else {
          this.variantCS = "success";
          this.variantBC = "success";
          this.text = `Willkommen zurück Joe Jones`;
        }
        this.disableButtonComment = false;
      }
    },
  },
};
</script>

<style scoped>
.text-container {
  background: white;
  margin-top: 5px;
}

.row-margin {
  margin-bottom: 2%;
  margin-top: 2%;
}
</style>