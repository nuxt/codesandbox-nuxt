<template>
  <b-form-group label="Message">
    <b-form-radio-group
      id="radio"
      class="bg-light p-2 top-form"
      v-model="commitType"
      :options="type.options"
    />
    <ValidationProvider v-slot="{ errors }" rules="required" name="question">
      <b-form-textarea
        id="text"
        placeholder="Please enter your questions."
        rows="6"
        debounce="500"
        v-model="commitText"
        class="bottom-form"
      />
    </ValidationProvider>
  </b-form-group>
</template>

<script>
export default {
  data: function() {
    return {
      type: {
        selected: 1,
        options: [{ text: "How to", value: 1 }, { text: "Others ?", value: 2 }]
      },
      text: ""
    };
  },
  computed: {
    commitType: {
      get: function() {
        return this.type.selected;
      },
      set: function(value) {
        this.type.selected = value;
        this.commitText = this.text;
      }
    },
    commitText: {
      get: function() {
        return this.text;
      },
      set: function(value) {
        const options = this.type.options;
        const selected = this.type.selected;
        const type = options.find(item => item.value === selected);
        this.text = value;
        this.$emit("input", {
          type: type.text,
          text: value
        });
      }
    }
  }
};
</script>

<style scoped>
.top-form {
  border-radius: 0.25rem;
  border-bottom-left-radius: 0rem;
  border-bottom-right-radius: 0rem;
  border: 1px solid #ced4da;
  border-bottom: none;
}
.bottom-form {
  border-top-left-radius: 0rem;
  border-top-right-radius: 0rem;
}
</style>
