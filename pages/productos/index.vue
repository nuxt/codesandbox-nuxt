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
    const respuesta = await $axios.$get('https://issjv.sse.codesandbox.io/productos.json')

    return { productos: respuesta.data }
  },
  data() {
    return {
      productos: [],
      productos2: [
        {
          id: 1,
          slug: 'ventiladores',
        },
        {
          id: 2,
          slug: 'micrófonos',
        },
        {
          id: 3,
          slug: 'teléfonos-inalámbricos',
        },
      ]
    }
  },
}
</script>
