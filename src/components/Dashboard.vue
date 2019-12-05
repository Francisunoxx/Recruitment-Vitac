<template>
  <div class="divDashboardContainer">
    <img src="../assets/Login.png" />
    <div class="divDashboardMessage">
      <h1>Welcome!</h1>
    </div>
    <div class="divDashboardIcon">
      <div class="divIconContainer">
        <img src="../assets/User.svg" v-on:click="redirectToApplicant()" />
        <h2>Applicant</h2>
      </div>
      <div class="divIconContainer">
        <img src="../assets/Admin.svg" />
        <h2>Admin</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  methods: {
    redirectToApplicant() {
      this.$router.push("applicant");
    }
  }
};
</script>

<style scoped src="../css/Dashboard.css" />
