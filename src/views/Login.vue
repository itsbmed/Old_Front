<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic js-tilt" data-tilt>
          <img src="../assets/img-01.png" alt="IMG" />
        </div>

        <form class="login100-form validate-form">
          <v-alert dense type="error" v-if="uerr">
            {{ uerr }}
          </v-alert>
          <v-alert dense type="error" v-if="perr">
            {{ perr }}
          </v-alert>
          <v-alert dense type="error" v-if="gerr">
            {{ gerr }}
          </v-alert>

          <span class="login100-form-title"> Agent Login </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              v-model="username"
              class="input100"
              type="text"
              name="username"
              ref="user"
              @change="checkUser"
              placeholder="Usename"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              v-model="password"
              class="input100"
              type="password"
              name="pass"
              ref="pass"
              @change="checkPass"
              placeholder="Password"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <div class="container-login100-form-btn">
            <button
              type="button"
              class="login100-form-btn"
              @click="login"
              style="color: white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      uerr: "",
      perr: "",
      gerr: "",
    };
  },
  methods: {
    checkUser() {
      if (this.username == "") {
        this.$refs.user.style.border = "1px solid red";
        this.uerr = "username can't be empty";
      } else {
        this.$refs.user.style.border = "1px solid #57b846";
        this.uerr = "";
      }
    },
    checkPass() {
      if (this.password == "") {
        this.$refs.pass.style.border = "1px solid red";
        this.perr = "pass can't be empty";
      } else {
        this.$refs.pass.style.border = "1px solid #57b846";
        this.perr = "";
      }
    },
    async login() {
      try {
        const res = await this.$store.dispatch("signIn", {
          username: this.username,
          password: this.password,
        });
        if (this.$route.query.nextPath) {
          this.$router
            .push({
              name: this.$route.query.nextPath,
              params: this.$route.params,
            })
            .then(null, (err) => {
              this.$router.push({
                name: "NotFound",
              });
            });
        } else {
          this.$router.push({
            name: "Home",
          });
        }
      } catch ({ response: rs }) {
        switch (rs.status) {
          case 404:
            this.gerr = rs.data.message;
            break;
          case 401:
            this.gerr = rs.data.message;
            break;
          default:
            this.gerr = "username or password invalid";
            break;
        }
      }
    },
  },
};
</script>
<style scoped>
.login100-form {
  padding-bottom: 17%;
}
</style>
