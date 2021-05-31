<template>
  <v-app>
    <v-main>
      <button
        @click="logout"
        class="logout"
        v-if="isLoggedIn"
        style="display:block;position: fixed;left: 90%;}"
      >
        <i class="fas fa-sign-out-alt"></i>
        Logout
      </button>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      await this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>
