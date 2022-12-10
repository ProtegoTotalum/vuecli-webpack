<template>
  <main>
    <v-container fluid fill-height class="position">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm6 elevation-6>
          <h1 class="text-center yellow darken-2 white--text pb-2">Register</h1>
          <v-card class="yellow lighten-4">
            <v-card-text class="pt-4">
              <div>
                <v-form v-model="valid" ref="form" class="white--text">
                  <v-text-field label="Name" v-model="name" :rules="nameRules" required></v-text-field>
                  <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
                  <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
                  <v-text-field label="Password" v-model="password" type="password" min="8" :rules="passwordRules" counter required></v-text-field>
                  <v-layout justify-center>
                    <v-btn class="mr-2" @click="submit" :class="{ 'green darken-1 brown--text': valid, disabled: !valid }">Register</v-btn>
                    <v-btn @click="clear" class="grey darken-3 white--text">Clear</v-btn>
                  </v-layout>
                  <v-layout justify-center class="pt-3">
                    <v-text class="black--text"
                      >Have Account?
                      <v-btn @click="register" text color="indigo accent-4">Login</v-btn>
                    </v-text>
                  </v-layout>
                </v-form>
              </div>
            </v-card-text>
          </v-card>
          <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{ error_message }}</v-snackbar>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
.grey--text {
  font-family: "Roboto";
  text-align: end;
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
  name: "Register",
  data() {
    return {
      load: false,
      snackbar: false,
      error_message: "",
      color: "",
      valid: false,
      password: "",
      passwordRules: [(v) => !!v || "Password tidak boleh kosong"],
      email: "",
      emailRules: [(v) => !!v || "E-mail tidak boleh kosong"],
      name: "",
      nameRules: [(v) => !!v || "Nama Tidak boleh Kosong"],
      username: "",
      usernameRules: [(v) => !!v || "Username tidak boleh Kosong "],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // cek validasi data yang terkirim
        this.load = true;
        this.$http
          .post(this.$api + "/register", {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            status: 0,
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
              name: "Login",
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
        name: "UserLogin",
      });
    },
    clear() {
      this.$refs.form.reset(); // clear form login
    },
  },
};
</script>
