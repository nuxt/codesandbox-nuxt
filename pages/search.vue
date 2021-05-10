<template>
  <div class="container">
    <form @submit="search">
      <input v-model="searchedWord" />
    </form>

    <div v-if="wordNotFound">Word not found</div>

    <div v-if="word">
      <h1>{{ word.word }}</h1>

      <div v-for="phonetic in word.phonetics" :key="phonetic.text">
        <p>{{ phonetic.text }}</p>
        <button @click="playAudio">Listen</button>
        <audio :src="phonetic.audio" ref="phonetics" />
      </div>

      <ul>
        <li
          v-for="(meaning, meaningIndex) in word.meanings"
          :key="meaning.partOfSpeech"
        >
          <input
            type="button"
            :value="meaning.partOfSpeech"
            @click="setCurrentMeaning(meaningIndex)"
          />
        </li>
      </ul>

      <ol>
        <li
          v-for="definition in word.meanings[currentMeaning].definitions"
          :key="definition.definition"
        >
          <div class="definition">
            {{ definition.definition }}
          </div>
          <div v-if="definition.example" class="example">
            {{ definition.example }}
          </div>
          <ul v-if="definition.synonyms">
            <li v-for="synonym in definition.synonyms" :key="synonym">
              {{ synonym }}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
const fetchUrl = (word) =>
  `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;

export default {
  data() {
    return {
      searchedWord: "",
      word: null,
      currentMeaning: 0,
      wordNotFound: false,
    };
  },
  methods: {
    setCurrentMeaning(which) {
      this.currentMeaning = which;
    },
    search(e) {
      e.preventDefault();

      fetch(fetchUrl(this.searchedWord))
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("errored out");
        })
        .then((data) => {
          // TODO: figure out why there are multiple on some payloads
          this.word = data[0];
          this.wordNotFound = false;
        })
        .catch((e) => {
          console.log(e);
          this.wordNotFound = true;
        });
    },
    playAudio() {
      console.log(this.$refs.phonetics[0]);
      this.$refs.phonetics[0].play();
    },
  },
  asyncData() {
    return {
      name: process.server ? "server" : "client",
    };
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #00C48D;
}
p {
  margin-top: 20px;
}
</style>
