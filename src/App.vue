<script setup>
  import login from "./state/login";

  import MainPage from "./pages/MainPage.vue";
  import Loading from "./components/Loading.vue";
</script>

<script>
  export default {
    data() {
      return {
        fullHeight: { height: '100vh' }
      }
    }
  }
</script>

<template>
  <MainPage :style="fullHeight" v-if="login.state.isLoggedIn"/>
  <Loading :style="fullHeight" v-else/>
</template>

<style>
body {
 height: 100vh;
}
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
