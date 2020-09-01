<template>
  <b-form-group label="Email" label-for="email">
    <ValidationProvider v-slot="{ errors }" rules="required" name="Email">
      <b-form-input id="email" type="text" v-model="commit"/>
      <b-form-invalid-feedback :state="!errors.length">
        <p v-for="(item, key) in errors" v-text="item" :key="key"/>
      </b-form-invalid-feedback>
    </ValidationProvider>
  </b-form-group>
</template>

<script>
export default {
  data: function() {
    return {
      email: ""
    };
  },
  computed: {
    commit: {
      get: function() {
        return this.email;
      },
      set: function(value) {
        this.email = value;
        this.$emit("input", value);
      }
    }
  }
};
</script>

