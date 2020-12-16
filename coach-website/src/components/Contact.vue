<template>
  <div class="row">
    <div
      class="col-md-6 col-lg-5 col-xl-3"
      style="margin: auto; margin-top: 20px"
    >
      <form>
        <h2>Schreib uns ne Mail!</h2>
        <br />
        <div class="form-group">
          <label for="subject">Was ist dein Anliegen?</label>
          <input
            v-model="subject"
            class="form-control"
            id="subject"
            placeholder="Ich möchte auch ein BUISNESScoach werden..."
          />
        </div>
        <div class="form-group">
          <label for="textarea">Hier Liebesbrief einfügen:</label>
          <textarea
            v-model="message"
            class="form-control"
            id="textarea"
            rows="3"
            placeholder="Mein lieber Lieblings-Coach, ..."
          ></textarea>
        </div>
        <b-button @click="openMail()">Let's Go!</b-button>
      </form>
    </div>

    <b-modal ref="error-modal" hide-footer title="Na hör mal!">
      <div class="d-block text-center">
        <h4><u>Bitte fülle alle Felder aus!</u></h4>
      </div>
      <b-button
        class="mt-3 col-3"
        variant="outline-danger"
        block
        @click="hideModal"
        style="margin: auto"
        >Ok Chef
        </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {},
  data() {
    return {
      subject: null,
      message: null,
    };
  },
  methods: {
    openMail() {
      if (
        this.subject == null ||
        this.message == null ||
        this.subject == "" ||
        this.message == ""
      ) {
        this.showModal();
      } else {
        window.open(
          "mailto:thebuisnesscach@outlook.de?subject=" +
            this.subject +
            "&body=" +
            this.message
        );
      }
    },
    showModal() {
      this.$refs["error-modal"].show();
    },
    hideModal() {
      this.$refs["error-modal"].hide();
    },
  },
};
</script>

<style scoped>
</style>