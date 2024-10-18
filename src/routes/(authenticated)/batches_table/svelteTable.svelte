<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import AddBatchModal from "./addBatchModal.svelte";
  import EditBatchModal from "./editBatchModal.svelte";
  import Dialog from '../Dialog/dialog.svelte';
  import Batches from "../../../Data.json"
  const addModal = { showModal: false };
  const editModal = { showModal: false };
  let showError = false;
  let showSuccess = false;
  let successMessage = "";
  let errorMessage = "";
  let editData: any;
  let deleteId: any[]=[];
  let showDialog = false;
  let batchFilter ="";
  let isLoading = true;
  const API_URL = `https://svelte-backend-production.up.railway.app`;

  function handleDialogSubmit() {
    deleteBatch(deleteId);
  }
  let columns = [
    {id: "checkbox", label:""},
    { id: "batch_name", label: "Batch Name" },
    { id: "batch_status", label: "Batch Status" },
    { id: "total_employee", label: "Total Employees" },
    { id: "start_date", label: "Start Date" },
    { id: "end_date", label: "End Date" },
    { id: "actions", label: "Action" },
  ];
  /**
   * @type {any[]}
   */
  let newData: any = [];
  /**
   * @type {any[]}
   */
  let data:any[] = [];
  const batchDate = (dateString: String) => {
    const dateObj = new Date(dateString.valueOf());
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  const getBatches = async () => {
    isLoading=true;
    const response = await fetch(`${API_URL}/batches`);
    const json = await response.json();
    data = json || [];
    batchData();
    isLoading=false;
  };

  function batchData(){
    newData = data.map((item: any) => {
      const batch_name = item.batch_name;
      const batch_status = item.batch_status;
      const total_employee = item.total_employee;
      const start_date = batchDate(item.start_date);
      const end_date = batchDate(item.end_date);
      return {
        ...item,
        batch_name,
        batch_status,
        total_employee,
        start_date,
        end_date,
      };
    });
  }
  onMount(() => getBatches());

  const openAdd = () => {
    addModal.showModal = true;
  };

  const openEdit = (/** @type {any} */ row: any) => {
    editModal.showModal = true;
    editData = row;
  };
  // Subscribe to changes in the derived store

  const deleteBatch = async (ids: any) => {
    // dispatch('submit', form);
    try {
      const response = await fetch(`${API_URL}/batches/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids }),
      });

      if (response.ok) {
        // Handle success
        successMessage = "Batch deleted successfully!";
        showSuccess = true;
        showDialog=false;
        showDeleteButton = false; 
        getBatches();
      } else {
        // Handle error
        errorMessage = response.statusText;
        showError = true;
        showDialog=false;
        console.error("Failed to delete batch:", response.statusText);
      }
    } catch (error) {
      errorMessage = String(error);
      showError = true;
      showDialog=false;
      console.error("Failed to delete batch:", error);
    }
  };

  let selectedRowIndex: string | number | null = null;
  let showDeleteButton = false; 
  let deleteData:any=[];
  let selectedRows: number[] = [];

function toggleDeleteButton(rowIndex: number) {
  const isSelected = selectedRows.includes(rowIndex);

  if (isSelected) {
    selectedRows = selectedRows.filter((index) => index !== rowIndex);
  } else {
    selectedRows = [...selectedRows, rowIndex];
  }

  // Update anyCheckboxSelected variable
  const anyCheckboxSelected = selectedRows.length > 0;

  if (anyCheckboxSelected) {
    // Get an array of selected rows
    const selectedData = selectedRows.map((index) => newData[index]);
    
    showDeleteButton = true;
    deleteData = selectedData;
  } else {
    showDeleteButton = false;
    deleteData = null;
  }

  // Update the selectedRowIndex
  selectedRowIndex = anyCheckboxSelected ? rowIndex : null;
}

const deleteCheckbox =()=>{
  showDialog=true;
  deleteId=deleteData.map((item: { batch_name: any; }) => item.batch_name)
}

function filterData() {
    if (!batchFilter) {
      batchData();
    }
     else {
      newData = data.filter((item:any) => {
        return item.batch_name.includes(batchFilter);
      });
    }
  }

</script>

<template>
  <div
    class="prose max-w-none "
    style="display: flex; justify-content: space-between;
  align-items: center; width: 100%"
  >
    <div>
      <h2 style={`color: var(--app-primary-color, #d60016);`}>Batches</h2>
    </div>
    <div style="display: flex;
    align-items: center; margin-top:22px">
      <div>
        <input style="height: 3rem;" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-rgb(214, 0, 28) focus:shadow-outline" type="text" bind:value={batchFilter} on:input={() => filterData()} placeholder="Filter by Batch Name" />
      </div>    
      {#if showDeleteButton}
      <button class="btn btn-danger" style={`margin-left: 1rem; background-color: #63666B; height:3rem`} on:click={deleteCheckbox} >Delete</button>
    {/if}
      <button class="btn btn-info" style={`margin-left: 1rem; background-color: var(--app-primary-color, #d60016);
    border: none; height:3rem; 
    color: white;`} on:click={openAdd}>+ Add Batch</button>
    </div>
  </div>
  {#if isLoading}
      <div class="loading">
        <div class="loadingSpinner"></div>
        Loading...
      </div>
    {:else}
  <div class="table-container">
  <table class="data-table">
    <thead>
      <tr>
        {#each columns as column}
          <th>{column.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#if newData.length === 0}
          <tr>
            <td colspan={columns.length}>
              <div class="no-records">No records found.</div>
            </td>
          </tr>       
      {:else}
      {#each newData as row,rowIndex}
        <tr>
          {#each columns as column}
            <td>
              {#if column.id === "actions"}
                <div style="display:flex; justify-content: space-evenly;">
                  <div  class="tooltip" data-tip="Edit" on:click={() => openEdit(row)} on:keydown={openEdit}>
                    <img
                      src="https://img.icons8.com/?size=512&id=71201&format=png"
                      alt="edit"
                      style="height: 25px; cursor:pointer;"
                    />
                  </div>
                  
                </div>
                {:else if column.id=== "checkbox"}
                <input type="checkbox" bind:checked={row.selected} class="checkbox" on:change={() => toggleDeleteButton(rowIndex)}  />
              {:else}
                {row[column.id]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
      {/if}
    </tbody>
  </table>
  </div>
  {/if}
</template>
{#if addModal.showModal}
  <AddBatchModal
    showModal={addModal.showModal}
    getBatch={getBatches}
  />
{/if}
{#if editModal.showModal}
  <EditBatchModal
    showModal={editModal.showModal}
    {editData}
    id={editData._id}
    getBatch={getBatches}
  />
{/if}

{#if showError}
  <div class="toast toast-top toast-center">
    <div class="alert alert-error">
      <span class="notification-span">{errorMessage}</span>
      <button class="btn btn-ghost" on:click={() => (showError = false)}
        >Close</button
      >
    </div>
  </div>
{/if}

{#if showSuccess}
  <div class="toast toast-top toast-center">
    <div class="alert alert-success">
      <span class="notification-span">{successMessage}</span>
      <button class="btn btn-ghost" on:click={() => (showSuccess = false)}
        >Close</button
      >
    </div>
  </div>
{/if}
{#if showDialog}
<Dialog isOpen={showDialog} on:close={() => showDialog = false} on:submit={handleDialogSubmit}>
<div class="prose" >
  <h2 style="margin-bottom: 0;">Delete</h2>
  <p>Are you sure you want to delete?</p>
</div>
</Dialog>
{/if}

<style>
.table-container{
   width: 100%;
    overflow-x: auto;
}
 .data-table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    font-size: 14px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

@media (max-width: 550px) {
    .data-table {
        width: 100%; 
    }

    .data-table thead th,
    .data-table tbody td {
        padding: 8px;
        font-size: 12px; 
    }

    .prose.max-w-none {
        flex-direction: column;
        align-items: flex-start;
    }

    .prose.max-w-none > div:first-child,
    .prose.max-w-none > div:last-child {
        width: 100%; 
    }
    .prose.max-w-none > div:last-child {
        margin-top:-1rem;
        margin-bottom: 2rem;
    }
}


  .data-table thead th {
    background-color: #f2f2f2;
    color: #333333;
    text-align: center; /* Center the header text */
    padding: 12px; /* Increase padding for better spacing */
    font-weight: bold;
    border-bottom: 1px solid #cccccc;
  }

  .data-table tbody td {
    padding: 12px; /* Increase padding for better spacing */
    border-bottom: 1px solid #cccccc;
    text-align: center; /* Center the cell content */
    vertical-align: middle; /* Center cell content vertically */
  }

  .data-table tbody tr:nth-child(even) {
    /* Apply alternating row colors */
    background-color: #f8f8f8;
  }

  .data-table tbody tr:hover {
    /* Apply hover effect */
    background-color: #f0f0f0;
  }


  .notification-span {
    width: 19rem;
    color: black;
  }

  .no-records {
    padding: 20px;
    text-align: center;
    color: #777;
  }

  .loading {
        text-align: center;
        padding: 20px;
        font-size: 18px;
        color: #777;
      }

      .loadingSpinner {
        border: 4px solid rgba(0, 0, 0, 0.3);
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
        margin: 20px auto;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
</style>
