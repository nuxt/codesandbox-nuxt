<template>
  <b-form-group label="Phone" label-for="phone">
    <b-input-group>
      <template v-slot:prepend>
        <ValidationProvider vid="phoneCountry" v-slot="{ errors }">
          <b-form-select v-model="commitCountry" class="left-form" :options="country.options"/>
        </ValidationProvider>
      </template>
      <ValidationProvider
        v-slot="{ errors }"
        :rules="{phone_jp: [ '@phoneCountry', commitNumber ]}"
        name="Phone"
      >
        <b-form-input id="phone" type="text" v-model="commitNumber" class="right-form"/>
        <b-form-invalid-feedback :state="!errors.length">
          <p v-for="(item, key) in errors" v-text="item" :key="key"/>
        </b-form-invalid-feedback>
      </ValidationProvider>
    </b-input-group>
  </b-form-group>
</template>

<script>
export default {
  data: function() {
    return {
      country: {
        selected: "jp",
        options: [
          { text: "Japan", value: "jp" },
          { text: "Other", value: "other" }
        ]
      },
      number: ""
    };
  },
  computed: {
    commitCountry: {
      get: function() {
        return this.country.selected;
      },
      set: function(value) {
        this.country.selected = value;
        this.commitNumber = this.number;
      }
    },
    commitNumber: {
      get: function() {
        return this.number;
      },
      set: function(value) {
        const options = this.country.options;
        const selected = this.country.selected;
        const country = options.find(item => item.value === selected);
        this.number = value;
        this.$emit("input", {
          country: country.text,
          number: value
        });
      }
    }
  }
};
</script>

<style scoped>
.left-form {
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
}
.right-form {
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
}
</style>
