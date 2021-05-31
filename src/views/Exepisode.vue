<template>
  <div class="inptdv">
    <router-link to="/HporEx" class="back"
      ><i class="fas fa-long-arrow-alt-left"></i
    ></router-link>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <p class="jp">
          Type D'admission :
          <span :style="{ color: color }">{{ radios || "null" }}</span>
        </p>
        <v-radio-group v-model="radios" mandatory>
          <v-radio label="Urgence" value="Urgence" color="red"></v-radio>
          <v-radio label="Normale" value="Normale" color="#2ecc71"></v-radio>
        </v-radio-group>
      </v-container>
      <v-text-field
        v-model="NaturePresentation"
        ref="Np"
        :counter="10"
        :rules="nRules"
        placeholder="Nature De Presentation"
        required
        clearable
      ></v-text-field>

      <v-text-field
        v-model="Prenom"
        :rules="pRules"
        :counter="10"
        type="date"
        placeholder="Prenom"
        required
        clearable
      ></v-text-field>

      <router-link
        to="/Facture"
        class="mr-4"
        style="
          text-align: center;
          border: 1px solid #2ecc71;
          color: #2ecc71;
          padding: 3% !important;
        "
      >
        Suivant
      </router-link>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Exepisode",
  data: () => ({
    radios: null,

    valid: true,
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
    iRules: [
      (v) => !!v || "Ipp est requis",
      (v) =>
        (v && Number.isInteger(Number(v))) ||
        "La valeur doit être un nombre entier",
      (v) => v > 0 || "La valeur doit être supérieure à zéro",
    ],
  }),

  methods: {
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
  padding: 7%;
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
