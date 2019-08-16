<template>
  <div class="dice">
    <div class="shadow"></div>
    <div class="face top">
      <div class="point pt_11"></div>
    </div>
    <div class="face left">
      <div class="point pt_21"></div>
      <div class="point pt_22"></div>
    </div>
    <div class="face right">
      <div class="point pt_31"></div>
      <div class="point pt_32"></div>
      <div class="point pt_33"></div>
    </div>
  </div>
</template>

<style scoped>
.dice {
  position: relative;
}

.face {
  position: absolute;
  top: 0;
  left: 0;
  width: 120px;
  height: 120px;
  background: white;
  border: 10px solid black;
  border-radius: 2px;
}

.top {
  left: -60px;
  top: -116px;
  transform: rotate(-30deg) skew(30deg) scaleY(0.86);
}

.left {
  left: -111px;
  top: -27px;
  transform: rotate(30deg) skew(30deg) scaleY(0.86);
  background-color: grey;
}

.right {
  left: -9px;
  top: -27px;
  transform: rotate(-30deg) skew(-30deg) scaleY(0.86);
}

.point {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: black;
  transform: translate(-15px, -15px);
}

.pt_11 {
  top: 50%;
  left: 50%;
}

.pt_21 {
  top: 25%;
  left: 25%;
}

.pt_22 {
  top: 75%;
  left: 75%;
}

.pt_31 {
  top: 25%;
  left: 25%;
}

.pt_32 {
  top: 50%;
  left: 50%;
}

.pt_33 {
  top: 75%;
  left: 75%;
}

.shadow {
  position: absolute;
  left: -190px;
  top: 25px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  width: 126px;
  height: 175px;
  transform: rotate(39deg) skew(-30deg) scaleY(0.86);
}
</style>