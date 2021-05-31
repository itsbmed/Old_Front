import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    accessToken: localStorage.getItem("accessToken") || "",
    agent: localStorage.getItem("agent") || {}
  },
  mutations: {
    AUTH_SUCCESS: (state, payload) => {
      state.accessToken = payload.accessToken;
      state.agent = payload.agent;
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("agent", payload.agent);
    },
    DESTROY_SESSION: (state) => {
      state.agent={};
      state.accessToken = "";
      localStorage.removeItem("accessToken");
      localStorage.removeItem("agent");
    },
    
  },
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
    getAgent: (state) => state.agent
  },
  actions: {
    signIn: (context, payload) => {
      return new Promise((resolve, reject) => {
        Vue.prototype.$http
          .post("/agents", payload)
          .then((res) => {
            context.commit("AUTH_SUCCESS", {
              accessToken: res.data.accessToken,
              agent: res.data.agent
            });
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    logout: (context) => {
      context.commit("DESTROY_SESSION");
    },
  },
});
export default store;
