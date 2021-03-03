<template>
  <section>
    <h1>Page 2</h1>
    <p>If you go back to homepage the ad disappears if you come back</p>
    <p>
      An error is raised:
      <i>adsbygoogle.push() error: All ins elements in the...</i>
    </p>
    <br />
    <adsbygoogle />
    <br />
    <NuxtLink to="/"> Go back to homepage</NuxtLink>
  </section>
</template>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
