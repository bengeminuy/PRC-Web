<template>
  <div id="app">
    <nav id="navbar">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <img src="./assets/prc-logo.png" alt="" class="responsive-img">
          <span>Red Cross PH</span>
        </a>
        <div class="spacer"></div>
        <div class="menu">
          <form class="col s8 right">
            <div class="row">
              <div class="input-field col s5">
                <i class="material-icons prefix">account_circle</i>
                <input id="username" type="text">
                <label for="username">Username</label>
              </div>
              <div class="input-field col s5">
                <i class="material-icons prefix">vpn_key</i>
                <input id="password" type="password">
                <label for="password">Password</label>
              </div>
              <div class="col s2">
                <a class="waves-effect waves-light btn">Login</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html, body {
  margin: 0;
}
nav {
  color: initial;
}
.nav-wrapper {
  display: flex;
  align-items: center;
}
.nav-wrapper .brand-logo {
  flex-grow: 0;
  display: flex;
  align-items: center;
  position: initial;
  line-height: initial;
  color: #000;
}
.row {
  margin-bottom: 0;
}
#navbar {
  position: fixed;
  top: 5%;
  left: 10%;
  right: 10%;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  /* box-shadow: none; */
  width: auto;
  height: auto;
  padding: 5px 16px;
  box-sizing: content-box;
}
.spacer {
  flex: 2 auto;
}
.brand-logo img {
  width: 7.5vw;
  max-width: 80px;
}
.brand-logo span {
  margin-left: 10px;
}
.input-field> label {
  color: rgba(0, 0, 0, 0.87);
}
</style>
