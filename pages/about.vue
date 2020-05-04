<template>
  <div class="p-4">
    <h1 class="text-5xl">About page</h1>
    <p>
      <n-link to="/" class="text-blue-500 underline">Home page</n-link>
    </p>
    <h3 class="text-3xl mt-2">Tailwind config:</h3>
    <pre class="bg-gray-200 p-3 rounded">{{ tailwindConfig }}</pre>
  </div>
</template>

<script>
import tailwindConfig from "~tailwind.config";

export default {
  data() {
    return {
      tailwindConfig
    };
  }
};
</script>