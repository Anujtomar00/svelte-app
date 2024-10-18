<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  let showError = false;
  let showSuccess = false;
  let successMessage = "";
  let errorMessage = "";
  const dispatch = createEventDispatcher();
  const API_URL = `https://svelte-backend-production.up.railway.app`;
  export let getBatch: any;
  let form = {
    batch_name: "",
    start_date: "",
    end_date: "",
    batch_status: true || false,
    total_employee: 0,
  };

  const formFields = writable(form);

  export let showModal = false; // Flag to indicate whether or not to show the modal
  const handleClose = () => {
    // Close the modal
    showModal = false;
  };

  /**
   * @param {{ key: string; }} event
   */
  function handleKeyDown(event: any) {
    if (event.key === "Enter" || event.key === " ") {
      handleClose();
    }
  }

  /**
   * @param {{ preventDefault: () => void; }} event
   */
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/batches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // Handle success
        successMessage = "Batch submitted successfully!";
        showSuccess = true;
        getBatch();
        showModal = false;
      } else {
        // Handle error
        errorMessage = response.statusText;
        showError = true;
        showModal = false;
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      errorMessage = String(error);
      showError = true;
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
      case "status":
        form.batch_status = event.target.value;
        break;
      case "total_employee":
        form.total_employee = event.target.value;
        break;
    }
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
        <h2 class="">Add Batch</h2>
        <form on:submit={handleSubmit}>
          <input
            autocorrect="off"
            type="text"
            id="batch_name"
            name="Batch Name"
            placeholder="Batch name..."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red w-full"
            required
            on:input={handleInput}
          />

          <input
            autocorrect="off"
            type="text"
            id="start_date"
            name="Start Date"
            placeholder="Start date (dd/mm/yyyy)"
            class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red"
            required
            on:input={handleInput}
          />

          <input
            autocorrect="off"
            type="text"
            id="end_date"
            name="End Date"
            placeholder="End date (dd/mm/yyyy)"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red w-full"
            required
            on:change={handleInput}
          />

          <select
            id="status"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red"
            on:input={handleInput}
            style="margin-top: 2rem;"
          >
          <option selected>Select status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>

          <input
            autocorrect="off"
            type="number"
            id="total_employee"
            name="Total Employees"
            placeholder="Total Employees..."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red w-full"
            required
            on:input={handleInput}
          />

          <p class="flex items-center gap-4 mt-12">
            <button class="btn btn-primary" style={`background-color: var(--app-primary-color, #d60016);
    border: none;
    color: white;`} type="submit">Submit</button>
            <button class="btn" style={`background-color: #63666B;`} on:click={handleClose}>Cancel</button>
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
  @media (max-width: 700px) {
    .modal-content {
    width: 90%;
    }
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

  .notification-span {
    width: 19rem;
    color: black;
  }
  /* Style the form submit button */
</style>
