<template>
  <div>
    <!-- penggunaan index selalu di belakang agar tidak error -->
    <p v-for="(u,index) in ambilNilai" :key="u.name">
      nama :{{u.name}}
      <br />
      alamat :{{u.alamat}}
      <br />
      program :{{u.program}}
      <br />
      status :{{u.status}}
      <v-btn @click="status(u)">Accept</v-btn>
      <v-btn @click="deleted(index)">delete</v-btn>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    ambilNilai() {
      return this.$store.state.user;
    }
  },
  methods: {
    status(u) {
      u.status = !u.status;
    },
    // mengambil mutations fungsi delete
    // sebelum itu di dalam v-for no 3 di atas tambahkan element index sebagai parameter
    // kemudian panggil dengan commit dengan parameter fungsi dan index tersebut
    deleted(index) {
      this.$store.commit("delete", index);
    }
  }
};
</script>