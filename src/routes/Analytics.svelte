<!-- AnalyticalOverview.svelte -->
<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import SvelteTable from "./(authenticated)/batches_table/svelteTable.svelte";
  import Doughnut from "./Doughnut.svelte";
  import Piechart from "./Piechart.svelte";

  let batchList: any[] = [];
  let data: any[] = [];
  let isLoading = true;
  let colors: any[] = ["#f8bbd0", "#DAF7A6", "#90caf9", "#A6B1F7", "#A6DAF7"];

  const getBatches = async () => {
    isLoading = true;
    const response = await fetch("http://localhost:3000/batches");
    const json = await response.json();
    batchList = json;
    batchData();
    isLoading = false;
  };

  function batchData() {
    data = batchList.map((item: any, index) => {
      const batch_name = item.batch_name;
      const batch_status = item.batch_status;
      const total_employee = item.total_employee;
      const color = colors[index];
      return {
        ...item,
        batch_name,
        batch_status,
        total_employee,
        color,
      };
    });
  }

  onMount(() => getBatches());
</script>

<h2>Analytical Overview</h2>
{#if isLoading}
  <div class="loading">
    <div class="loadingSpinner" />
    Loading...
  </div>
{:else}
  <div class="container">
    <div class="card-box">
      {#each data as item}
        <div class="card" style="background-color: {item.color}; color: white;">
          <h3 class="number">{item.total_employee}</h3>
          <h4 class="heading">{item.batch_name}</h4>
          <p class="subheading">{item.batch_status}</p>
        </div>
      {/each}
    </div>
    <div class="chart">
      <div class="piechart">
        <Piechart data1={data} />
      </div>
      <div class="doughnut">
        <Doughnut data1={data} />
      </div>
    </div>
    <div style="margin-top: 5rem;  border: 1px solid #e1e4dd; padding:2rem">
      <SvelteTable />
    </div>
  </div>
{/if}

<style>
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    /* background-color: #f3f3f3;  */
  }
  .card-box {
    display: flex;
    flex-direction: row;
    background-color: #f3f3f3;
    justify-content: space-between;
    border-radius: 10px;
  }
  .card {
    width: 250px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 10px;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card .number {
    font-size: 36px;
    font-weight: bold;
    margin-top: 0.6rem;
  }

  .card .heading {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }

  .card .subheading {
    font-size: 14px;
    color: #888;
  }

  .chart {
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
    justify-content: space-between;
  }

  .piechart {
    width: 50%;
    padding-top: 11rem;
    margin-right: 2rem;
    border: 1px solid #e1e4dd;
    border-radius: 10px;
  }

  .doughnut {
    height: 600px;
    width: 600px;
    border: 1px solid #e1e4dd;
    border-radius: 10px;
  }
</style>
