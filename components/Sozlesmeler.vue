<template>
  <div>
    <!-- <h1>Düzenlediğimiz ID: {{$route.params.id}}</h1> -->
    <b-form @submit="postForm">
      <b-form-group label="Sözleşme No" description="Sözleşme Numarası">
        <b-form-input v-model="sozlesme.id" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Sözleşme Adı">
        <b-form-input v-model="sozlesme.sozlesmeAdi" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="İşveren" description="İşveren">
        <b-form-input v-model="sozlesme.isveren" type="text" required placeholder="İşveren"></b-form-input>
      </b-form-group>

      <b-form-group label="Yüklenici" description="Yüklenici">
        <b-form-input v-model="sozlesme.yuklenici" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group label="Müşavir/Mühendis" description="Müşavir/Mühendis">
        <b-form-input v-model="sozlesme.musavir" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Sözleşme Tarihi">
        <b-form-input v-model="sozlesme.tarihler.sozlesme" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Yer Teslim Tarihi">
        <b-form-input v-model="sozlesme.tarihler.yerTeslim" type="text" required></b-form-input>
      </b-form-group>
      <b-form-group label="İşe Başlama Tarihi">
        <b-form-input v-model="sozlesme.tarihler.baslama" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="İş Bitim Tarihi">
        <b-form-input v-model="sozlesme.tarihler.bitis" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Sözleşme Bedeli">
        <b-form-input v-model="sozlesme.maliyet.sozlesmeBedeli" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Teminat Kesintisi">
        <b-form-input v-model="sozlesme.maliyet.teminatKesintiOrani" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Avans">
        <b-form-input v-model="sozlesme.maliyet.avansOrani" type="text" required></b-form-input>
      </b-form-group>

      <b-form-group label="Avans Kesintisi">
        <b-form-input v-model="sozlesme.maliyet.avansKesintiOrani" type="text" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Kaydet</b-button>
    </b-form>
  </div>
</template>


<script>
const axios = require("axios");

export default {
  data() {
    return {
      sozlesme: {
        tarihler: {},
        maliyet: {}
      }
    };
  },
  async mounted() {
    console.log("MERHABA ASYNC DATA");
    const { data } = await axios.get(
      "https://iirvd.sse.codesandbox.io/db/sozlesmeler/1"
    );
    this.sozlesme = data;
  },

  methods: {
    postForm: function(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.sozlesme));

      axios
        .put("https://iirvd.sse.codesandbox.io/db/sozlesmeler/1", {
          ...this.sozlesme
        })
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>
