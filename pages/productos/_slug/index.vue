<template>
  <div>
    <NuxtLink
      :to="{ name: '-empresa', params: { empresa: marca.empresa.slug } }"
      v-text="marca.empresa.nombreComercial"
    />
  </div>
</template>