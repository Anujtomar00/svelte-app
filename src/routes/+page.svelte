<script lang="ts">
  import { session } from "$lib/stores/session";
  import Analytics from "./Analytics.svelte";
</script>

{#if $session?.user}
  <div class="prose custom-prose-container p-4">
    <div class="dashboard">
      <Analytics />
		<!-- <div class="dashboard-button">
      		<a href="/dashboard" class="btn btn-primary">Dashboard</a>
      		<a href="/settings" class="btn" style="color:white;  margin-left:1rem;">Settings</a>
		</div> -->
    </div>
  </div>
{:else}
  <div class="prose lg:prose-lg" style="margin-left:7rem;">
    <h1 class="" style={` -webkit-text-fill-color: #0000;
    background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
    background-clip: text;
    -webkit-background-clip: text;`}>Learning & Development Management</h1>
    <p>This project shows you how to manage the progress of Interns.</p>
    <p>
      In this project you can login to the system and can see the scores of
      interns with the help of charts and their score.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vero
      dolor! Deleniti minus, vel quis omnis rem tempore tenetur dignissimos
      ullam debitis veniam aliquid molestiae labore sit vero! Deleniti,
      deserunt.
    </p>
    <p class="flex items-center gap-4 mt-12">
      <a href="/signup" class="btn btn-primary" style={`background-color: var(--app-primary-color, #d60016);
    border: none;
    color: white;`}>Sign Up</a>
      <a href="/login" class="btn" style="color:white; background-color: #63666B; border: none;">Log In</a>
    </p>
  </div>
{/if}


<style>
	 .custom-prose-container {
    max-width: 100%; /* Adjust the width as per your preference */
    margin-left: auto;
    margin-right: auto;
  }

  .dashboard{
	display: flex;
	flex-direction: column;
  }

  .dashboard-button{
	display: flex;
  }
</style>