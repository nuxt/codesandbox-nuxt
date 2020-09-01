<template>
  <FullsizeBox class="p-2">
    <b-container class="intro-image text-light" fluid>
      <b-row style="min-height:20%;"></b-row>
      <b-row align-v="center" style="min-height:60%;">
        <b-col cols="12" class="text-center">
          <h1>Hello NUXT JS.</h1>
          <p></p>
        </b-col>
      </b-row>
      <b-row align-h="center" style="min-height:20%;">
        <b-col cols="12" class="text-center">
          <Logo :width="Number(60)" :height="Number(50)"/>
        </b-col>
      </b-row>
    </b-container>
  </FullsizeBox>
</template>

<style>
.intro-image {
  background-image: url("~static/image/abstract-2468874_1920.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}
</style>

