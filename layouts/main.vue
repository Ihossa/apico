<template>
  <div>
    <MainHeader
      :isShowFilter="this.$router.history.current.name === 'PostList'"
    />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>
<script>
import MainHeader from "@/components/main/MainHeader";

export default {
  components: {
    MainHeader,
  },
};
</script>
<style lang="scss" scoped>
.content {
  background: #f2f2f2;
}
</style>