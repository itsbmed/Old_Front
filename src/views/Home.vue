<template>
  <div>
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
          v-model="searchbox"
          placeholder="Ipp"
          style="width: 70%"
          v-if="estyle"
          type="number"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="searchbox"
          style="width: 70%"
          v-if="fstyle"
          placeholder="Numero De Facture"
          type="Number"
          clearable
        ></v-text-field>

        <v-btn
          style="border: 1px solid #2ecc71"
          class="mr-4 mr-4green"
          @click="search"
        >
          Search
        </v-btn>
      </v-form>
    </div>
    <edata-table :chose="chose" v-if="estyle === true && fstyle === false" />
    <fdata-table :chose="chose" v-else />
  </div>
</template>

<script>
import EdataTable from "../components/EdataTable.vue";
import FdataTable from "../components/FdataTable.vue";
export default {
  name: "Home",
  data: () => ({
    valid: true,
    Episode: "Episode",
    Facture: "Facture",
    searchbox: "",
    estyle: true,
    fstyle: false,
    chose: "",
  }),

  computed: {
    agent() {
      return this.$store.getters.getAgent;
    },
  },
  components: {
    EdataTable,
    FdataTable,
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
    search() {
      this.sclick = this.chose;
      console.log(this.estyle);
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
