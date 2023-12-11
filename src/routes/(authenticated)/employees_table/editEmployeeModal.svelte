<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
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
    practice: String;
    employee_details: {
      age: Number;
      dob: String;
      gender: String;
      personal_email: String;
      phone_number: Number;
      github_id: String;
      address: "";
      education: {
        degree: String;
        completion_year: String;
        college_name: String;
        percentage: String;
      };
    };
  }
  /**
   * @type {any[]}
   */
  let newData: any = [];
  /**
   * @type {any[]}
   */
  let data = [];
  export let renderEmployee: () => void;
  let form: EditData;
  function updateForm() {
    form = {
      employee_name: editData.employee_name,
      employee_id: editData.employee_id,
      employee_batch: editData.employee_batch,
      employee_number: editData.employee_number,
      employee_email: editData.employee_email,
      employee_status: editData.employee_status,
      practice: editData.practice,
      employee_details: {
        age: editData.employee_details.age,
        dob: editData.employee_details.dob,
        gender: editData.employee_details.gender,
        personal_email: editData.employee_details.personal_email,
        phone_number: editData.employee_details.phone_number,
        github_id: editData.employee_details.github_id,
        address: editData.employee_details.address,
        education: {
          degree: editData.employee_details.education.degree,
          completion_year: editData.employee_details.education.completion_year,
          college_name: editData.employee_details.education.college_name,
          percentage: editData.employee_details.education.percentage,
        },
      },
    };
  }
  
  onMount(updateForm)
  afterUpdate(updateForm)
  //  const formFields = writable(form);

  export let showModal = false; // Flag to indicate whether or not to show the modal
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

  const getBatches = async () => {
    const response = await fetch("http://localhost:3000/batches");
    const json = await response.json();
    data = json;
    newData = data.map((item: any) => {
      const batch_name = item.batch_name;
      return {
        batch_name,
      };
    });
  };
  getBatches();

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
      case "practice":
        form.practice = event.target.value;
        break;
      case "age":
        form.employee_details.age = event.target.value;
        break;
      case "dob":
        form.employee_details.dob = event.target.value;
        break;
      case "gender":
        form.employee_details.gender = event.target.value;
        break;
      case "personal_email":
        form.employee_details.personal_email = event.target.value;
        break;
      case "phone_number":
        form.employee_details.phone_number = event.target.value;
        break;
      case "github_id":
        form.employee_details.github_id = event.target.value;
        break;
      case "address":
        form.employee_details.address = event.target.value;
        break;

      case "degree":
        form.employee_details.education.degree = event.target.value;
        break;
      case "completion_year":
        form.employee_details.education.completion_year = event.target.value;
        break;
      case "college_name":
        form.employee_details.education.college_name = event.target.value;
        break;
      case "percentage":
        form.employee_details.education.percentage = event.target.value;
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
      <div class="prose" style="display: contents;">
        <h1 class="text-4xl font-bold text-center mb-4">Edit Employee</h1>
        <form on:submit={handleSubmit}>
          <div class="grid-container">
            <div class="bg-aliceblue p-4 shadow-md">
              <h2 class="">Basic Details</h2>
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
              <select
                id="employee_batch"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                on:input={handleInput}
                bind:value={editData.employee_batch}
                style="margin-top: 2rem;"
              >
                <option>Select a batch</option>
                {#each newData as item}
                  <option value={item.batch_name}>{item.batch_name}</option>
                {/each}
              </select>

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

              <select
                id="employee_status"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                on:input={handleInput}
                bind:value={editData.employee_status}
                style="margin-top: 2rem;"
              >
                <option selected>Select status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Left">Left</option>
                <option value="On Hold">On Hold</option>
              </select>

              <select
                id="practice"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                on:input={handleInput}
                bind:value={editData.practice}
                style="margin-top: 2rem;"
              >
                <option selected>Select practice</option>
                <option value="KUP">KUP</option>
                <option value="KIP">KIP</option>
                <option value="Frontend">Frontend</option>
                <option value="Devops">Devops</option>
                <option value="Java">Java</option>
                <option value="Test Automation">Test Automation</option>
                <option value="Scala">Scala</option>
              </select>
            </div>

            <div class="p-4 bg-aliceblue shadow-md">
              <div class="personal-info">
                <h2 class="section-title">Personal Information</h2>

                <input
                  autocorrect="off"
                  type="email"
                  id="personal_email"
                  name="email"
                  placeholder="Personal Email..."
                  class="input input-bordered w-full"
                  required
                  bind:value={editData.employee_details.personal_email}
                  on:input={handleInput}
                />

                <input
                  autocorrect="off"
                  type="number"
                  id="age"
                  name="number"
                  placeholder="Age..."
                  class="input input-bordered w-full"
                  required
                  bind:value={editData.employee_details.age}
                  on:input={handleInput}
                />

                <input
                  autocorrect="off"
                  type="text"
                  id="dob"
                  name="text"
                  placeholder="Date of Birth..."
                  class="input input-bordered w-full"
                  required
                  bind:value={editData.employee_details.dob}
                  on:input={handleInput}
                />

                <select
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  on:input={handleInput}
                  style="margin-top: 2rem;"
                >
                  <option selected>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <input
                  autocorrect="off"
                  type="number"
                  id="phone_number"
                  name="number"
                  placeholder="Phone Number..."
                  class="input input-bordered w-full"
                  required
                  bind:value={editData.employee_details.phone_number}
                  on:input={handleInput}
                />

                <input
                  autocorrect="off"
                  type="text"
                  id="github_id"
                  name="text"
                  placeholder="GitHub ID..."
                  class="input input-bordered w-full"
                  required
                  bind:value={editData.employee_details.github_id}
                  on:input={handleInput}
                />

                <input
                  autocorrect="off"
                  type="text"
                  id="address"
                  name="text"
                  placeholder="Address..."
                  class="input input-bordered w-full"
                  required
                  bind:value={editData.employee_details.address}
                  on:input={handleInput}
                />
              </div>
            </div>

              <div class="p-4 bg-aliceblue shadow-md">
                <div class="education-info">
                  <h2 class="section-title">Education Qualification</h2>
                  <input
                    autocorrect="off"
                    type="text"
                    id="degree"
                    name="text"
                    placeholder="Degree..."
                    class="input input-bordered w-full"
                    required
                    bind:value={editData.employee_details.education.degree}
                    on:input={handleInput}
                  />

                  <input
                    autocorrect="off"
                    type="text"
                    id="college_name"
                    name="text"
                    placeholder="College Name..."
                    class="input input-bordered w-full"
                    required
                    bind:value={editData.employee_details.education
                      .college_name}
                    on:input={handleInput}
                  />

                  <input
                    autocorrect="off"
                    type="text"
                    id="completion_year"
                    name="text"
                    placeholder="Date of Completion..."
                    class="input input-bordered w-full"
                    required
                    bind:value={editData.employee_details.education
                      .completion_year}
                    on:input={handleInput}
                  />

                  <input
                    autocorrect="off"
                    type="text"
                    id="percentage"
                    name="percentage"
                    placeholder="Percentage..."
                    class="input input-bordered w-full"
                    required
                    bind:value={editData.employee_details.education.percentage}
                    on:input={handleInput}
                  />
                </div>
              </div>

              <p class="flex items-center gap-4 mt-12">
                <button class="btn btn-primary" style={`background-color: var(--app-primary-color, #d60016);
    border: none;
    color: white;`} type="submit">Submit</button>
                <button class="btn" style={`background-color: #63666B;`} on:click={handleClose} type="button"
                  >Cancel</button
                >
              </p>
          </div>
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

  .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
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
  .bg-aliceblue {
    background-color: aliceblue;
    border-radius: 10px;
  }

  .modal-content {
    overflow: auto;
    position: relative;
    z-index: 1000;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    height: 95%;
    width: 50%;
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
