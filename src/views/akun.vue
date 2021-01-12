<template>
  <div class="container">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <h1>Login Admin</h1>
          </v-card-title>
          <v-card class="form">
            <v-form>
              <v-text-field label="Name" v-model="akun.name">Name</v-text-field>
              <v-text-field label="Alamat" v-model="akun.password">password</v-text-field>
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
      akun: {
        name: "",
        password: "",
        noHandphone: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$store.commit("getAkun", this.akun);
      alert("selamat akun anda berhasil terdaftar");
    }
  }
};
</script>