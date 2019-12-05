<template>
  <div class="divLoginContainer">
    <img src="../assets/Login.png" />
    <div class="divLogo">
      <img src="../assets/Logo.svg" />
    </div>
    <div class="divModal">
      <img src="../assets/Logo.svg" />
      <input
        type="text"
        placeholder="Enter Username"
        v-model="Credential.Username"
      />
      <input
        type="password"
        placeholder="Enter Password"
        v-model="Credential.Password"
      />
      <button v-on:click="redirect()">Log In</button>
    </div>
  </div>
</template>

<script>
import { store } from "../store/store";
import { mapGetters } from "vuex";
import {
  POST
} from "../api/API_Const";
import { SET_CREDENTIAL_STATUS_ASYNC } from "../store/Store_Const";
import Axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

export default {
  name: "Login",
  data: () => {
    return {
      Credential: {
        Domain: "APAC",
        Username: "",
        Password: ""
      }
    };
  },
  methods: {
    redirect() {
      const { Username, Password } = this.Credential;
      const url = "http://phmnl5dev025:32206/api/v1/ad/authenticate";

      if (Username !== "" && Password !== "") {
        Axios({
          method: POST,
          url: url,
          data: this.Credential,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Key: "BC7705DE-7C58-4ED4-AF23-9B9E7AA97A90"
          }
        })
          .then(result => result.data)
          .then(data => {
            store.dispatch(SET_CREDENTIAL_STATUS_ASYNC, { data });
          })
          .catch(error => {
            Toast.fire({
              icon: "error",
              title: "Invalid Username or Password!"
            });
          });
      } else if (Username !== "" && Password === "") {
        Toast.fire({
          icon: "error",
          title: "Password is empty!"
        });
      } else if (Username === "" && Password !== "") {
        Toast.fire({
          icon: "error",
          title: "Username is empty!"
        });
      } else if (Username === "" && Password === "") {
        Toast.fire({
          icon: "error",
          title: "Username & Password are empty!"
        });
      }
    }
  },
  watch: {
    getCredentialStatus(newValue, oldValue) {
      if (newValue.IsSuccessful) {
        this.$router.push("dashboard");
      }
    }
  },
  computed: {
    ...mapGetters(["getCredentialStatus"])
  }
};
</script>

<style scoped src="../css/Login.css" />
