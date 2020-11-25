<template>
  <v-app>
    <Sidebar></Sidebar>
    <Topbar></Topbar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Global/Sidebar";
import Topbar from "@/components/Global/Topbar";
import Footer from "@/components/Global/Footer";

export default {
  components: {
    Sidebar,
    Topbar,
    Footer
  }
};
</script>
