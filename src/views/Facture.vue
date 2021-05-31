<template>
  <div class="inptdv">
    <router-link to="/Exepisode" class="back"
      ><i class="fas fa-long-arrow-alt-left"></i
    ></router-link>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="Nfact"
        :rules="nfRules"
        type="number"
        placeholder="Num Facture"
        required
        clearable
      ></v-text-field>

      <v-text-field
        v-model="Actes"
        v-if="chose == 'Hospitalisé'"
        :rules="aRules"
        placeholder="Actes"
        type="number"
        required
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Medicame"
        placeholder="Medicame"
        type="number"
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Prothes"
        placeholder="Prothes"
        type="number"
        clearable
      ></v-text-field>
      <v-select
        :items="Categorie"
        placeholder="Categorie"
        :rules="caRules"
      ></v-select>
      <v-text-field
        v-model="NErcue"
        placeholder="N*Quitance"
        :rules="ncRules"
        required
        clearable
      ></v-text-field>

      <span
        >Totale Facture :
        <span style="color: #2ecc71">
          {{ Totale() + " DH" }}
        </span>
      </span>

      <router-link to="/" style="text-align: center">
        <v-btn
          style="border: 1px solid #2ecc71"
          class="mr-4 mr-4green"
          @click="validate"
        >
          Enregistrer
        </v-btn>
      </router-link>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Facture",
  data: () => ({
    Categorie: ["PAYANT", "RAMED"],
    nfact: "",
    Actes: null,
    Medicame: null,
    Prothes: null,
    LTotale: 0,
    name: "",
    nfRules: [
      (v) => !!v || "N*Facture est requis",
      (v) => v > 0 || "La valeur doit être supérieure à zéro",
    ],
    aRules: [
      (v) => !!v || "Actes est requis",
      (v) => v > 0 || "La valeur doit être supérieure à zéro",
    ],

    caRules: [(v) => !!v || "Categorie est requis"],
    ncRules: [
      (v) => !!v || "N*Quitance est requis",
      (v) => v > 0 || "La valeur doit être supérieure à zéro",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    Totale: function () {
      this.LTotale = +this.Actes + +this.Medicame + +this.Prothes;
      return this.LTotale;
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
