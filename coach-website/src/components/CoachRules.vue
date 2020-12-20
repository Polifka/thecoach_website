<template>
  <div>
    <h1 class="headline-rules">Gönn dir eigene Coach Regeln!</h1>
    <div class="row">
      <div class="col-md-4 col-margin">
        <b-carousel
          id="carousel"
          v-model="slide"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          :interval="0"
        >
          <b-carousel-slide img-src="../assets/rules/10.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/9.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/5.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/4.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/3.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/2.jpg" clas="omg">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-md-4  col-margin">
        <b-carousel
          id="carousel"
          v-model="slide2"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          :interval="0"
        >
          <b-carousel-slide img-src="../assets/rules/2.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/3.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/4.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/5.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/9.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/10.jpg" clas="omg">
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-md-4 col-margin">
        <b-carousel
          id="carousel"
          v-model="slide3"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
          :interval="0"
        >
          <b-carousel-slide img-src="../assets/rules/5.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/10.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/4.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/2.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/9.jpg" clas="omg">
          </b-carousel-slide>
          <b-carousel-slide img-src="../assets/rules/3.jpg" clas="omg">
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoachRules",
  data() {
    return {
      slide: 0,
      slide2: 0,
      slide3: 0,

      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      console.log(slide);
    },
    onSlideEnd(slide) {
      this.sliding = false;
      console.log(slide);
    },
  },
};
</script>

<style scoped>
#carousel {
  max-height: 80%;
}

.headline-rules {
    text-align:center; 
    font-family: 'HelveticaNowDisplay-Bd',sans-serif;
    line-height: 93px;
    color: #000;
    letter-spacing: -1px;
}

.col-margin {
  margin-bottom:50px;
}

</style>