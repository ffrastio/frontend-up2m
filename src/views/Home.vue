<template>
  <div class="home">
    <Navbar />
    <div class="py-4">
      <h1 class="flex items-center justify-between font-semibold">
      Data Statistik
    </h1>
    <div class="bg-gray-200 flex items-center">
      <LineChart :charData='datacollection' class="flex items-center w-32"/>
    </div>
  </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import LineChart from "@/components/LineChart.js";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    LineChart,
  },
  data(){
          return {
            datacollection: null,
            loaded : false
          }
        },
        mounted(){
          this.fillData()
        },
        methods: {
          fillData(){
            this.datacollection = {
              labels: [0,1,2,3,4,5,6,7,8,9],
              datasets: [
                {
                  label: 'Teknik Informatika Komputer ( TIK )',
                  backgroundColor: 'lightblue',
                  borderColor:'blue',
                  pointBackgroundColor: 'lightred',
                  borderWidth: 1,
                  pointBorderColor : 'red',
                  data: [1,2,3,4,5,6,7,8,9]
                }
              ]
            }
          }
        }
};
</script>
