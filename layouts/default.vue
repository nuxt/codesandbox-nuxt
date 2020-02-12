<template>
  <div>
    <div id="logo">
      <img src="~/assets/Logo-gross.png">
    </div>
    <div id="navbar">
      <NLink to="/" class="button--orange">Home</NLink>
      <NLink to="/leistung" class="button--orange">Leistung</NLink>
      <NLink to="/referenzen" class="button--orange">Referenzen</NLink>
      <NLink to="/preise" class="button--orange">Preise</NLink>
    </div>
    <div id="content-sidebar-merge">
      <div id="page-content">
        <Nuxt/>
      </div>
      <div id="always-sidebar">
        <aside id="sidebar-box">
          <h3>Kontakt</h3>
          <img src="~/assets/Logo-kontakt.png">
          <p>André Zießnitz
            <br>Kuf steiner Straße 20
            <br>14612 Falkensee
          </p>
          <p>Telefon: 03322 | 289 283</p>
          <p>Handy: 0173 | 89 65 423</p>
          <p>Telefax: 03322 | 289 282</p>
          <p>E-Mail: info@Hot-Systems.de</p>
        </aside>
      </div>
    </div>
    <footer>
      <p>Inhaber: André Zießnitz</p>
      <p>UStNr.: 051|292|04275 Finanzamt Nauen</p>
      <p>Technischer Verantwortlicher: André Zießnitz</p>
      <p>Inhaltlich Verantwortlicher gemäß</p>
      <p>§ 6 MDStV: André Zießnitz</p>
      <p>AGBs</p>
    </footer>
  </div>
</template>
 
<style>
#content-sidebar-merge {
  background-color: white;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}

#page-content {
  flex: 5;
}

#always-sidebar {
  flex: 2;
}

#sidebar-box {
  margin: 10px;
  height: 100%;
  border: 1px solid lightgray;more
  padding: 10px;
}

#logo {
  background-color: orange;
}

#logo > img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  width: 100%;
  padding: 20px;
}

#navbar {
  background-color: orangered;
  padding: 10px 0px;
  height: 50px;
  text-align: center;
}

footer {
  padding-top: 30px;
  text-align: center;
  background-color: black;
}

body {
  background-color: lightgray;
}

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
.container_text {
  display: float;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.container {
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button--orange {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid rgb(209, 118, 14);
  color: rgb(209, 118, 14);
  text-decoration: none;
  padding: 5px 15px;
  display: inline-flex;
  align-self: center;
}

.button--orange:hover {
  color: #fff;
  background-color: rgb(209, 118, 14);
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #2E495E;
  color: #2E495E;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #2E495E;
}
</style>
