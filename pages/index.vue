<template>
  <div>
    <div v-if="$auth.loggedIn">
      <NuxtLink to="/admin">Admin</NuxtLink>
      <button @click="$auth.logout()">Salir</button>
    </div>
    <div v-else>
      <div>
        <NuxtLink to="/registro">Registro</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
      </div>
    </div>
    <h1>Home</h1>
  </div>
</template>