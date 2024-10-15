<script lang="ts">
  import { session } from "$lib/stores/session";
  import Analytics from "./Analytics.svelte";
</script>

{#if $session?.user}
  <div class="prose custom-prose-container p-4">
    <div class="dashboard">
      <Analytics />
      <!-- Uncomment if you want to include these buttons
      <div class="dashboard-button">
        <a href="/dashboard" class="btn btn-primary">Dashboard</a>
        <a href="/settings" class="btn btn-secondary">Settings</a>
      </div>
      -->
    </div>
  </div>
{:else}
  <div
    style="margin-top: -100px;"
    class=" lg:prose-lg px-4 sm:px-6 md:px-8 lg:px-12 py-8 max-w-4xl mx-auto"
  >
    <div class="content">
      <h1 class="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        Learning & Development Management
      </h1>
      <p class="mb-4">
        This project shows you how to manage the progress of Interns.
      </p>
      <p class="mb-4">
        In this project you can login to the system and can see the scores of
        interns with the help of charts and their score.
      </p>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vero
        dolor! Deleniti minus, vel quis omnis rem tempore tenetur dignissimos
        ullam debitis veniam aliquid molestiae labore sit vero! Deleniti,
        deserunt.
      </p>
    </div>
    <div class="flex flex-col sm:flex-row items-center gap-4 mt-8">
      <a href="/signup" class="btn btn-primary w-full sm:w-auto">Sign Up</a>
      <a href="/login" class="btn btn-secondary w-full sm:w-auto">Log In</a>
    </div>
  </div>
{/if}

<style>
  .custom-prose-container {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .dashboard {
    display: flex;
    flex-direction: column;
  }

  .dashboard-button {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }

  .gradient-text {
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(270deg, #d6001c -54.17%, #6d297b);
    background-clip: text;
    -webkit-background-clip: text;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
    height: 2.5rem;
  }

  .btn-primary {
    background-color: var(--app-primary-color, #d60016);
    color: white;
    border: none;
  }

  .btn-secondary {
    background-color: #63666b;
    color: white;
    border: none;
  }

  @media (max-width: 640px) {
    .btn {
      width: 80vw;
      margin-left: -500px;
    }
    .content{
      width: 90vw;
      margin-left: -80px;
    }
    .content h1{
      text-align: center;
      width: 100vw;
      margin-left: -10px;
    }
  }

  h1 + p {
    margin-top: 0.5rem;
  }

  h1 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
</style>
