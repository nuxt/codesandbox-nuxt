<template>
  <div class="Login__Wrapper">
    <div class="Login__Container">
      <div class="Login__Icon">
        <img
          class="Login__Icon__Img"
          src="/kidsloop_min_logo.svg"
          alt="KidsLoop Logo"
        />
      </div>
      <h2 class="Sign_In__Header">Sign In</h2>
      <form>
        <input
          class="Login__Email"
          type="text"
          placeholder="Email or Phone *"
        />
        <input
          class="Login__Password"
          type="password"
          placeholder="Password *"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Login__Email,
.Login__Password {
  padding: 3px;
  border: 1px solid grey;
  border-radius: 12px;
  height: 35px;
}
.Login__Password {
  margin: 10px 0;
}

.Login__Container {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  height: 50%;
  border: 1px solid black;
  border-radius: 14px;
  filter: drop-shadow(0px, 0px, 20px, 5px, #000, 10%);
}
.Login__Icon__Img {
  width: 70px;
  height: 70px;
}
</style>