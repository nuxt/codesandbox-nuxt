<template>
  <div class="container">
    <nav class="nav">
      <a href="/">
        <img src="~/assets/white_logo.png" width="100" alt>
      </a>
      <ul class="nav__list">
        <li class="nav__item">Inicio</li>
        <li class="nav__item">Equipo</li>
        <li class="nav__item">Diseño web</li>
        <li class="nav__item">Apps moviles</li>
        <li class="nav__item">Marketing online</li>
        <li class="nav__item">Blog</li>
        <li class="nav__item">Pedir presupuesto</li>
      </ul>
    </nav>
    <Nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2E495E;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  position: relative;
}
.nav {
  position: absolute;
  top: 0;
  padding: 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.nav__list {
  display: flex;
  padding: 0;
  justify-content: flex-end;
  list-style-type: none;
}

.nav__item {
  margin-right: 25px;
  color: white;
}
</style>
