<script lang="ts">
  import { onMount } from "svelte";
  import Doughnut from "./Doughnut.svelte";
  import Piechart from "./Piechart.svelte";
  import Batches from "../Data.json";

  let batchList: any[] = [];
  let data: any[] = [];
  let isLoading = true;
  let colors: any[] = ["#205c65", "#545421", "#81417d", "#b2040e", "#073e53"];

  const getBatches = async () => {
    isLoading = true;
    await new Promise(resolve => setTimeout(resolve, 1000));
    batchList = Batches.batches;
    isLoading = false;
  };

  $: if (batchList.length > 0) {
    data = batchList.map((item: any, index) => ({
      ...item,
      color: colors[index % colors.length],
    }));
  }

  onMount(getBatches);
</script>

<div class="container">
  <h1 class="title">Analytical Overview</h1>
  
  {#if isLoading}
    <div class="loading">
      <div class="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  {:else}
    <div class="card-container">
      {#each data as item}
        <div class="card" style="background-color: {item.color};">
          <h3 class="number">{item.total_employee}</h3>
          <h4 class="heading">{item.batch_name}</h4>
          <p class="subheading">{item.batch_status}</p>
        </div>
      {/each}
    </div>
    
    <div class="chart-container">
      <div class="chart">
        <h2>Pie Chart</h2>
        <div class="chart-wrapper">
          <Piechart data1={data} />
        </div>
      </div>
      <div class="chart">
        <h2>Doughnut Chart</h2>
        <div class="chart-wrapper">
          <Doughnut data1={data} />
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }

  .container {
    max-width: 1200px; 
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    color: #d60016;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }

  .loading-spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #d60016;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  .card {
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    color: white;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .card:hover {
    transform: scale(1.05);
  }

  .number {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  .heading {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  .subheading {
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .chart-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
  }

  .chart {
    background-color: white;
    border: 1px solid #e1e4dd;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .chart h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .chart-wrapper {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 639px) {
    .container {
      width: 100%;
      padding: 1rem;
    }

    .card-container {
      grid-template-columns: 1fr;
    }

    .chart-container {
      margin-left: -10rem;
      margin-right: -0.5rem;
    }

    .chart {
      padding: 0.5rem;
      border-radius: 0;
      width: 100%;
    }

    .chart-wrapper {
      max-width: 100%;
    }
  }

  @media (min-width: 640px) {
    .card-container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    .chart-wrapper {
      max-width: 400px;
    }
  }

  @media (min-width: 768px) {
    .chart-container {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
