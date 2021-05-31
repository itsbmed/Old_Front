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
        v-model="date"
        :rules="dRules"
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
        placeholder="Date"
        onchange="this.className=(this.value!=''?'has-value':'')"
        required
        clearable
      ></v-text-field>
      <v-text-field
        v-model="date_ad"
        :rules="daRules"
        onfocus="(this.type='date')"
        onblur="(this.type='text')"
        placeholder="Date D'admission"
        required
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Service"
        ref="Sr"
        :counter="10"
        :rules="srRules"
        placeholder="Service D'hospilisation"
        required
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Situation"
        ref="st"
        :counter="10"
        :rules="sRules"
        placeholder="Situation"
        required
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Categorie"
        ref="Ct"
        :counter="10"
        :rules="cRules"
        placeholder="Categorie Comptable"
        required
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Tnom"
        ref="Tn"
        placeholder="Nom De Titulaire"
        clearable
      ></v-text-field>
      <v-text-field
        v-model="Tercure"
        ref="Te"
        placeholder="N*Ercure De Titulaire"
        clearable
      ></v-text-field>

      <router-link
        to="/"
        @click="validate"
        class="mr-4"
        style="
          text-align: center;
          border: 1px solid #2ecc71;
          color: #2ecc71;
          padding: 3% !important;
        "
      >
        Enregistrer
      </router-link>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Hepisode",
  data: () => ({
    radios: null,

    valid: true,
    name: "",
    dRules: [(v) => !!v || "La date est requis"],
    daRules: [(v) => !!v || "La date d'admission est requis"],
    srRules: [(v) => !!v || "Le service d'hospilisation est requis"],
    cRules: [(v) => !!v || "la categorie comptable est requis"],
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
