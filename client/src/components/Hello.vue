<template>
  <div class="container-fluid">
    <div class="empty-state-message">
      <h1>Welcome to Drawbridge.</h1>
      <p>Drawbridge provides account management, requests, and other features for the Container Automation Solutions Lab (CASL).</p>
      <p>To learn more, visit the <a target="_blank" href="https://mojo.redhat.com/groups/paas-community-of-practice/projects/container-automation-solutions-lab">CASL page on Mojo.</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js + PatternFly App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty-state-message {
  margin: 60px auto;
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
}

</style>
