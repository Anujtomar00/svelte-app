<script lang="ts">
  import { onMount } from "svelte";
  let showError = false;
  let showSuccess = false;
  let successMessage ='';
  let errorMessage='';
  export let editData: any;
  export let id: any;
  export let getBatch:any;
  console.log("id", id);
  interface EditData {
    batch_name: String;
    start_date: Date;
    end_date: Date;
    batch_status: String;
    total_employee: Number;
  }
  let form: EditData;
  onMount(() => {
    form = {
      batch_name: editData.batch_name,
      start_date: editData.start_date,
      end_date: editData.end_date,
      batch_status: editData.batch_status,
      total_employee: editData.total_employee,
    };
  });

  //  const formFields = writable(form);

  export let showModal = false; // Flag to indicate whether or not to show the modal
  console.log(editData);
  const handleClose = (event: any) => {
    // Close the modal
    event.preventDefault();
    showModal = false;
  };

  /**
   * @param {{ key: string; }} event
   */
  function handleKeyDown(event: any) {
    if (event.key === "Enter" || event.key === " ") {
      handleClose(event);
    }
  }
  /**
   * @param {{ preventDefault: () => void; }} event
   */
  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Submitting form:", form);
    // dispatch('submit', form);
    try {
      const response = await fetch(`http://localhost:3000/batches/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // Handle success
        successMessage='Batch edited successfully!';
        showSuccess=true;
        getBatch();
        console.log("Form submitted successfully!");
        showModal = false;
      } else {
        // Handle error
        errorMessage=response.statusText;
        showError=true;
        showModal = false;
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      errorMessage=String(error);
      showError=true;
      showModal = false;
      console.error("Failed to submit form:", error);
    }
  }

  function handleInput(event: any) {
    switch (event.target.id) {
      case "batch_name":
        form.batch_name = event.target.value;
        break;
      case "start_date":
        form.start_date = event.target.value;
        break;
      case "end_date":
        form.end_date = event.target.value;
        break;
      case "batch_status":
        form.batch_status = event.target.value;
        break;
      case "total_employee":
        form.total_employee = event.target.value;
        break;
    }
    console.log("Edit", form);
  }
</script>

<template>
  <div
    class="modal-container"
    style={showModal ? "display: block;" : "display: none;"}
  >
    <div
      class="modal-background"
      on:click={handleClose}
      on:keydown={handleKeyDown}
    />
    <div class="modal-content">
      <div class="prose">
        <h2 class="">Edit Batch</h2>
        <form on:submit={handleSubmit}>
          <input
            autocorrect="off"
            type="text"
            id="batch_name"
            name="name"
            placeholder="Batch name..."
            class="input input-bordered w-full"
            required
            bind:value={editData.batch_name}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="date"
            id="start_date"
            name="date"
            placeholder="Start date..."
            class="input input-bordered w-full"
            required
            value={editData.start_date}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="date"
            id="end_date"
            name="date"
            placeholder="End date..."
            class="input input-bordered w-full"
            required
            value={editData.end_date}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="status"
            name="status"
            id="batch_status"
            placeholder="Status.."
            class="input input-bordered w-full"
            required
            value={editData.batch_status}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="number"
            id="total_employee"
            name="number"
            placeholder="Total Employees..."
            class="input input-bordered w-full"
            required
            value={editData.total_employee}
            on:change={handleInput}
          />

          <p class="flex items-center gap-4 mt-12">
            <button class="btn btn-primary" type="submit">Submit</button>
            <button class="btn" on:click={handleClose} type="button"
              >Cancel</button
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
{#if showError}
<div class="toast toast-top toast-center">
  <div class="alert alert-error">
    <span class="notification-span">{errorMessage}</span>
    <button class="btn btn-ghost" on:click={() => (showError = false)}>Close</button>
  </div>
</div>
{/if}

{#if showSuccess}
<div class="toast toast-top toast-center">
  <div class="alert alert-success">
    <span class="notification-span">{successMessage}</span>
    <button class="btn btn-ghost" on:click={() => (showSuccess = false)}>Close</button>
  </div>
  </div>
{/if}


<style>
  .modal-container {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 900;
  }

  .modal-content {
    position: relative;
    z-index: 1000;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
  }

  /* Style the form labels */
  label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
  }

  /* Style the form inputs */
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 2rem;
    border-radius: 4px;
    border: none;
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.1);
  }

  .notification-span{
    width: 19rem;
    color: black;
  }
  /* Style the form submit button */
</style>
