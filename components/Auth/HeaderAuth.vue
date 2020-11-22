<template>
  <header>
    <v-container class="header-content">
      <div class="header-content_logo">
        <Logo :colorFillText="logoColor" :colorFillTriangle="triangleColor" />
      </div>
      <div class="header-content_nav">
        <v-btn
          :height="31"
          class="header-content_submit"
          color="#349A89"
          @click="showAddForm"
        >
          {{ btnText }}
        </v-btn>
        <span
          :class="
            likeColor === '#2E2E2E'
              ? 'header-content_login'
              : 'header-content_login-auth'
          "
        >
          LOGIN
        </span>
        <IconLike :colorFill="likeColor" />
      </div>
    </v-container>
  </header>
</template>
<script>
import Logo from "@/components/Logofull";
import IconLike from "@/components/IconLike";
import Button from "@/components/Button";
export default {
  props: {
    logoColor: { type: String, default: "#262525" },
    triangleColor: { type: String, default: "#349A89" },
    likeColor: { type: String, default: "#2E2E2E" },
    btnText: { type: String, default: "SELL" },
  },
  components: {
    Logo,
    IconLike,
    Button,
  },
  methods: {
    showAddForm() {
      this.$router.push("AddProduct");
    },
  },
};
</script>
<style lang="scss" scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_login {
    margin: 0 33px 0 39px;
    &-auth {
      margin: 0 33px 0 39px;
      color: #ffffff;
    }
  }
  &_submit {
    color: #ffffff;
    box-sizing: inherit;
    border-radius: 4px;
    width: 131px;
  }
  &_nav {
    display: flex;
    align-items: center;
    margin-right: 12px;
  }
}
</style>