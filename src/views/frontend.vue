<template>
  <nav>
    <v-container>
      <div>
        <h1>Frontend</h1>
        <p v-for="u in User" :key="u.name">
          nama :{{u.name}}
          <br />
          alamat :{{u.alamat}}
          <br />
          program :{{u.program}}
          <br />
          status :{{u.status}}
        </p>
      </div>
    </v-container>
  </nav>
</template> 

<script>
export default {
  computed: {
    User() {
      return this.$store.state.user.filter(user => user.program === "frontend");
    }
  }
};
</script>



<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
p {
  display: flex;
  justify-content: center;
}
</style>