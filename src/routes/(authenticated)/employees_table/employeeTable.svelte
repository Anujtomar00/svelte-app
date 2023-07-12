<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import AddEmployeeModal from "./addEmployeeModal.svelte";
  import EditEmployeeModal from "./editEmployeeModal.svelte";
  import { derived } from "svelte/store";
  import Dialog from '../Dialog/dialog.svelte';
  import DisplayEmployeeModal from "./displayEmployeeModal.svelte";
  const addModal = { showModal: false };
  const editModal = { showModal: false };
  const viewModal = { showModal: false };
  let refreshTable = false;
  let showError = false;
  let showSuccess = false;
  let successMessage = "";
  let errorMessage = "";
  let editData: any;
  let viewData: any;
  let id: any;
  let deleteId:any;
  let showDialog = false;

  function handleDialogSubmit() {
    deleteEmployee(deleteId);
  }

  let columns = [
    {id: "checkbox", label:""},
    { id: "employee_id", label: "ID" },
    { id: "employee_name", label: "Name" },
    { id: "employee_batch", label: "Batch" },
    { id: "employee_status", label: "Status" },
    { id: "employee_email", label: "Email" },
    { id: "practice", label: "Practice" },
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
  const getEmployee =async()=>{
    const response = await fetch("http://localhost:3000/employees");
    const json = await response.json();
    data = json;
    newData = data.map((item: any) => {
      const employee_name = item.employee_name;
      const employee_id = item.employee_id;
      const employee_batch = item.employee_batch;
      const employee_status = item.employee_status;
      const employee_number = item.employee_number;
      const employee_email = item.employee_email;
      const practice= item.practice;

      return {
        ...item,
        employee_name,
        employee_id,
        employee_batch,
        employee_status,
        employee_number,
        employee_email,
        practice
      };
    });
  }
  onMount(()=>getEmployee());

  const openAdd = () => {
    addModal.showModal = true;
  };

  const openEdit = (/** @type {any} */ row: any) => {
    editModal.showModal = true;
    editData = row;
  };

  const openView = (/** @type {any} */ row: any) => {
    viewModal.showModal = true;
    viewData = row;
  };
  let derivedRows = derived(newData, ($rows) => $rows);

  // Subscribe to changes in the derived store
  derivedRows.subscribe(() => {
    refreshTable = !refreshTable;
  });

  const deleteEmployee = async (ids: any) => {
    // dispatch('submit', form);
    try {
      const response = await fetch(`http://localhost:3000/employees/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids }),
      });

      if (response.ok) {
        // Handle success
        successMessage = "Employee deleted successfully!";
        showSuccess = true;
        showDialog=false;
        showDeleteButton = false; 
        getEmployee();
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
  deleteId=deleteData.map((item: { _id: any; }) => item._id)
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
      <h2>Employees</h2>
    </div>
    <div>
      {#if showDeleteButton}
      <button class="btn btn-danger" style={`margin-right: 1rem;`} on:click={deleteCheckbox} >Delete</button>
    {/if}
      <button class="btn btn-info" on:click={openAdd}>+ Add Employee</button>
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
                  <div  class="tooltip" data-tip="View" on:click={() => openView(row)} on:keydown={openView}>
                    <img 
                      src="https://img.icons8.com/?size=512&id=11359&format=png"
                      alt="edit"
                      style="height: 40px; cursor:pointer;"
                    />
                  </div>
                  <div  class="tooltip" data-tip="Edit" on:click={() => openEdit(row)} on:keydown={openEdit}>
                    <img
                      src="https://img.icons8.com/?size=512&id=71201&format=png"
                      alt="edit"
                      style="height: 40px; cursor:pointer;"
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
  <AddEmployeeModal showModal={addModal.showModal} renderEmployee={getEmployee}/>
{/if}
{#if editModal.showModal}
  <EditEmployeeModal
    showModal={editModal.showModal}
    {editData}
    id={editData._id}
    renderEmployee={getEmployee}
  />
{/if}

{#if viewModal.showModal}
  <DisplayEmployeeModal
    showModal={viewModal.showModal}
    {viewData}
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

  .notification-span{
    width: 19rem;
    color: black;
  }
</style>
