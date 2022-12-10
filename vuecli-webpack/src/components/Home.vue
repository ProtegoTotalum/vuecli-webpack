<template>
  <main>
    <v-carousel height="80vh" dark show-arrows-on-hover draggable="true" hide-delimiter-background class="text-center">
      <v-carousel-item v-for="(data, carindex) in data" :key="carindex" :src="data.src" class="gradient-fill">
        <v-container fill-height>
          <div style="max-width: 1200px">
            <div class="text-md-h2 mb-3 text-sm-h3 text-h5 font-weight-black orange--text">
              {{ data.heading.toUpperCase() }}
            </div>

            <p class="mb-5 orange--text">{{ data.subHeading }}</p>

            <v-btn @click="login" class="my-3 black large orange--text">Login</v-btn>
            <span class="mx-2 my-4"></span>
            <v-btn @click="register" class="my-3 orange black--text">Register</v-btn>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-footer dark padless>
      <v-card flat tile class="black lighten-1 white--text text-center">
        <v-card-text class="orange--text pt-5">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis
          commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="orange--text"> {{ new Date().getFullYear() }} — <strong>Kelompok J</strong> </v-card-text>
      </v-card>
    </v-footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
          src: "https://img.freepik.com/free-vector/happy-people-shopping-online_74855-5865.jpg?w=2000",
          heading: " Quasha ",
          subHeading:
            "Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem ",
        },
        {
          src: "https://freeillustrations.xyz/wp-content/uploads/2020/12/E-Commerce-Illustration-Kit@4x.png",
          heading: " Quasha",
          subHeading: "Litora a interdum primis. Lectus facilisi sit cum arcu aliquam velit imperdiet sapien suspendisse at vel facilisis. Facilisis metus, curae; nibh mi orci et. Fringilla sociis magna rutrum bibendum arcu.",
        },
        {
          src: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=2000",
          heading: " Quasha ",
          subHeading:
            "Tellus cum turpis natoque id justo interdum tincidunt faucibus aptent congue pellentesque. Proin luctus orci netus! Scelerisque parturient cursus donec parturient et, luctus aptent habitant aliquet felis. Sapien placerat ultricies.",
        },
      ],
    };
  },
  methods: {
    register() {
      this.$router.push({
        name: "UserRegister",
      });
    },
    login() {
      this.$router.push({
        name: "UserLogin",
      });
    },
  },
};
</script>

<style>
.gradient-fill .v-responsive__content {
  background: linear-gradient(to left, rgba(3, 12, 41, 0.8), rgba(5, 11, 31, 0.65));
}
.carousel-item img {
  height: 100vh !important;
}
</style>
