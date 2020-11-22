<template>
  <div>
    <v-card class="register" max-width="425">
      <v-form class="register_form" ref="form" v-model="valid" lazy-validation>
        <div>
          <h1 class="register_header">Register</h1>
        </div>
        <span>Email</span>
        <div class="register_inputfield">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Example@gmail.com"
            required
            background-color="#F9FAFB"
            outlined
            validate-on-blur
          ></v-text-field>
        </div>
        <span>Full Name</span>
        <div class="register_inputfield">
          <v-text-field
            validate-on-blur
            :rules="nameRule"
            label="Tony Stark"
            background-color="#F9FAFB"
            outlined
          ></v-text-field>
        </div>
        <span>Password</span>
        <div class="register_inputfield">
          <v-text-field
            validate-on-blur
            background-color="#F9FAFB"
            outlined
            :rules="rulesPassword"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </div>
        <span>Password Again</span>
        <div>
          <v-text-field
            validate-on-blur
            background-color="#F9FAFB"
            outlined
            :rules="rulesConfirmPassword"
            v-model="confirmPassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"
          ></v-text-field>
        </div>
        <v-btn
          height="58"
          class="register_submit"
          color="#349A89"
          @click="validate(email, password)"
        >
          Register
        </v-btn>
      </v-form>
    </v-card>
    <BottomCardAuth />
  </div>
</template>

<script>
import Button from "@/components/Button";
import BottomCardAuth from "@/components/Auth/BottomCardAuth";
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      valid: true,
      show1: false,
      show2: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      email: "",
      nameRule: [
        (v) =>
          (v || "").length >= this.minLength ||
          `A minimum of ${this.minLength} characters is allowed`,
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      minLength: 8,
      confirmPassword: "",
      rulesPassword: [
        (v) =>
          (v || "").length >= this.minLength ||
          `A minimum of ${this.minLength} characters is allowed`,
      ],
      rulesConfirmPassword: [
        (v) =>
          v.length === 0 ||
          (v || "").length >= this.minLength ||
          `A minimum of ${this.minLength} characters is allowed`,
        (v) =>
          v.length === 0 ||
          (!!v && v === this.password) ||
          "Passwords do not match",
      ],
    };
  },
  components: {
    Button,
    BottomCardAuth,
  },
  methods: {
    validate(email, password) {
      this.firebase.auth.createUserWithEmailAndPassword("foo@foo.foo", "test");

      // firebase.auth().createUserWithEmailAndPassword(email, password);
      // this.$refs.form.validate() ? this.$router.push("PostList") : null;
    },
  },
};
</script>

<style lang="scss">
.register {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  &_form {
    margin: 24px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  &_inputfield {
    height: fit-content;
    margin-bottom: -15px;
  }
  &_header {
    text-align: center;
    margin: 0 0 32px 0;
  }
  &_remember {
    text-align: right;
    font-size: 14px;
    color: #8c8c8c;
    margin-bottom: 16px;
  }
  &_submit {
    margin: 2px 0 8px 0;
    color: #ffffff;
    box-sizing: inherit;
    border-radius: 5px;
    width: auto;
  }
  .v-text-field__details {
    display: flex;
    text-align: right;
  }
}
</style>