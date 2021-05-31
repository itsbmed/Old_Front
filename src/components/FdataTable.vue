<template>
  <div style="padding: 2%">
    <table class="table">
      <thead style="background: #2ecc71; color: white">
        <tr>
          <th scope="col">{{ Head.Nf }}</th>
          <th scope="col">{{ Head.Medicam }}</th>
          <th scope="col">{{ Head.Prothes }}</th>
          <th scope="col" v-if="check == Episode">{{ Head.Categorie }}</th>
          <th scope="col" v-else>{{ Head.Nature }}</th>
          <th scope="col" v-if="Head.Date_AD">{{ Head.Nq }}</th>
          <th scope="col" v-if="Head.Date_Srt">{{ Head.Totale }}</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, i) in allData[0]" :key="i">
          <th scope="row">{{ data.Type }}</th>
          <td>{{ data.Nf }}</td>
          <td>{{ data.Medicam }}</td>
          <td>{{ data.Prothes }}</td>
          <td>{{ data.Categorie }}</td>
          <td>{{ data.Nature }}</td>
          <td>{{ data.Nq }}</td>
          <td>{{ data.Totale }}</td>
          <td>
            <Button><i class="fas fa-edit"></i></Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "FdataTable",
  data() {
    return {
      Head: {
        Nf: "N*Facture",
        Medicame: "Medicam",
        Prothes: "Prothes",
        Categorie: "Categorie",
        Nature: "Nature",
        Nq: "N*Quitance",
        Totale: "Totale",
      },
      allData: [],
    };
  },
  props: ["chose"],
  methods: {
    test() {
      console.log(this.sclick);
    },
  },
};
</script>
