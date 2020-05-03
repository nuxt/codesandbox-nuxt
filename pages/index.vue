<template>
  <div>
    <v-row class="red py-12 px-6">
      <v-col class="pa-4">
        <v-img
          src="https://www.komatsuamerica.com/-/media/equipment-search/komatsu-images/dozers/large/d85-18_wh_1.png"
          max-height="300"
          contain
        ></v-img>
      </v-col>
      <v-col class="white--text pa-4">
        <h1 class="display-3">We Live and Breath</h1>
        <p class="display-4 yellow--text">CREATIVITY</p>
        <v-btn color="black" dark large>View Projects</v-btn>
      </v-col>
    </v-row>
    <v-container class="my-10">
      <v-row class="mt-4 mb-12">
        <v-col class="pr-12">
          <h2
            class="headline font-weight-bold"
          >Kami adalah pionir desain proyek microcontroller dan elektronika otomasi. Komitmen kami adalah memberi SOLUSI.</h2>
          <br>
          <p>Anda adalah hobbyist, perusahaan, wiraswastawan, pelajar, operator atau kru maintenance yang membutuhkan solusi sistem offline atau online menggunakan microcontoller, sistem elektronik dan web control & monitor?</p>
          <p>Anda berada di tempat dan waktu yang tepat!</p>
        </v-col>
        <v-col>
          <v-row>
            <v-col md="4">
              <v-img src="/images/ann01.jpg"></v-img>
              <v-spacer></v-spacer>
            </v-col>
            <v-col>
              <h3 class="red--text">Desain System</h3>
              <p
                class="body-2"
              >Sistem kontrol dan monitor dengan teknologi microcontroller dan Internet of Things.</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="4">
              <v-img src="/images/ann02.jpg"></v-img>
            </v-col>
            <v-col>
              <h3 class="red--text">Training</h3>
              <p
                class="body-2"
              >Dengan mengembangkan pengetahuan dan skill anda, kami mentransfer kompetensi untuk anda agar anda independen dalam pengembangan sistem.</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="4">
              <v-img src="/images/ann03.jpg"></v-img>
            </v-col>
            <v-col>
              <h3 class="red--text">Consulting</h3>
              <p
                class="body-2"
              >Sebagai konsultan, kontak kami jika anda mengalami kesulitan atau membutuhkan partner dalam pengembangan sitem dan solusi.</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <h2>Komitmen Kami</h2>
      <v-row>
        <v-col md="4">
          <v-img src="https://www.msbiblog.com/wp-content/uploads/2017/07/automation-diagram.png"></v-img>
        </v-col>
        <v-col md="8" class="pa-6">
          <p>Dengan latar belakang pengalaman kami yang luas dalam membantu client untuk meningkatkan efisiensi dan efektifitas proses produksi dan pelayanan jasa, kami terbawa untuk menjadi solution provider yang matang dalam bidang desain dan pelatihan sistem elektronik dan otomasi.</p>
          <p>Tim kami yang solid dan organisasi yang efisien mendukung keberhasilan dalam menghasilkan produk dan layanan jasa kepada client. Peningkatan kompetensi dan kematangan kami juga tidaklah lepas dari kontribusi dari berbagai permasalahan dan kebutuhan improvement di area kerja para client kami.</p>
          <p>Sebagai penyedia layanan jasa dan produk, kami mengucapkan terima kasih kepada anda untuk bekerja sama dengan kami untuk membawa kita berkembang di masa kini dan mendatang.</p>
        </v-col>
      </v-row>
    </v-container>
    <Black></Black>
  </div>
</template>

<script>
import Black from "../components/BlackComponent";

export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  layout: "default",
  components: {
    Black
  }
};
</script>

<style scoped>
</style>
