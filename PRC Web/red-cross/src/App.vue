<template>
  <div id="app">
    <nav id="navbar">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          <img src="./assets/prc-logo.png" alt="" class="responsive-img">
        </a>
        <div class="row">
          <form class="col s8 right">
            <div class="row">
              <div class="input-field col s5">
                <i class="material-icons prefix">account_circle</i>
                <input id="username" type="text">
                <!-- <label for="username">Username</label> -->
              </div>
              <div class="input-field col s5">
                <i class="material-icons prefix">vpn_key</i>
                <input id="password" type="password">
                <!-- <label for="password">Password</label> -->
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
  height: 100%;
}
nav {
  color: initial;
}
#navbar {
    position: fixed;
    top: 5%;
    left: 10%;
    right: 10%;
    z-index: 10;
    background-color: #fff;
    /* box-shadow: none; */
    width: auto;
}
.brand-logo {
    width: 7.5%;
}
</style>
