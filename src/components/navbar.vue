<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Praxis Academy</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-btn>
          <router-link to="/">Home</router-link>
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn router-link to="/register">Register</v-btn>
      <v-btn router-link to="/admin">Admin</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Frontend",
          icon: "mdi-label",
          route: "/frontend"
        },
        { title: "Backend", icon: "mdi-label", route: "/backend" },
        { title: "Mobile", icon: "mdi-label", route: "/mobile" }
      ],
      right: null,
      drawer: false
    };
  }
};
</script>



// step by step buat membuat navbar
// buat toolbarnya terlebih dahulu
// buat navbar
// jangan lupa kasih app disetiap toolbar dan drawernya
// buat state dengan nama drawer
// buat v-model yang mengacu ke state drawer
// di bagian app-navbar-icon bikin @click="drawer = !drawer" 
// berikan nav di awal setelah template dan akhir sebelum template
// menganti toolbar menjadi app-bar supaya drawernya bisa dihilangkan