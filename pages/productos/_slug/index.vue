<template>
  <div>
    <h1>Producto {{ producto.slug }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductoMostrar',
  async asyncData({ params, $axios }) {
    const respuesta = await $axios.$get(`productos/${params.slug}`)

    return { producto: respuesta.data }
  },
  data() {
    return {
      producto: null,
    }
  },
}
</script>
