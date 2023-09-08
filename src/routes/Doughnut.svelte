<script lang="ts">
  import { Doughnut } from "svelte-chartjs";
  export let data1;
  let data2 = data1.map((item: any) => {
    const total_employee = item.total_employee;
    return total_employee;
  });
  let dataLabel = data1.map((item: any) => {
    const batch_name = item.batch_name;
    return batch_name;
  });
  const data = {
    labels: dataLabel,
    datasets: [
      {
        data: data2,
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
        ],
      },
    ],
  };

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Doughnut {data} options={{ responsive: true }} />
