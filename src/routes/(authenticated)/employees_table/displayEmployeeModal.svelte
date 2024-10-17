<script lang="ts">
  import Timeline from "$lib/components/Timeline.svelte";
  import TimelineItem from "$lib/components/TimelineItem.svelte";
  import TimelineSeparator from "$lib/components/TimelineSeparator.svelte";
  import TimelineDot from "$lib/components/TimelineDot.svelte";
  import TimelineConnector from "$lib/components/TimelineConnector.svelte";
  import TimelineContent from "$lib/components/TimelineContent.svelte";
  import TimelineOppositeContent from "$lib/components/TimelineOppositeContent.svelte";

  let showSummary = true;
  let showTimeline = false;

  function handleSummary() {
    showSummary = true;
    showTimeline = false;
  }
  function handleTimeline() {
    showSummary = false;
    showTimeline = true;
  }

  const colors = {
    first: "#7CD5E2",
    second: "#FEC048",
    third: "#DD84C1",
    forth: "#FB6958",
  };

  const items = [
    { year: "Nov 21", title: "Joined Nashtech", color: colors.first },
    { year: "Jan 22", title: "Completed KIP", color: colors.second },
    { year: "July 22", title: "Completed KUP", color: colors.third },
    { year: "July 22", title: "Job Title Changed", color: colors.forth },
  ];

  export let showModal = false;
  export let viewData: any = {
    employee_name: "John Doe",
    employee_id: "12345",
    employee_batch: "Batch 2023",
    employee_email: "john.doe@example.com",
    employee_status: "Active",
    practice: "Software Development",
    employee_details: {
      personal_email: "johndoe@gmail.com",
      age: 30,
      dob: "1994-05-01",
      gender: "Male",
      phone_number: "123-456-7890",
      github_id: "johnDoeGitHub",
      address: "123 Main St, City, Country",
      education: {
        degree: "Bachelor of Science in Computer Science",
        college_name: "XYZ University",
        completion_year: "2016",
        percentage: "85%",
      },
    },
  };

  function handleClose(event: any) {
    event.preventDefault();
    showModal = false;
  }
</script>

{#if showModal}
  <div class="modal-container flex flex-col">
    <div class="modal-background" on:click={handleClose} />
    <div class="modal-content">
      <div class="prose">
        <h2 class="text-4xl font-bold text-center mb-10">Employee Details</h2>
        <div class="tab">
          <button class:selected={showSummary} on:click={handleSummary}
            >Details</button
          >
          <button class:selected={showTimeline} on:click={handleTimeline}
            >Timeline</button
          >
        </div>

        {#if showSummary}
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
              <h2 class="section-title">Personal Information</h2>
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

            <div class="bg-aliceblue p-4 shadow-md">
              <h2 class="section-title">Education Qualification</h2>
              <div class="info-item">
                <p class="label">Degree:</p>
                <p class="value">
                  {viewData.employee_details.education.degree}
                </p>
              </div>
              <div class="info-item">
                <p class="label">College Name:</p>
                <p class="value">
                  {viewData.employee_details.education.college_name}
                </p>
              </div>
              <div class="info-item">
                <p class="label">Date of Completion:</p>
                <p class="value">
                  {viewData.employee_details.education.completion_year}
                </p>
              </div>
              <div class="info-item">
                <p class="label">Percentage:</p>
                <p class="value">
                  {viewData.employee_details.education.percentage}
                </p>
              </div>
            </div>
          </div>
        {/if}

        {#if showTimeline}
          <div class="personal-info">
            <h2 class="section-title">Timeline</h2>
            <Timeline position="alternate">
              {#each items as item}
                <TimelineItem>
                  <TimelineOppositeContent slot="opposite-content">
                    <p class="oposite-content-title">{item.year}</p>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot style={`background-color: ${item.color};`} />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <h3 class="content-title">{item.title}</h3>
                  </TimelineContent>
                </TimelineItem>
              {/each}
            </Timeline>
          </div>
        {/if}
        <button class="dialog-close-button" on:click={handleClose}>Close</button
        >
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
    margin-top: 1rem;
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
    left: 25%;
    height: 95%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tab {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  button.selected {
    background-color: #d60016;
    color: #fff;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #f5f5f5;
    color: #555;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #e0e0e0;
  }
 .prose{
  width: 100%;
 }
  .section-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
    font-size: 0.9rem;
  }

  .dialog-close-button {
    padding: 10px 20px;
    margin-top: 1rem;
    border: none;
    background-color: #d60016;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
  }

  .dialog-close-button:hover {
    background-color: #b40012;
  }
  @media (max-width: 700px) {
    .modal-content {
      width: 90%;
      left: 44%;
    }
    .prose{
      width: 102%;
    }
  }
  @media (max-width: 375px) {
    .modal-content {
      width: 90%;
      left: 44%;
    }
    .prose{
      width: 110%;
    }
  }
  @media (max-width: 425) {
    .modal-content {
      width: 90%;
      left: 44%;
    }
    .prose{
      width: 103%;
    }
  }
  @media (max-width: 768) {
    .modal-content {
      width: 90%;
      left: 44%;
    }
    .prose{
      width: 100%;
    }
  }

</style>
