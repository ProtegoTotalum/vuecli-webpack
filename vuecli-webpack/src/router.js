import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function importComponent(path) {
  return () => import(`./components/${path}.vue`);
}

const router = new VueRouter({
  mode: "history",

  routes: [
    // Homepage
    {
      path: "/home",
      name: "Home",
      meta: { title: "Home" },
      component: importComponent("Home"),
    },

    // Login
    {
      path: "/login",
      name: "UserLogin",
      meta: { title: "UserLogin" },
      component: importComponent("UserLogin"),
    },
    // Register
    {
      path: "/register",
      name: "UserRegister",
      meta: { title: "UserRegister" },
      component: importComponent("UserRegister"),
    },

    // {
    //   path: "/",
    //   component: importComponent("DashboardLayout"),
    //   children: [
    //     // Dashboard
    //     {
    //       path: "/dashboard",
    //       name: "Dashboard",
    //       meta: { title: "Dashboard" },
    //       component: importComponent("Dashboard"),
    //     },
    //     // Courses
    //     {
    //       path: "/product",
    //       name: "Product",
    //       meta: { title: "Products" },
    //       component: importComponent("Main/Product"),
    //     },
    //     {
    //       path: "/wishlist",
    //       name: "Wishlist",
    //       meta: { title: "Wishlists" },
    //       component: importComponent("Main/Wishlist"),
    //     },
    //     // Users
    //     {
    //       path: "/user",
    //       name: "User",
    //       meta: { title: "Users" },
    //       component: importComponent("Main/User"),
    //     },
    //     {
    //       path: "/toko",
    //       name: "Toko",
    //       meta: { title: "tokos" },
    //       component: importComponent("Main/Toko"),
    //     },
    //   ],
    // },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   if (to.name !== "UserLogin" && localStorage.getItem("token") == null && to.name !== "UserRegister") {
//     next({ name: "UserLogin" });
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title;
//   next();
// });

router.beforeEach((to, from, next) => {
  if (to.name != "UserLogin" && localStorage.getItem("token") == null && to.name != "UserRegister" && to.name != "Home") {
    next("home");
    document.to.meta.title = "Home";
  }

  document.title = to.meta.title;
  next();
});

export default router;
