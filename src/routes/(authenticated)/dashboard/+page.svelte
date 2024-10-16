<script lang="ts">
  import type { PageData } from "./$types";
  import SvelteTable from "../batches_table/svelteTable.svelte";
  import EmployeeTable from "../employees_table/employeeTable.svelte";
  
let isBatches = true;

function toggleTab() {
  isBatches = !isBatches;
}
</script>
<div class="dashboard-container">
<div
  class="prose"
  style="display:flex; justify-content:center; flex-direction:column; margin-bottom:3%; "
>
  <h1 style=" -webkit-text-fill-color: #0000;
    background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
    background-clip: text;
    -webkit-background-clip: text;">Dashboard</h1>
</div>
<div class="tab" style="padding-left:0px">
  <button class:selected={isBatches} on:click={toggleTab}>Batches</button>
  <button class:selected={!isBatches} on:click={toggleTab}>Employees</button>
</div>
{#if isBatches}
<SvelteTable />  
{/if}
{#if !isBatches}
<EmployeeTable />
{/if}
</div>

<style>
 .dashboard-container{
    padding: 0rem 3rem
  }
@media (max-width: 670px) {
  .dashboard-container{
    padding:0rem
  }
}
  tab {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    background-color: #f5f5f5;
    color: #555;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button.selected {
    background-color: #d60016;
    color: #fff;
  }
</style>



  