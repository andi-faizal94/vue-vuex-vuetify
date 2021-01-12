<template>
  <div class="container">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1>Register</h1>
          </v-card-title>
          <v-card class="form">
            <v-form>
              <v-text-field label="Name" v-model="user.name">Name</v-text-field>
              <v-text-field label="Alamat" v-model="user.alamat">Alamat</v-text-field>
              <v-select :items="item" label="program" v-model="user.program">Program</v-select>
              <v-text-field label="Status" v-model="user.status">status</v-text-field>
              <v-btn @click="handleSubmit">submit</v-btn>
            </v-form>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  data: () => {
    return {
      user: {
        name: "",
        alamat: "",
        program: "",
        status: false
      },
      item: ["frontend", "backend", "mobile"]
    };
  },
  methods: {
    handleSubmit() {
      // this.$store.dispatch('getUser')

      this.$store.commit("getUser", this.user);
      // console.log(this.$store.state.user);
      alert("yeay anda berhasil ");

      if (this.user.program === "frontend") {
        this.$router.push("frontend");
      } else if (this.user.program === "backend") {
        this.$router.push("backend");
      } else {
        this.$router.push("mobile");
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: block;
  text-align: center;
}
h1 {
  display: block;
  text-align: center;
}
</style>