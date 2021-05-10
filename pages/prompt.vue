<template>
  <div class="container">
    <div>
      <h1>{{ word.word }}</h1>

      <div v-for="phonetic in word.phonetics" :key="phonetic.text">
        <p>{{ phonetic.text }}</p>
        <button>Listen {{ phonetic.audio }}</button>
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
import * as promptData from "../static/payload-prompt.json";

export default {
  data() {
    return {
      word: promptData.default[0],
      currentMeaning: 0,
    };
  },
  methods: {
    setCurrentMeaning(which) {
      this.currentMeaning = which;
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
