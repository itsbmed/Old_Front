<template>
  <div class="search" style="text-align: center">
    <router-link
      to="/Patient"
      style="float: left; position: absolute; right: 88%"
    >
      <v-btn
        style="border: 1px solid #2ecc71"
        class="mr-4 mr-4green"
        @click="validate"
      >
        New Patient
      </v-btn>
    </router-link>
    <h1 v-if="agent.nom">Bonjour {{ agent.nom }}</h1>

    <div class="switches-container">
      <input
        type="radio"
        id="switchEpisode"
        name="switchPlan"
        value="Episode"
        checked="checked"
        @change="check('Episode')"
      />
      <input
        type="radio"
        id="switchFacture"
        name="switchPlan"
        value="Facture"
        @change="check('Facture')"
      />
      <label for="switchEpisode">{{ Episode }}</label>
      <label for="switchFacture">{{ Facture }}</label>
      <div class="switch-wrapper">
        <div class="switch">
          <div>{{ Episode }}</div>

          <div>{{ Facture }}</div>
        </div>
      </div>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="esearch"
        placeholder="Ipp"
        style="width: 70%"
        v-if="estyle"
        type="number"
        clearable
      ></v-text-field>
      <v-text-field
        v-model="fsearch"
        style="width: 70%"
        v-if="fstyle"
        placeholder="Numero De Facture"
        type="Number"
        clearable
      ></v-text-field>

      <router-link to="/Hepisode" style="text-align: center">
        <v-btn
          :disabled="!valid"
          style="border: 1px solid #2ecc71"
          class="mr-4 mr-4green"
          @click="validate"
        >
          Search
        </v-btn>
      </router-link>
    </v-form>
  </div>
</template>
<script>
export default {
  name: "searchbox",
  data: () => ({
    valid: true,
    Episode: "Episode",
    Facture: "Facture",
    estyle: true,
    fstyle: false,
  }),
  computed: {
    agent() {
      return this.$store.getters.getAgent;
    },
  },
  methods: {
    check: function (arg) {
      if (arg == this.Episode) {
        this.estyle = true;
        this.fstyle = false;
      } else if (arg == this.Facture) {
        this.fstyle = true;
        this.estyle = false;
      }
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.v-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
