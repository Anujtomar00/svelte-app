<script lang="ts">
  import type { PageData } from "./$types";
  import Chart from "../../chart.svelte";
  // export let data: PageData;
  let dummyData = [
    {
      batchName: "November 2021",
      batchDate: "9 November 2021",
      totalStudent: 54,
      batchCode: "Nov21",
    },
    {
      batchName: "December 2021",
      batchDate: "9 Decemeber 2021",
      totalStudent: 44,
      batchCode: "Dec21",
    },
    {
      batchName: "October 2021",
      batchDate: "9 Ocotber 2021",
      totalStudent: 20,
      batchCode: "Oct21",
    }
  ];
</script>

<div
  class="prose"
  style="display:flex; justify-content:center; flex-direction:column; margin-bottom:3%; "
>
  <h1>Dashboard</h1>
</div>
<div class="flex">
<div class="flex flex-col w-full lg:flex-column" style="width:40%;">
{#each dummyData as item}
	<div class="prose grid flex-grow card bg-base-300 rounded-box place-items-start" style="margin-bottom: 1rem; padding:1rem; width:100% ">
		<ul style="list-style-type: none;">
			<div class="flex" style="align-items: baseline;">
			Batch Name:&nbsp&nbsp
		<li >{item.batchName}</li>
	</div>
	<div class="flex" style="align-items: baseline;">
		Batch Date:&nbsp&nbsp
		<li >{item.batchDate}</li>
	</div>
	<div class="flex" style="align-items: baseline;">
		Total Student:&nbsp&nbsp
		<li >{item.totalStudent}</li>
	</div>
	<div class="flex" style="align-items: baseline;">
		Batch Code:&nbsp&nbsp
		<li >{item.batchCode}</li>
	</div>
	</ul>
	</div>
	{/each}
</div>
  
  <div class="divider lg:divider-horizontal" />
  <div
    class=" card rounded-box"
  >
    <Chart />
  </div>
</div>
