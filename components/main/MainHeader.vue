<template>
  <header class="main-header">
    <HeaderAuth logoColor="#FFFFFF" likeColor="#FFFFFF" btnText="+ Add" />
    <v-container class="main-header_nav" v-if="isShowFilter">
      <v-text-field
        solo
        label="Solo"
        placeholder="Search products by name"
        prepend-inner-icon="mdi-magnify"
        class="main-header_search"
      ></v-text-field>
      <v-text-field
        solo
        label="Solo"
        placeholder="Location"
        prepend-inner-icon="mdi-map-marker"
        class="main-header_locate"
      ></v-text-field>
      <v-btn
        class="main-header_button-search"
        height="50px"
        width="176px"
        color="#3E3961"
      >
        SEARCH
      </v-btn>
    </v-container>
  </header>
</template>
<script>
import HeaderAuth from "@/components/Auth/HeaderAuth";

export default {
  props: {
    isShowFilter: { type: Boolean, default: false },
  },
  components: {
    HeaderAuth,
  },
};
</script>
<style lang="scss" scoped>
.main-header {
  background: linear-gradient(180deg, #090810 0%, #171236 100%);
  &_nav {
    display: flex;
    justify-content: center;
  }
  &_search {
    max-width: 467px;
    height: 50px;
  }
  &_locate {
    max-width: 198px;
    height: 50px;
    margin: 0 7px;
  }
  &_button-search {
    color: #ffffff;
  }
}
</style>
