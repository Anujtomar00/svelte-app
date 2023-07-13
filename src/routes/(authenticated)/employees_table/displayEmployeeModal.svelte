<script lang="ts">
  export let showModal = false; // Flag to indicate whether or not to show the modal
  
   export let viewData:any;
    function handleClose(event:any) {
      event.preventDefault();
        showModal = false;
    }

    function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      handleClose(event);
    }
  }
  </script>
  
  {#if showModal}
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
        <h1 class="text-4xl font-bold text-center mb-4">Employee Details</h1>
        <div class="grid-container">
          <div class="bg-aliceblue p-4 shadow-md">
            <h2 class="section-title">Basic Details</h2>

            <div class="info-item">
              <p class="label">Name:</p>
              <p class="value">{viewData.employee_name}</p>
            </div>

            <div class="info-item">
              <p class="label">Employee Id:</p>
              <p class="value">{viewData.employee_id}</p>
            </div>
           

            <div class="info-item">
              <p class="label">Batch:</p>
              <p class="value">{viewData.employee_batch}</p>
            </div>


            <div class="info-item">
              <p class="label">Email:</p>
              <p class="value">{viewData.employee_email}</p>
            </div>

            <div class="info-item">
              <p class="label">Status:</p>
              <p class="value">{viewData.employee_status}</p>
            </div>

            <div class="info-item">
              <p class="label">Practice:</p>
              <p class="value">{viewData.practice}</p>
            </div>
          </div>

          <div class="bg-aliceblue p-4 shadow-md">
        <div class="personal-info">
          <h2 class="section-title">Personal Information</h2>
          <div class="info-item">
            <p class="label">Name:</p>
            <p class="value">{viewData.employee_name}</p>
          </div>
          <div class="info-item">
            <p class="label">Work Email:</p>
            <p class="value">{viewData.employee_email}</p>
          </div>
          <div class="info-item">
            <p class="label">Personal Email:</p>
            <p class="value">{viewData.employee_details.personal_email}</p>
          </div>
          <div class="info-item">
            <p class="label">Age:</p>
            <p class="value">{viewData.employee_details.age}</p>
          </div>
          <div class="info-item">
            <p class="label">Date of Birth:</p>
            <p class="value">{viewData.employee_details.dob}</p>
          </div>
          <div class="info-item">
            <p class="label">Gender:</p>
            <p class="value">{viewData.employee_details.gender}</p>
          </div>
          <div class="info-item">
            <p class="label">Phone Number:</p>
            <p class="value">{viewData.employee_details.phone_number}</p>
          </div>
          <div class="info-item">
            <p class="label">GitHub ID:</p>
            <p class="value">{viewData.employee_details.github_id}</p>
          </div>
          <div class="info-item">
            <p class="label">Address:</p>
            <p class="value">{viewData.employee_details.address}</p>
          </div>
        </div>
        </div>
  
        <div class="bg-aliceblue p-4 shadow-md">

        <div class="education-info">
          <h2 class="section-title">Education Qualification</h2>
          <div class="info-item">
            <p class="label">Degree:</p>
            <p class="value">{viewData.employee_details.education.degree}</p>
          </div>
          <div class="info-item">
            <p class="label">College Name:</p>
            <p class="value">{viewData.employee_details.education.college_name}</p>
          </div>
          <div class="info-item">
            <p class="label">Date of Completion:</p>
            <p class="value">{viewData.employee_details.education.completion_year}</p>
          </div>
          <div class="info-item">
            <p class="label">Percentage:</p>
            <p class="value">{viewData.employee_details.education.percentage}</p>
          </div>
        </div>
        </div>
        </div>
        <button class="dialog-close-button" on:click={handleClose}>Close</button>
      </div>
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

 

    .grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 3rem;
  }
  
  .bg-aliceblue {
    background-color: aliceblue;
    margin-left:6rem;
    margin-right:6rem;
    border-radius: 10px;
  }
    .dialog-content {
        overflow: auto;
        height: 96%;
        width: 50%;      
        background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
  
    .heading{
        text-align: center;
        font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    .section-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  
    .info-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  
    .label {
      width: 27%;
      font-weight: bold;
    }
  
  
    .divider {
      margin: 2rem 0;
      border: none;
      border-top: 1px solid #ccc;
    }
  
    .dialog-close-button {
      padding: 0.5rem 1rem;
      background-color: #333;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 1rem;
    }
  </style>
  