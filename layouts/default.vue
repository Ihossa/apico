<template>
  <div class="content">
    <Header :triangleColor="logoColor" />
    <v-container>
      <nuxt />
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Auth/HeaderAuth";

export default {
  data() {
    return {
      logoColor:
        this.$router.history.current.name === "Register"
          ? "#FF9900"
          : "#349A89",
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
.content {
  position: absolute;
  background: #f2f2f2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
