<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import navbar from "@/components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar
  }
};
</script>