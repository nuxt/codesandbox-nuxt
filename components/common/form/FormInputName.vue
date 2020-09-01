<template>
  <b-form-group label="Name" label-for="name">
    <ValidationProvider v-slot="{ errors }" rules="required" name="Name">
      <b-form-input id="name" type="text" v-model="commit"/>
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
      name: ""
    };
  },
  computed: {
    commit: {
      get: function() {
        return this.name;
      },
      set: function(value) {
        this.name = value;
        this.$emit("input", value);
      }
    }
  }
};
</script>

