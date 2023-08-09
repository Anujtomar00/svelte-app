<!-- AnalyticalOverview.svelte -->
<script>
  import SvelteTable from "./(authenticated)/batches_table/svelteTable.svelte";
import Doughnut from "./Doughnut.svelte";
  import Piechart from "./Piechart.svelte";

  const data = [
    {
      number: 120,
      heading: "Total Sales",
      subheading: "This Month",
      color: "#f8bbd0",
    }, // Light skin
    {
      number: 50,
      heading: "New Customers",
      subheading: "This Week",
      color: "#DAF7A6 ",
    }, // Light green
    {
      number: 85,
      heading: "Product Rating",
      subheading: "Out of 100",
      color: "#90caf9",
    }, // Light blue
    {
      number: 120,
      heading: "Total Sales",
      subheading: "This Month",
      color: "#A6B1F7",
    }, // Light skin
    {
      number: 50,
      heading: "New Customers",
      subheading: "This Week",
      color: "#A6DAF7",
    }, // Light green
    // Add more data for additional cards
  ];
</script>

<h2>Analytical Overview</h2>

<div class="container">
  <div class="card-box">
    {#each data as item}
      <div class="card" style="background-color: {item.color}; color: white;">
        <h3 class="number">{item.number}</h3>
        <h4 class="heading">{item.heading}</h4>
        <p class="subheading">{item.subheading}</p>
      </div>
    {/each}
  </div>
  <div class="chart">
    <div class="piechart">
      <Piechart />
    </div>
    <div class="doughnut">
      <Doughnut />
    </div>
  </div>
  <div style="margin-top: 5rem;  border: 1px solid #e1e4dd; padding:2rem">
    <SvelteTable />
    </div>
</div>


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
