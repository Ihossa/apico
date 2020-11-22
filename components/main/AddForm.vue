<template>
  <div class="add-form">
    <h1 class="add-form_header">Add product</h1>
    <span>Title</span>
    <div>
      <v-text-field
        class="add-form_field"
        required
        background-color="#F9FAFB"
        outlined
      ></v-text-field>
    </div>
    <span>Location</span>
    <div>
      <v-text-field
        class="add-form_field"
        background-color="#F9FAFB"
        outlined
      ></v-text-field>
    </div>
    <span>Location</span>
    <div>
      <v-textarea
        class="add-form_field-area"
        background-color="#F9FAFB"
        outlined
        name="input-7-4"
      ></v-textarea>
    </div>
    <span>Photos</span>
    <div class="add-form_photos">
      <inputFile />
    </div>
    <span>Price</span>
    <v-text-field
      class="add-form_field"
      background-color="#F9FAFB"
      outlined
    ></v-text-field>
    <div class="add-form_block-submit">
      <v-btn class="add-form_submit" height="58" color="#349A89">
        Submit
      </v-btn>
    </div>
  </div>
</template>
<script>
import inputFile from "@/components/main/inputFile";
export default {
  components: {
    inputFile,
  },
};
</script>
<style lang="scss" scoped>
.add-form {
  max-width: 664px;
  margin: auto;
  padding: 36px 0 32px;
  &_header {
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    color: #282828;
    margin-bottom: 24px;
  }
  &_field {
    height: 58px !important;
  }
  &_photos,
  &_field {
    margin-bottom: 24px;
  }
  &_block-submit {
    text-align: center;
    max-width: 337px;
    margin: auto;
  }
  &_submit {
    color: #ffffff;
    box-sizing: inherit;
    border-radius: 5px;
    width: 100%;
  }
  .v-text-field__details {
    display: none;
  }
}
</style>