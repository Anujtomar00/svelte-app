<!-- AnalyticalOverview.svelte -->
<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import SvelteTable from "./(authenticated)/batches_table/svelteTable.svelte";
  import Doughnut from "./Doughnut.svelte";
  import Piechart from "./Piechart.svelte";
  import Batches from "../Data.json"

  let batchList: any[] = [];
  let data: any[] = [];
  let isLoading = true;
  let colors: any[] = ["#205c65", "#545421", "#81417d", "#b2040e", "#073e53"];

  const getBatches = async () => {
    isLoading = true;
    // const response = await fetch("http://localhost:3000/batches");
    // const json = await response.json();
    batchList = Batches.batches;
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

<h1 style={`color: var(--app-primary-color, #d60016);`}>Analytical Overview</h1>
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
          <h3 style={`color: white;`} class="number">{item.total_employee}</h3>
          <h4 style={`color: white;`} class="heading">{item.batch_name}</h4>
          <p style={`color: white;`} class="subheading">{item.batch_status}</p>
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
    flex-wrap: wrap;
    background-color: #f3f3f3;
    justify-content: space-between;
    border-radius: 10px;
      @media (max-width: 1400px) and (min-width: 999px) {
      width: 117%; /* Adjust width for smaller screens */
    }
       @media (max-width: 1000px) and (min-width: 901px) {
      width: 125%; /* Adjust width for smaller screens */
    }
       @media (max-width: 900px) and (min-width: 781px) {
      width: 125%; /* Adjust width for smaller screens */
    }
       @media (max-width: 780px) and (min-width: 640px) {
      width: 140%; /* Adjust width for smaller screens */
    }
       @media (max-width: 639px) and (min-width: 587px) {
      width: 160%; /* Adjust width for smaller screens */
    }
       @media (max-width: 586px) and (min-width: 541px) {
      width: 174%; /* Adjust width for smaller screens */
    }
      @media (max-width: 540px) and (min-width: 492px) {
      width: 193%; /* Adjust width for smaller screens */
    }
      @media (max-width: 491px) and (min-width: 407px) {
      width: 206%; /* Adjust width for smaller screens */
    }
       @media (max-width: 406px) and (min-width: 368px) {
      width: 247%; /* Adjust width for smaller screens */
    }
      @media (max-width: 367px) and (min-width: 340px) {
      width: 285%; /* Adjust width for smaller screens */
    }
  }
  .card {
    width: calc(20% - 20px);
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px; 
    transition: transform 0.3s ease;
    box-sizing: border-box;
    @media (max-width: 768px) {
      width: calc(50% - 20px); /* Adjust width for smaller screens */
    }
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
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5rem;
  }

  .piechart {
    width: 100%;
    padding-top: 9rem;
     padding-left: 1rem;
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

     @media (max-width: 1600px) and (min-width:1024px){
      .piechart, .doughnut {
        width: 48%;
      }
    }

   @media (min-width: 340px) and (max-width: 1023px){
       .piechart {
          width: 129%;
          margin-left: 12rem;
          padding-top: 1rem;
          padding-left: 4rem;
          border: 1px solid #e1e4dd;
          border-radius: 10px;
      }
    }

      @media (min-width: 340px) and (max-width: 1023px){
       .doughnut {
          width: 100%;
          padding-top: 2rem;
          height: 600px;
          margin-left: 12rem;
          margin-top: 5rem;
          border: 1px solid #e1e4dd;
          border-radius: 10px;
      }
    }
</style>
