<template>
  <div class="FPages">
    <router-link to="/Patient" class="back"
      ><i class="fas fa-long-arrow-alt-left"></i
    ></router-link>
    <div class="fpage">
      <h1>Veuillez sélectionner le type de cas</h1>
      <div class="dbtnchose">
        <span ref="Hosp" class="btnchose" @click="colored('Hospitalisé')">{{
          Hos
        }}</span>
        <span ref="Ext" class="btnchose" @click="colored('Externe')">
          {{ Ex }}
        </span>
        <router-link :to="chose">
          <i class="fas fa-long-arrow-alt-right"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HporEx",
  data: () => ({
    Hos: "Hospitalisé",
    Ex: "Externe",
    chose: "",
  }),

  methods: {
    colored: function (arg) {
      if (arg == this.Hos) {
        this.$refs.Hosp.style.background = "#2ecc71";
        this.$refs.Hosp.style.color = "#fff";
        this.$refs.Ext.style.background = "#fff";
        this.$refs.Ext.style.color = "#111";
        this.chose = "Hepisode";
      } else if (arg == this.Ex) {
        this.$refs.Ext.style.background = "#2ecc71";
        this.$refs.Ext.style.color = "#fff";
        this.$refs.Hosp.style.background = "#fff";
        this.$refs.Hosp.style.color = "#111";
        this.chose = "Exepisode";
      }
    },
  },
};
</script>
<style scoped>
a {
  padding-top: 8%;
  font-size: 2.2vw;
}
</style>
