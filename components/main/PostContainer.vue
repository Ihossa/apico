<template>
  <div class="posts">
    <v-card class="posts_post" v-for="item in items" :key="item.message">
      <v-img
        src="https://picsum.photos/350/165?random"
        height="148"
        class="grey darken-4"
      ></v-img>
      <div class="posts_content">
        <div class="posts_title">Item name</div>
        <div class="posts_btn">
          <v-btn class="posts_like" color="#FFFFFF" dark fab>
            <v-icon color="#B7B7B7">mdi-heart-outline</v-icon>
          </v-btn>
        </div>
      </div>

      <div class="posts_price">$575.09</div>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>
<style lang="scss" scoped>
.posts {
  text-align: center;
  max-width: 861px;
  display: block;
  &_post {
    display: inline-block;
    text-align: left;
    padding: 3px;
    margin: 0 3px 10px;
    max-width: 209px;
    height: 212px;
  }
  &_content {
    display: flex;
    justify-content: space-between;
  }
  &_btn {
    margin-right: 7px;
    transform: translateY(-50%);
  }
  &_like {
    height: 30px;
    width: 30px;
  }
  &_title {
    font-size: 15px;
    line-height: 17px;
    margin: 6px 12px 7px;
    color: #373738;
  }
  &_price {
    font-size: 18px;
    line-height: 21px;
    margin-left: 12px;
    color: #101010;
  }
}
</style>