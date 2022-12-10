<template>
  <main>
    <v-container fluid fill-height class="position">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm6 elevation-6>
          <v-toolbar class="light-blue darken-4">
            <v-toolbar-title class="white--text">
              <h1>Login</h1>
            </v-toolbar-title>
          </v-toolbar>
          <v-card class="light-blue lighten-4">
            <v-card-text class="pt-4">
              <div>
                <v-form v-model="valid" ref="form">
                  <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                  <v-text-field label="Password" v-model="password" type="password" min="8" :rules="passwordRules" counter required></v-text-field>
                  <v-layout justify-center>
                    <v-btn class="mr-2" @click="submit" :class="{ 'green darken-1 white--text': valid, disabled: !valid }">Login</v-btn>
                    <v-btn @click="clear" class="grey darken-3 white--text">Clear</v-btn>
                  </v-layout>
                  <v-layout justify-center class="pt-3">
                    <v-text>Dont have any account? <v-btn @click="register" text color="indigo accent-4">Register</v-btn></v-text>
                  </v-layout>
                </v-form>
              </div>
            </v-card-text>
          </v-card>
          <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{ error_message }}</v-snackbar>
        </v-flex>
      </v-layout>
    </v-container>

    <v-snackbar v-model="verified" color="green" timeout="2000" bottom> Berhasil Verifikasi Email </v-snackbar>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
.grey--text {
  font-family: "Roboto";
}

.position {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
}
</style>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      load: false,
      snackbar: false,
      error_message: "",
      color: "",
      valid: false,
      password: "",
      passwordRules: [(v) => !!v || "Password tidak boleh kosong :("],
      email: "",
      emailRules: [(v) => !!v || "E-mail tidak boleh kosong :("],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // cek validasi data yang terkirim
        this.load = true;
        this.$http
          .post(this.$api + "/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("token", response.data.access_token);
            this.error_message = response.data.message;
            this.color = "green";
            this.snackbar = true;
            this.load = false;
            this.clear();
            this.$router.push({
              name: "Dashboard",
            });
          })
          .catch((error) => {
            this.error_message = error.response.data.message;
            this.color = "red";
            this.snackbar = true;
            localStorage.removeItem("token");
            this.load = false;
          });
      }
    },
    register() {
      this.$router.push({
        name: "UserRegister",
      });
    },
    clear() {
      this.$refs.form.reset(); // clear form login
    },
    // TampilVerifikasi() {
    //   if (this.$route.query.verified == "success") {
    //     this.verified = true;
    //     this.$router.push("/login");
    //   }
    // },
  },
  // mounted() {
  //   this.TampilVerifikasi();
  // },
};
</script>
