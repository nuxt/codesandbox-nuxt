<template>
  <input
    class="outline-none border rounded border-gray-200 h-10 px-2"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>


<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>