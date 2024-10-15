<script lang="ts">
  import { onMount } from 'svelte';
  import { Doughnut } from "svelte-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  export let data1: any[];

  let data2 = data1.map((item: any) => item.total_employee);
  let dataLabel = data1.map((item: any) => item.batch_name);

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

  let chartContainer: HTMLDivElement;

  const resizeChart = () => {
    if (chartContainer) {
      const containerWidth = chartContainer.offsetWidth;
      const size = Math.min(containerWidth, 400); // Max size of 400px
      chartContainer.style.height = `${size}px`;
    }
  };

  onMount(() => {
    resizeChart();
    window.addEventListener('resize', resizeChart);

    return () => {
      window.removeEventListener('resize', resizeChart);
    };
  });
</script>

<div class="chart-container" bind:this={chartContainer}>
  <Doughnut 
    {data} 
    options={{ 
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            boxWidth: 12,
            padding: 15,
            font: {
              size: 12
            }
          }
        },
        title: {
          display: true,
          text: 'Employee Distribution',
          font: {
            size: 16
          }
        }
      }
    }} 
  />
</div>

<style>
  .chart-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    .chart-container {
      padding: 0.5rem;
    }
  }
</style>