<template>
  <div>
    <h1 style="text-align:center">Mobile</h1>

    <!-- showUser mengambil dari computed -->
    <p v-for="u in showU" :key="u.name">
      {{u.name}}
      <br />
      {{u.alamat}}
      <br />
      {{u.program}}
      <br />
      {{u.status}}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    showU() {
      return this.$store.state.user.filter(user => user.program === "mobile");
    }
  }
};
</script>