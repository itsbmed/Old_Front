<template>
  <div class="inptdv">
    <router-link to="/" class="back"
      ><i class="fas fa-long-arrow-alt-left"></i
    ></router-link>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="Ipp"
        placeholder="Ipp"
        :rules="iRules"
        required
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Nom"
        :counter="10"
        :rules="nRules"
        placeholder="Nom"
        required
        clearable
      ></v-text-field>

      <v-text-field
        v-model="Prenom"
        :rules="pRules"
        :counter="10"
        placeholder="Prenom"
        required
        clearable
      ></v-text-field>

      <v-text-field
        v-model="nomdt"
        placeholder="N* de carte ou d'identifiant"
        :rules="iRules"
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Dex"
        placeholder="Date D'expirations | MM / YY"
        @keypress="checkDate"
        :rules="dRules"
        clearable
      ></v-text-field>

      <router-link
        to="/HporEx"
        class="mr-4 mr-4green"
        @click="validate"
        style="
          text-align: center;
          border: 1px solid #2ecc71;
          color: #2ecc71;
          padding: 3% !important;
        "
      >
        Suivante
      </router-link>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Exepisode",
  data: () => ({
    Dex: "",
    name: "",
    nRules: [
      (v) => !!v || "Le nom est requis",
      (v) =>
        (v && v.length <= 10) || "Le nom doit comporter moins de 10 caractères",
    ],
    pRules: [
      (v) => !!v || "Le prenom est requis",
      (v) =>
        (v && v.length <= 10) ||
        "Le prenom doit comporter moins de 10 caractères",
    ],
    dRules: [
      (v) =>
        (v.charCodeAt(0) <= 57 &&
          v.charCodeAt(0) >= 48 &&
          v.charCodeAt(1) <= 57 &&
          v.charCodeAt(1) >= 48 &&
          v.charCodeAt(5) <= 57 &&
          v.charCodeAt(5) >= 48 &&
          v.charCodeAt(6) <= 57 &&
          v.charCodeAt(6) >= 48) ||
        v.length == 0 ||
        "Please enter a valid date",
    ],
  }),

  methods: {
    checkDate() {
      if (this.Dex.length == 2) {
        this.Dex += " / ";
      }
    },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>
<style scoped>
.inptdv {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4%;
  flex-direction: column;
  align-items: center;
}
.v-form {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.mr-4 {
  margin-top: 3%;
  width: 30%;
  border-radius: 15px;
  padding: 5% !important;
  align-self: center;
}
.v-application .primary--text {
  color: #2ecc71 !important;
}
</style>
