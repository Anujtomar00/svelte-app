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
          "#4d639c",
          "#43A047",
          "#FDB45C",
          "#495361",
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#3a589b",
          "#66BB6A",
          "#FFC870",
          "#747b8a",
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
