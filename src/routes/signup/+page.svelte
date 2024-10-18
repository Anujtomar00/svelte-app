<script lang="ts">
  import { faWarning } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import debug from "debug";
  import { goto } from "$app/navigation";
  import { firebaseAuthAdapter } from "$lib/services/firebaseAuth";

  const log = debug("app:routes:signup:page.svelte");

  let email = "";
  let password = "";
  let passwordConfirm = "";
  let error = "";

  async function handleSignup() {
    try {
      if (password !== passwordConfirm) {
        error = "Passwords do not match!";
        return;
      }

      log("Signing up with:", email, password);

      const result = await firebaseAuthAdapter.signup(email, password);
      if (result.user) {
        await goto("/dashboard");
      } else {
        error = result.error || "An unknown error occurred";
      }
    } catch (err) {
      error = "An error occurred during signup";
      log("Error:", err);
    }
  }
</script>

<section style="padding: 3rem;" class="max-w-sm mx-auto">
	<div class="prose">
		<h1 style={` -webkit-text-fill-color: #0000;
			background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
			background-clip: text;
			-webkit-background-clip: text;`}
    >
      Sign Up
    </h1>
  </div>

  <form
    class="flex flex-col gap-6 my-6"
    on:submit|preventDefault={handleSignup}
  >
    {#if error}
      <div class="alert alert-error">
        <div>
          <Fa icon={faWarning} />
          {error}
        </div>
      </div>
    {/if}
    <p>
      <input
        type="email"
        bind:value={email}
        placeholder="Email..."
        class="bg-gray-50 border border-gray-300 text-gray-900
      text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red
      dark:focus:border-red"
        required
      />
    </p>
    <p>
      <input
        type="password"
        bind:value={password}
        placeholder="Password..."
        class="bg-gray-50 border border-gray-300 text-gray-900
      text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700
      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red
      dark:focus:border-red"
        required
      />
    </p>
    <p>
      <input
        type="password"
        bind:value={passwordConfirm}
        placeholder="Confirm password..."
        class="bg-gray-50 border border-gray-300
      text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full
      p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-red dark:focus:border-red"
        required
      />
    </p>
    <p class="buttonlogin flex items-center gap-6 mt-6">
      <button
        class="btn btn-primary"
        style={`background-color: var(--app-primary-color, #d60016);
				border: none;
				color: white;`}>Sign Up</button
      >
      or
      <a href="/login" class="link">Log In</a>
    </p>
  </form>
</section>

<style>
  @media (max-width: 640px) {
    .flex {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }

  .prose h1 {
    font-size: 2rem;
    text-align: center;
  }

  .btn {
    width: auto;
  }

  section {
    min-width: 0;
  }
</style>
