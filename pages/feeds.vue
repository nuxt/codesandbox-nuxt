<template>
  <div class="container">
    <div class="tit">BiZUp</div>
    <div class="menu">
      <nav>
        <nuxt-link to="/profile" class="head">My Profile</nuxt-link>
        <nuxt-link to="/chat" class="head">My Conversations</nuxt-link>
        <nuxt-link to="/" class="head">Logout</nuxt-link>
      </nav>
    </div>
    <h4>Feed</h4>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  min-height: 100vh;
  min-width: 100%;
  margin: 0;
  background-image: none;
  background-color: white;
}

.head {
  top: 0;
  left: 2px;
  margin: 0;
  color: #33499A;
  text-decoration: none;
  font-weight: bold;
  justify-content: space-between;
  padding: 4px;
}
.head:hover {
  text-decoration: underline;
}
.menu {
  position: absolute;
  top: 20px;
  right: 10px;
}
.tit {
  position: absolute;
  top: 20px;
  left: 10px;
  color: #33499A;
  font-weight: bold;
}
</style>
