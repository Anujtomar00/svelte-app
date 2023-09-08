<script lang="ts">
  import { Bar } from "svelte-chartjs";
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
        label: "number of employee",
        data: data2,
        backgroundColor: [
          "rgba(255, 134,159,0.4)",
          "rgba(98,  182, 239,0.4)",
          "rgba(255, 218, 128,0.4)",
          "rgba(113, 205, 205,0.4)",
          'rgba(170, 128, 252,0.4)',
          // 'rgba(255, 177, 101,0.4)',
        ],
        borderWidth: 2,
        borderColor: [
          "rgba(255, 134, 159, 1)",
          "rgba(98,  182, 239, 1)",
          "rgba(255, 218, 128, 1)",
          "rgba(113, 205, 205, 1)",
          'rgba(170, 128, 252, 1)',
          // 'rgba(255, 177, 101, 1)',
        ],
      },
    ],
  };
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );
</script>

<Bar {data} options={{ responsive: true }} />
