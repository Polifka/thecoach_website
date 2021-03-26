<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Entfache den Coach in dir!</h1>
            <h4>
              Jeder Mensch kommt täglich in seinem Leben an den einen Punkt wo
              er die exklusive Meinung des Coaches gebrauchen könnte.
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Wofür steht der Coach</h2>
              <h5 class="description">
                Der Buisnesscoach steht nicht nur für gelungende Partys und
                feucht fröhliche Geschäftsausflüge, sondern auch für das
                knallharte durchgreifen gegenüber schamlosen Network-Marketing
                Abzockern.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">24/7 Instagram Chat Support</h4>
                  <p>
                    Mach es dir leicht und leite Scammer an das Team vom Coach
                    auf
                    <a
                      href="https://www.instagram.com/thebuisnesscoach/"
                      target="_blank"
                      >Instagram</a
                    >
                    weiter.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">Verifizierter Erfolg</h4>
                  <p>
                    Wir sind mittlerweile aufgrund unseres durchschlagenden
                    Erfolges bei mehreren Scammern in Deutschland auf dem Radar
                    und wurden dort nachweisbar gesperrt.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>fingerprint</md-icon>
                  </div>
                  <h4 class="info-title">Sicherheit</h4>
                  <p>
                    Anfragen an den Coach werden mit größter Sorgfalt bei Team
                    Meetings im Office oder auf dem Balkon strengst vertraulich
                    behandelt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Das Team des Coaches</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamKM"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Schmandi
                      <br />
                      <small class="card-description text-muted"
                        >Kapellmeister</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Sind die Glocken wieder am Läuten, muss du wohl genug
                        Oetti käufen.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamMSM"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Mister Sebastian Meisinger
                      <br />
                      <small class="card-description text-muted"
                        >Meme Service Manager</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Gehen dir die Memes wieder aus, der MSM hilft dir aus
                        der Apache raus.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamJJ"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Joe Jones
                      <br />
                      <small class="card-description text-muted"
                        >Founder Ceo HR</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Einst, als der Buisnesscoach begann, erkannte dieser
                        Mann, was er alles machen kann.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamQM"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      QuickMarten
                      <br />
                      <small class="card-description text-muted"
                        >Quality Mart</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Manchmal QUICK manchmal SMART, dat ist doch der QUICK
                        MART.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamCCO"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Friedrich Eberhardt
                      <br />
                      <small class="card-description text-muted"
                        >Chief Champagne Officer</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Was wäre der Champain nur ohne den Herrn, der hört auf
                        den Name Mister Chief Champagne.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamSBA"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Niyeyls
                      <br />
                      <small class="card-description text-muted"
                        >Stickerbeauftragter</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Sind die Sticker wieder am Grinden, fahr doch nach
                        Solingen und hol dir Einen.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamMC"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Kosta Rica
                      <br />
                      <small class="card-description text-muted"
                        >Model/Kontentmanager</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Ob am Strand oder am Fluss, Kosta auf Fotos ist immer
                        ein Genuss.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamHMC"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Lina
                      <br />
                      <small class="card-description text-muted"
                        >Head of Motivational Coaching</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Bist du am verzagen? Hör auf damit geh Lina fragen!
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamWRM"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Carinchen
                      <br />
                      <small class="card-description text-muted"
                        >Womem Ressource Management</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Fehlt dir noch die weibliche Prise, dat Carinchen
                        besorgt dir diese.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamCAD"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Hsinlan
                      <br />
                      <small class="card-description text-muted"
                        >Chief Asien Dolmetscher</small
                      >
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Ob Englisch Chinesisch oder auch auf Huhn,
                        Sprachprobleme müssen mit Hsinlan ruhen!
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamCWO"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Hannah
                      <br />
                      <small class="card-description text-muted"
                        >Chief Wine Officer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Ist der Wein schon wieder aus, hilft dir Hannah aus dem
                        Zwiespalt raus.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamCDS"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Andi
                      <br />
                      <small class="card-description text-muted"
                        >Chief of Direct Sales</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Muss der Bitcoin über die Wupper, hilft dir der Andi mit
                        eigenem Kutter.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamCTTO"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Fapi Wong
                      <br />
                      <small class="card-description text-muted"
                        >Chief Transportation Transformation Officer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Kommst du mit Transport Problemen an, hilft dir doch der
                        Fapi Mann.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamPDM"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Puschi
                      <br />
                      <small class="card-description text-muted"
                        >Personal Development Manager</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Hör auf zu Basteln, Puschi sagt fang an mim Hustlen.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamPG"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Raul
                      <br />
                      <small class="card-description text-muted"
                        >Fotograf</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Hast du keine nicen Pics am Start, geh und frag den
                        Photograph.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamMA"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Dorian
                      <br />
                      <small class="card-description text-muted"
                        >Mannschaftsarzt</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Brauchst du nach dem Saufen eine Infusion, geh zum
                        Dorian der gibt sie dir auch ohne Lohn.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamMM"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Simon
                      <br />
                      <small class="card-description text-muted"
                        >Multimedia Management</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Ist der Beamer wieder am Zwicken, kein Problem der MM
                        macht keine Zicken.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamHR"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Nils
                      <br />
                      <small class="card-description text-muted"
                        >High Roller</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Fligh High, der Coach hebt ab wie ein UFO, was sich mit
                        einer Rolle dreht.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamHMBM"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Käptain
                      <br />
                      <small class="card-description text-muted"
                        >Head of Marketing Placement Management</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Brauchst du mal wieder etwas für den Genuss, der Käptain
                        schipperts dir auch über den Fluss.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamNKM"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Nosh
                      <br />
                      <small class="card-description text-muted"
                        >Kabelmann</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        Ich bin der Kabelmaaan, ich liefer Kabel aus und bekomme
                        von den ganzen Kablen einen dicken Bauch.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamLD"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Laura
                      <br />
                      <small class="card-description text-muted">Design</small>
                    </h4>
                    <md-card-content>
                      <p class="card-description">
                        Fehlt dir noch das richtige Design, geh zur Laura die
                        knallt dir eins rein.
                      </p>
                    </md-card-content>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Schreib uns ne Mail!</h2>
              <h4 class="text-center description">
                Wir bekommen zwar schon genug Fanpost, aber irgendwie muss ja
                unser Email-Anbieter beschäftigt werden...
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item">
                    <md-field>
                      <label>Dein Anliegen</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Hier Liebesbrief einfügen:</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-default" @click="mailto()"
                      >Liebesbrief abschicken</md-button
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/team/lr_team_wall.jpg")
    },
    teamCAD: {
      type: String,
      default: require("@/assets/img/faces/cad.jpg")
    },
    teamCCO: {
      type: String,
      default: require("@/assets/img/faces/cco.jpg")
    },
    teamCDS: {
      type: String,
      default: require("@/assets/img/faces/cds.jpg")
    },
    teamCTTO: {
      type: String,
      default: require("@/assets/img/faces/ctto.jpg")
    },
    teamCWO: {
      type: String,
      default: require("@/assets/img/faces/cwo.jpg")
    },
    teamHMBM: {
      type: String,
      default: require("@/assets/img/faces/hmbm.jpg")
    },
    teamHMC: {
      type: String,
      default: require("@/assets/img/faces/hmc.jpg")
    },
    teamHR: {
      type: String,
      default: require("@/assets/img/faces/hr.jpg")
    },
    teamJJ: {
      type: String,
      default: require("@/assets/img/faces/jj.jpg")
    },
    teamKM: {
      type: String,
      default: require("@/assets/img/faces/km.jpg")
    },
    teamMA: {
      type: String,
      default: require("@/assets/img/faces/ma.jpg")
    },
    teamMC: {
      type: String,
      default: require("@/assets/img/faces/mc.jpg")
    },
    teamMM: {
      type: String,
      default: require("@/assets/img/faces/mm.jpg")
    },
    teamMSM: {
      type: String,
      default: require("@/assets/img/faces/msm.jpg")
    },
    teamNKM: {
      type: String,
      default: require("@/assets/img/faces/nkm.jpg")
    },
    teamPDM: {
      type: String,
      default: require("@/assets/img/faces/pdm.jpg")
    },
    teamPG: {
      type: String,
      default: require("@/assets/img/faces/pg.jpg")
    },
    teamQM: {
      type: String,
      default: require("@/assets/img/faces/qm.jpg")
    },
    teamSBA: {
      type: String,
      default: require("@/assets/img/faces/sba.jpg")
    },
    teamWRM: {
      type: String,
      default: require("@/assets/img/faces/wrm.jpg")
    },
    teamLD: {
      type: String,
      default: require("@/assets/img/faces/ld.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    mailto() {
      window.open(
        "mailto:thebuisnesscoach@outlook.de?subject=" +
          this.about +
          "&body=" +
          this.message
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
