<script lang="ts">
  import type { PageData } from "./$types";
  import SvelteTable from "../batches_table/svelteTable.svelte";
  import EmployeeTable from "../employees_table/employeeTable.svelte";
  
let isBatches = true;

function toggleTab() {
  isBatches = !isBatches;
}
</script>

<div
  class="prose"
  style="display:flex; justify-content:center; flex-direction:column; margin-bottom:3%; "
>
  <h1>Dashboard</h1>
</div>
<div class="tab">
  <button class:selected={isBatches} on:click={toggleTab}>Batches</button>
  <button class:selected={!isBatches} on:click={toggleTab}>Employees</button>
</div>
{#if isBatches}
<SvelteTable />  
{/if}
{#if !isBatches}
<EmployeeTable />
{/if}

<style>
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
    background-color: #2196f3;
    color: #fff;
  }
</style>



  