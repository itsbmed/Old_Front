import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import HporEx from "../views/HporEx.vue";
import Exepisode from "../views/Exepisode.vue";
import Patient from "../views/Patient.vue";
import Hepisode from "../views/Hepisode.vue";
import store from "../store";
import Facture from "../views/Facture.vue";
import NotFound from "../views/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      authRequired: false,
    },
  },
  {
    path: "/HporEx",
    name: "HporEx",
    component: HporEx,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/Exepisode",
    name: "Exepisode",
    component: Exepisode,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/Patient",
    name: "Patient",
    component: Patient,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/Hepisode",
    name: "Hepisode",
    component: Hepisode,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/Facture",
    name: "Facture",
    component: Facture,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: {
      global: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    if (store.getters.isLoggedIn) {
      next();
    } else {
      next({
        name: "Login",
        params: to.params,
        query: {
          nextPath: to.name,
        },
      });
    }
  } else if (to.matched.some((record) => record.meta.global)) {
    next();
  } else {
    if (store.getters.isLoggedIn) {
      next({
        name: "Home",
      });
    } else {
      next();
    }
  }
});
export default router;
