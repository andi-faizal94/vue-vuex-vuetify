<template>
  <div>
    <h1 style="text-align:center">Backend</h1>

    <p v-for="u in showUser" :key="u.name">
      nama :{{u.name}}
      <br />
      alamat :{{u.alamat}}
      <br />
      program :{{u.program}}
      <br />
      status :{{u.status}}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    showUser() {
      return this.$store.state.user.filter(user => user.program === "backend");
    }
  }
};
</script>