<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import AddBatchModal from "./addBatchModal.svelte";
  import EditBatchModal from "./editBatchModal.svelte";
  import Dialog from '../Dialog/dialog.svelte';
  const addModal = { showModal: false };
  const editModal = { showModal: false };
  let showError = false;
  let showSuccess = false;
  let successMessage = "";
  let errorMessage = "";
  let editData: any;
  let deleteId: any[]=[];
  let showDialog = false;

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
    { id: "actions", label: "" },
  ];
  /**
   * @type {any[]}
   */
  let newData: any = [];
  /**
   * @type {any[]}
   */
  let data = [];
  const batchDate = (dateString: String) => {
    const dateObj = new Date(dateString.valueOf());
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  const getBatches = async () => {
    const response = await fetch("http://localhost:3000/batches");
    const json = await response.json();
    data = json;
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
  };
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
      const response = await fetch(`http://localhost:3000/batches/delete`, {
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

</script>

<template>
  <div
    class="prose max-w-none "
    style="display: flex; justify-content: space-between;
  align-items: center;
"
  >
    <div>
      <h2>Batches</h2>
    </div>
    <div>
      {#if showDeleteButton}
      <button class="btn btn-danger" style={`margin-right: 1rem;`} on:click={deleteCheckbox} >Delete</button>
    {/if}
      <button class="btn btn-info" on:click={openAdd}>+ Add Batch</button>
    </div>
  </div>
  <table class="data-table">
    <thead>
      <tr>
        {#each columns as column}
          <th>{column.label}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
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
                      style="height: 37px; cursor:pointer;"
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
    </tbody>
  </table>
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
  <h1 style="margin-bottom: 0;">Delete</h1>
  <p>Are you sure you want to delete?</p>
</div>
</Dialog>
{/if}

<style>
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .data-table thead th {
    background-color: #f2f2f2;
    color: #333333;
    text-align: left;
    padding: 10px;
    font-weight: bold;
    border-bottom: 1px solid #cccccc;
  }

  .data-table td {
    padding: 10px;
    border-bottom: 1px solid #cccccc;
  }

  .data-table td.align-right {
    text-align: right;
  }

  .notification-span {
    width: 19rem;
    color: black;
  }
</style>
