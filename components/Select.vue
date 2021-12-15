<template>
  <select
    class="outline-none border rounded border-gray-200 h-10 px-2"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
    <option v-for="option in options" :key="option.id" v-bind:value="option.id">
      {{ option.title }}
    </option>
  </select>
</template>


<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>