<script lang="ts">
  import type { PageData } from "../../dashboard/$types";
  import SvelteTable from "../batches_table/svelteTable.svelte";
  import EmployeeTable from "../employees_table/employeeTable.svelte";
  import Header from "../../Header.svelte"
let isBatches = true;

function toggleTab() {
  isBatches = !isBatches;
}
</script>
<Header/>
<div class="dashboard-container p-4">
<div
  class="prose"
  style="display:flex; justify-content:center; flex-direction:column; margin-bottom:3%; "
>
  <h1 style=" -webkit-text-fill-color: #0000;
    background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
    background-clip: text;
    -webkit-background-clip: text;">Dashboard</h1>
</div>
<!-- <div class="tab flex justify-start gap-2"  style="padding-left:0px">
  <button class="btn btn-info" class:selected={isBatches} on:click={toggleTab}>Batches</button>
  <button class="btn btn-info" class:selected={!isBatches} on:click={toggleTab}>Employees</button>
</div> -->

<div style="float: left;" class="switches-container">
  <input type="radio" class:selected={isBatches} on:click={toggleTab} id="Batches" name="switchPlan" value="Batches" checked="checked" />
  <input type="radio" class:selected={!isBatches} on:click={toggleTab} id="Employees" name="switchPlan" value="Employee" />
  <label for="Batches">Batches</label>
  <label for="Employees">Employees</label>
  <div class="switch-wrapper">
    <div class="switch">
      <div>Batches</div>
      <div>Employees</div>
    </div>
  </div>
</div>

{#if isBatches}
<SvelteTable />  
{/if}
{#if !isBatches}
<EmployeeTable />
{/if}
</div>

<style>
  :root {
    --switches-bg-color: #f2f2f2;
    --switches-label-color: black;
    --switch-bg-color:#d60016;
    --switch-text-color: white ;
}
 .dashboard-container{
    padding: 3rem
  }
@media (max-width: 670px) {
  .dashboard-container{
    padding:1rem
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
    border-radius: 7px;
  }
  .switches-container {
    width: 16rem;
    position: relative;
    display: flex;
    padding: 0;
    position: relative;
    background: var(--switches-bg-color);
    line-height: 3rem;
    border-radius: 7px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

/* input (radio) for toggling. hidden - use labels for clicking on */
.switches-container input {
    visibility: hidden;
    position: absolute;
    top: 0;
}

/* labels for the input (radio) boxes - something to click on */
.switches-container label {
    width: 50%;
    padding: 0;
    margin: 0;
    text-align: center;
    cursor: pointer;
    color: var(--switches-label-color);
}

/* switch highlighters wrapper (sliding left / right) 
    - need wrapper to enable the even margins around the highlight box
*/
.switch-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    z-index: 3;
    transition: transform .5s cubic-bezier(.77, 0, .175, 1);
    /* transition: transform 1s; */
}

/* switch box highlighter */
.switch {
    border-radius: 7px;
    background: var(--switch-bg-color);
    height: 100%;
}

/* switch box labels
    - default setup
    - toggle afterwards based on radio:checked status 
*/
.switch div {
    width: 100%;
    text-align: center;
    opacity: 0;
    display: block;
    color: var(--switch-text-color) ;
    transition: opacity .2s cubic-bezier(.77, 0, .175, 1) .125s;
    will-change: opacity;
    position: absolute;
    top: 0;
    left: 0;
}

/* slide the switch box from right to left */
.switches-container input:nth-of-type(1):checked~.switch-wrapper {
    transform: translateX(0%);
}

/* slide the switch box from left to right */
.switches-container input:nth-of-type(2):checked~.switch-wrapper {
    transform: translateX(100%);
}

/* toggle the switch box labels - first checkbox:checked - show first switch div */
.switches-container input:nth-of-type(1):checked~.switch-wrapper .switch div:nth-of-type(1) {
    opacity: 1;
}

/* toggle the switch box labels - second checkbox:checked - show second switch div */
.switches-container input:nth-of-type(2):checked~.switch-wrapper .switch div:nth-of-type(2) {
    opacity: 1;
}
</style>



  