<template>
  <div>
    <h1>Índice de productos</h1>
    <ul>
      <li
        v-for="producto in productos"
        :key="producto.id"
      >
        <NuxtLink
          :to="{ name: 'productos-slug', params: { id: producto.id, slug: producto.slug } }"
          v-text="producto.slug"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductoIndice',
  async asyncData({ $axios }) {
    const respuesta = await $axios.$get('https://2h2md.sse.codesandbox.io/productos/productos.json')

    return { productos: respuesta.productos }
  },
  data() {
    return {
      productos: [],
    }
  },
}
</script>
