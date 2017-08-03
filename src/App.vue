<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav';

export default {
  name: 'app',
  components: {
    'main-nav': MainNav,
  },
};
</script>

<style>
</style>
