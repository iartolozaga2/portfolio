<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<style lang="scss">
@import 'assets/styles/all';

.text-mycolor {
  color: #00bfb6;
}

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: $font-inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>
