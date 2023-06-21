<script lang="ts">
  import { onMount } from "svelte";
  export let editData: any;
  export let id: any;
  let showError = false;
  let showSuccess = false;
  let successMessage = "";
  let errorMessage = "";
  interface EditData {
    employee_name: String;
    employee_id: Number;
    employee_batch: String;
    employee_number: Number;
    employee_email: String;
    employee_status: String;
  }
  export let renderEmployee:()=>void;
  let form: EditData;
  onMount(() => {
    form = {
      employee_name: editData.employee_name,
      employee_id: editData.employee_id,
      employee_batch: editData.employee_batch,
      employee_number: editData.employee_number,
      employee_email: editData.employee_email,
      employee_status: editData.employee_status,
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
    // dispatch('submit', form);
    try {
      const response = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // Handle success
        successMessage = "Employee edited successfully!";
        showSuccess = true;
        renderEmployee();
        console.log("Form submitted successfully!");
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
      case "employee_name":
        form.employee_name = event.target.value;
        break;
      case "employee_id":
        form.employee_id = event.target.value;
        break;
      case "employee_batch":
        form.employee_batch = event.target.value;
        break;
      case "employee_number":
        form.employee_number = event.target.value;
        break;
      case "employee_email":
        form.employee_email = event.target.value;
        break;
      case "employee_status":
        form.employee_status = event.target.value;
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
        <h2 class="">Edit Employee</h2>
        <form on:submit={handleSubmit}>
          <input
            autocorrect="off"
            type="text"
            id="employee_name"
            name="name"
            placeholder="Employee name..."
            class="input input-bordered w-full"
            required
            bind:value={editData.employee_name}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="Number"
            id="employee_id"
            name="id"
            placeholder="Employee Id..."
            class="input input-bordered w-full"
            required
            value={editData.employee_id}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="text"
            name="batch"
            id="employee_batch"
            placeholder="Employee Batch.."
            class="input input-bordered w-full"
            required
            value={editData.employee_batch}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="number"
            id="employee_number"
            name="number"
            placeholder="Employee Number..."
            class="input input-bordered w-full"
            required
            value={editData.employee_number}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="email"
            id="employee_email"
            name="email"
            placeholder="Employee email..."
            class="input input-bordered w-full"
            required
            value={editData.employee_email}
            on:change={handleInput}
          />

          <input
            autocorrect="off"
            type="text"
            id="employee_status"
            name="status"
            placeholder="Employee status..."
            class="input input-bordered w-full"
            required
            value={editData.employee_status}
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
