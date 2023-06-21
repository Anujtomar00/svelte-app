<script lang="ts">
  import { onMount, afterUpdate } from "svelte";
  import AddBatchModal from "./addBatchModal.svelte";
  import EditBatchModal from "./editBatchModal.svelte";
  const addModal = { showModal: false };
  const editModal = { showModal: false };
  let showError = false;
  let showSuccess = false;
  let successMessage = "";
  let errorMessage = "";
  let editData: any;
  let isDataChanged = true;

  let columns = [
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
  console.log(newData);
  // Subscribe to changes in the derived store

  const deleteBatch = async (id: any) => {
    // dispatch('submit', form);
    try {
      const response = await fetch(`http://localhost:3000/batches/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle success
        successMessage = "Batch deleted successfully!";
        showSuccess = true;
        getBatches();
        console.log("Batch deleted successfully!");
      } else {
        // Handle error
        errorMessage = response.statusText;
        showError = true;
        console.error("Failed to delete batch:", response.statusText);
      }
    } catch (error) {
      errorMessage = String(error);
      showError = true;
      console.error("Failed to delete batch:", error);
    }
  };
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
      {#each newData as row}
        <tr>
          {#each columns as column}
            <td>
              {#if column.id === "actions"}
                <div style="display:flex; justify-content: space-evenly;">
                  <div on:click={() => openEdit(row)} on:keydown={openEdit}>
                    <img
                      src="https://img.icons8.com/?size=1x&id=65358&format=png"
                      alt="edit"
                      style="height: 40px;"
                    />
                  </div>
                  <div
                    on:click={() => deleteBatch(row._id)}
                    on:keydown={deleteBatch}
                  >
                    <img
                      src="https://img.icons8.com/?size=1x&id=102350&format=png"
                      alt="delete"
                      style="height: 40px;"
                    />
                  </div>
                </div>
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
