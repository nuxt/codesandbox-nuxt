<template>
  <div class="container">
    <form @submit="search">
      <input v-model="searchedWord" />
    </form>

    <div v-if="wordNotFound">Word not found</div>

    <div v-if="word">
      <header>
        <h1>{{ word.word }}</h1>

        <div
          class="pronunciation"
          v-for="phonetic in word.phonetics"
          :key="phonetic.text"
        >
          <span class="pronunciation-text">{{ phonetic.text }}</span>
          <button @click="playAudio" class="play-button">
            <div class="sr-hidden">Listen</div>
          </button>
          <audio :src="phonetic.audio" ref="phonetics" />
        </div>
      </header>

      <ul class="word-meanings">
        <li
          v-for="(meaning, meaningIndex) in word.meanings"
          :key="meaning.partOfSpeech"
        >
          <button
            @click="setCurrentMeaning(meaningIndex)"
            class="set-meaning-button"
            :class="meaningIndex === currentMeaning ? 'current' : ''"
          >
            {{ meaning.partOfSpeech }}
          </button>
        </li>
      </ul>

      <ol class="word-definitions">
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

          <section class="synonyms">
            <h2>Synonyms</h2>
            <ul v-if="definition.synonyms">
              <li v-for="synonym in definition.synonyms" :key="synonym">
                {{ synonym }}
              </li>
            </ul>
          </section>
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
  text-align: center;
}

header {
  padding: clamp(1rem, 8vh, 5rem);
  border-radius: 2rem 2rem 0 0;
  background-color: hsl(59deg 99% 51%);
  color: hsl(0deg 0% 28%);
}

h1 {
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 700;
  text-transform: capitalize;
}

.pronunciation {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pronunciation-text {
  line-height: 1.5rem;
  padding: 0.5rem;
}

.play-button {
  border: none;
  margin-left: 0.125rem;
  padding: 0.5rem;
  background: none;
  line-height: 1.5rem;
  transition: background 0.25s ease-in-out;
}

.play-button:hover {
  background: rgb(0, 0, 0, 0.15);
}
.play-button:focus {
  outline: 0;
  box-shadow: 0 0 0.0625rem hsl(0deg 0% 0%);
}

.play-button:before {
  content: "\e050";
  font-family: "Material Icons";
}

.word-meanings {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  border-bottom: 0.0625rem solid hsl(0deg 0% 96%);
}
.word-meanings li {
  flex-grow: 1;
}
.word-meanings button {
  padding: 1rem 0;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  background-color: transparent;
  color: hsl(213deg 11% 81%);
  text-transform: uppercase;
}
.word-meanings button.current {
  color: hsl(0deg 0% 21%);
}

.word-definitions {
  font-family: "Newsreader", serif;
}

p {
  margin-top: 20px;
}

.sr-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
