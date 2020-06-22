<template>
  <div>
    <nuxt-link to="/submit" class="back-button">Zurück</nuxt-link>
    <p class="error">{{ error }}</p>
    <p>Halten sie den Halten QR Code vor die Kamera. Er sollte nach wenigen Sekunden von alleine erkannt werden.</p>
    <div class="qr-code-wrapper">
      <client-only>
        <QrcodeStream @decode="onDecode" @init="onInit" ref="qrcode-scanner"/>
      </client-only>
    </div>

    <div class="footer">
      <nuxt-link to="/imprint">Impressum & Datenschutz</nuxt-link>|
      <a href="mailto: contact@heylocal.de">Feedback</a>
    </div>
  </div>
</template>

<script>
// https://gruhn.github.io/vue-qrcode-reader/demos/DecodeAll.html

export default {
  middleware: "hasActiveCoupon",
  components: {
    QrcodeStream: async () => {
      /* eslint-disable */
      if (process.client)
        return (await import("vue-qrcode-reader")).QrcodeStream;
    }
  },

  data() {
    return {
      error: ""
    };
  },

  methods: {
    onDecode(code) {
      if (code && code.length === 3) {
        console.log("Code:", code);
        this.$ga.event("qr_code", "scane", code, 1);
        this.$router.push({ path: "/submit", query: { code } });
      } else {
        this.error = "Der QR Code ist leider falsch.";
      }
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "Fehler: Bitte erlauben Sie Zugriff auf die Kamera.";
        } else if (error.name === "NotFoundError") {
          this.error = "Fehler: Es wurde leider keine Kamera gefunden.";
        } else if (error.name === "NotSupportedError") {
          this.error =
            "Fehler: Der QR Code Scanner ist nur auf HTTPS Seiten verfügbar.";
        } else if (error.name === "NotReadableError") {
          this.error =
            "Fehler: Kamera wird bereits von einer anderen App verwendet.";
        } else if (error.name === "OverconstrainedError") {
          this.error = "Fehler: Es wurde leider keine Kamera gefunden.";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error =
            "Fehler: Ihre Browser ist veraltet. Bitte führen sie ein Update durch.";
        }
      }
    }
  }
};
</script>

<style scoped>
.qr-code-wrapper {
  margin-bottom: 1em;
  border-radius: 10px;
  overflow: hidden;
  background-color: #efefef;
}
.back-button {
  display: block;
  padding: 1em 0 0 1em;
  color: rgb(39, 117, 235);
}
.error {
  color: red;
}

.qrcode-stream__camera,
.qrcode-stream__pause-frame {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background-size: cover;
  max-width: inherit !important;
  max-height: inherit !important;
}
.qrcode-stream__inner-wrapper {
  position: inherit !important;
  max-width: inherit !important;
  max-height: inherit !important;
  z-index: inherit !important;
}
</style>