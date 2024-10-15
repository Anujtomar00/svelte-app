<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { goto } from "$app/navigation";
	import { session } from "$lib/stores/session";
	import { faWarning } from "@fortawesome/free-solid-svg-icons";
	import debug from "debug";
	import Fa from "svelte-fa";
	import type { ActionData } from "./$types";

	const log = debug("app:routes:login:page.svelte");

	export let form: ActionData;

	$: log("form:", form);
</script>

<style>
	/* Mobile responsive styles */
	@media (max-width: 640px) {
		.prose h1 {
			font-size: 1.5rem; /* Adjust the size for mobile */
			line-height: 1.2; /* Increase line height for readability */
			margin-left: -500px;
		}
		input{
			width: 80vw;
			margin-left: -220px;
		}
		.buttonlogin{
			width: 50vw;
			margin-left: -150px;
		}

		.flex {
			flex-direction: column; /* Stack elements vertically */
		}

		.btn {
			width: 100%; /* Full width for buttons */
		}
	}

	/* General styles for better appearance */
	.prose h1 {
		font-size: 2rem;
		text-align: center;
	}

	.btn {
		width: auto; /* Auto width for larger screens */
	}
</style>

<section class="max-w-sm mx-auto">
	<div class="prose">
		<h1 style={` -webkit-text-fill-color: #0000;
			background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
			background-clip: text;
			-webkit-background-clip: text;`}>Log In</h1>
	</div>
	<form
		class="flex flex-col gap-6 my-6"
		method="POST"
		use:enhance={() =>
			async ({ result }) => {
				log("form result:", result);

				await applyAction(result);

				if (result.type === "success") {
					const user = result.data?.user;
					if (user) $session.user = user;
					await goto("/");
				}
			}}
	>
		{#if form?.error}
			<div class="alert alert-error">
				<div>
					<Fa icon={faWarning} />
					{form.error}
				</div>
			</div>
		{/if}
		<p>
			<input
				autocomplete="email"
				autocorrect="off"
				type="email"
				name="email"
				placeholder="Email..."
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red"
				required
				value={form?.email ?? ""}
			/>
		</p>
		<p>
			<input
				autocomplete="current-password"
				type="password"
				name="password"
				placeholder="Password..."
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red"
				required
			/>
		</p>
		<p  class="buttonlogin flex gap-6 mt-6">
			<button class=" btn btn-primary" style={`background-color: var(--app-primary-color, #d60016);
				border: none;
				color: white;`}>Log In</button>
		</p>
	</form>
</section>
