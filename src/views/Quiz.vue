<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item text-center">
              <h2 class="title text-center">
                Hast du Lust ein Spiel zu spielen?
              </h2>
              <h5 class="description">
                Für eine gute Prise Unterhaltung sorgen wir von nun an mit
                unserem brandneuen Coachquiz. Streng dich an und der Coach kommt
                dich persönlich zu Hause besuchen!
              </h5>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item">
              <div class="container-app">
                <div class="container-quiz">
                  <div
                    class="step-progress"
                    :style="{ width: progress + '%' }"
                  ></div>
                  <div
                    class="box"
                    v-for="(question, index) in questions.slice(a, b)"
                    :key="index"
                    v-show="quiz"
                  >
                    <div class="box-question">
                      <h2 class="title text-center">
                        Frage {{ b }}/{{ questions.length }}
                      </h2>
                      <h3 class="title text-center">{{ question.question }}</h3>
                    </div>
                    <div class="box-propositions">
                      <ul>
                        <li
                          v-for="(proposition, index) in question.propositions"
                          :key="index"
                          class="li"
                          @click="selectResponse(proposition, index)"
                          :class="correct ? check(proposition) : ''"
                        >
                          {{ proposition.props }}
                          <div
                            class="fas fa-check"
                            v-if="correct ? proposition.correct : ''"
                          ></div>
                          <div
                            class="fas fa-times"
                            v-if="correct ? !proposition.correct : ''"
                          ></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="box-score" v-if="score_show">
                    <h2 class="text-center">
                      Du hast {{ score }}/{{ questions.length }} Punkte erreicht
                    </h2>

                    <div class="btn-restart text-center">
                      <md-button
                        @click="restartQuiz"
                        class="md-success restart-btn"
                        >Neustart! <i class="fas fa-sync-alt"></i
                      ></md-button>
                    </div>
                  </div>
                  <div class="footer-quiz">
                    <div v-if="progress < 100" class="text-center">
                      <md-button
                        @click="skipQuestion()"
                        :style="
                          next ? 'background-color: rgb(106, 128, 202)' : ''
                        "
                        >Skip
                      </md-button>
                      <md-button
                        @click="nextQuestion()"
                        :class="{ 'md-success': !next }"
                        >Weiter</md-button
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quiz",
  bodyClass: "profile-page",
  data() {
    return {
      variantBC: "md-primary",
      variantCS: "md-accent",
      valueCS: null,
      name: null,
      visible: false,
      //Quiz
      questions: [
        {
          question: "In welchem Jahr wurde der Coach der Coaches gegründet?",
          propositions: [
            { props: "2020" },
            { props: "2019", correct: true },
            { props: "2030" },
            { props: "2052" }
          ]
        },
        {
          question: "Was besitzt der Coach NICHT?",
          propositions: [
            { props: "Ipad" },
            { props: "Sim Karte" },
            { props: "Merchandise" },
            { props: "Ein Produkt", correct: true }
          ]
        },
        {
          question: "Wer ist der größte Fan des Coaches?",
          propositions: [
            { props: "Nicky Noshew" },
            { props: "Networker Mummy" },
            { props: "Niklas Freihofer", correct: true },
            { props: "Christian Steiffen" }
          ]
        },
        {
          question: "Was war das Ziel der 1. Buisnesstour?",
          propositions: [
            { props: "LR-Werksbesichtigung", correct: true },
            { props: "Solingen" },
            { props: "Cambodia" },
            { props: "Christian Steiffen" }
          ]
        },
        {
          question: "Aus was besteht das Coach-Getränk?",
          propositions: [
            { props: "Cola mit Ice" },
            { props: "Bier" },
            { props: "Wasser" },
            { props: "99% Sekt + 1% Multi", correct: true }
          ]
        },
        {
          question: "Was gibt’s beim Coach Merchandise-Store zu kaufen?",
          propositions: [
            { props: "Bikini", correct: true },
            { props: "Handschuhe" },
            { props: "Müllbeutel" },
            { props: "Sekt" }
          ]
        },
        {
          question:
            "Welches Unternehmen hat der Buisnesscoach eigenhändig zerstört?",
          propositions: [
            { props: "Demokratos" },
            { props: "IceBourghBourgh" },
            { props: "Kierdorf Trading Gbr" },
            { props: "Volume X", correct: true }
          ]
        },
        {
          question:
            "Welches Unternehmen hat der Buisnesscoach eigenhändig aufgezogen?",
          propositions: [
            { props: "Zoom", correct: true },
            { props: "McDonalds" },
            { props: "Subway" },
            { props: "BurgerKingKong" }
          ]
        }
      ],
      a: 0,
      b: 1,
      next: true,
      score_show: false,
      quiz: true,
      score: 0,
      correct: false,
      progress: 0
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

    selectResponse(e) {
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
      }
    },
    skipQuestion() {
      if (!this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;

      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },
    restartQuiz() {
      Object.assign(this.$data, this.$options.data()); // reset data in vue
    }
  },

  props: {
    header: {
      type: String,
      default: require("@/assets/img/team/lr_team_wine.webp")
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

.header-quiz {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
}

.box {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
}

.box-question {
  margin-top: 20px;
  margin-bottom: 20px;
}

.box-propositions {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
}

.container-quiz {
  margin-top: 35px;
}

ul {
  display: flex;
  width: 65%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

li {
  list-style: none;
  line-height: 3;
  border: 1px solid #cdd2d2;
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
  font-weight: bold;
}

li.incorrect {
  border: 1px solid rgb(240, 117, 100);
  background-color: rgb(240, 117, 100);
  color: white;
  font-weight: 600;
}

li.correct {
  border: 1px solid rgb(74, 219, 74);
  background-color: rgb(74, 219, 74);
  color: white;
  font-weight: 600;
}

.step-progress {
  display: flex;
  width: 100%;
  height: 5px;
  background-color: rgb(106, 128, 202);
  transition: 0.5s;
}

.box-score {
  padding: 25px;
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
}

.restart-btn {
  margin-top: 15px;
}

.footer-quiz {
  margin-bottom: 215px;
}
</style>
