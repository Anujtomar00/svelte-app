<script lang="ts">
  import Timeline from "$lib/components/Timeline.svelte";
  import TimelineItem from "$lib/components/TimelineItem.svelte";
  import TimelineSeparator from "$lib/components/TimelineSeparator.svelte";
  import TimelineDot from "$lib/components/TimelineDot.svelte";
  import TimelineConnector from "$lib/components/TimelineConnector.svelte";
  import TimelineContent from "$lib/components/TimelineContent.svelte";
  import TimelineOppositeContent from "$lib/components/TimelineOppositeContent.svelte";

  export let showModal = false; // Flag to indicate whether or not to show the modal
  let showSummary = true;
  let showTimeline = false;
  export let viewData: any;
  function handleClose() {
    showModal = false;
  }
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
    {
      year: "Nov 21",
      title: "Joined Nashtech",
      color: colors.first,
    },
    {
      year: "Jan 22",
      title: "Completed KIP",
      color: colors.second,
    },
    {
      year: "July 22",
      title: "Completed KUP",
      color: colors.third,
    },
    {
      year: "July 22",
      title: "Job Title Changed",
      color: colors.forth,
    },
  ];
</script>

{#if showModal}
  <div class="dialog-overlay">
    <div class="dialog-content">
      <h1 class="heading">Employee Details</h1>
      <button class="dialog-close-button" on:click={handleSummary}
        >Summary</button
      >
      <button class="dialog-close-button" on:click={handleTimeline}
        >Timeline</button
      >
      {#if showSummary}
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

        <hr class="divider" />

        <div class="education-info">
          <h2 class="section-title">Education Qualification</h2>
          <div class="info-item">
            <p class="label">Degree:</p>
            <p class="value">{viewData.employee_details.education.degree}</p>
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
      {/if}
      {#if showTimeline}
        <div class="personal-info">
          <h2 class="section-title">Timeline</h2>
          <Timeline
            position="alternate"
            style={`border-radius: 3%; padding: 1rem;`}
          >
            {#each items as item}
              <TimelineItem>
                <TimelineOppositeContent slot="opposite-content">
                  <p class="oposite-content-title">{item.year}</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot
                    style={`background-color: ${item.color}; border-color: #fff;`}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <h3 class="content-title">{item.title}</h3>
                  <!-- <p class="content-description">{item.description}</p> -->
                </TimelineContent>
              </TimelineItem>
            {/each}
          </Timeline>
        </div>
      {/if}
      <button class="dialog-close-button" on:click={handleClose}>Close</button>
    </div>
  </div>
{/if}

<style>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
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

  .heading {
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
    margin-bottom: 0.5rem;
    align-items: center;
  }

  .label {
    width: 160px;
    font-weight: bold;
  }

  .value {
    flex-grow: 1;
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
  .oposite-content-title {
    margin: 0;
    padding: 0;
  }
  .content-title {
    margin: 0;
    padding: 0;
  }
  /* 
  .content-description {
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    color: #d1d3dd;
    font-weight: lighter;
    padding: 0.5rem 0;
  } */
</style>
