<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { faWarning } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import type { ActionData } from "./$types";
	import debug from "debug";
	import { session } from "$lib/stores/session";
	import { goto } from "$app/navigation";

	const log = debug("app:routes:signup:page.svelte");

	export let form: ActionData;
</script>

<section class="max-w-sm mx-auto">
	<div class="prose">
		<h1 class="" style={` -webkit-text-fill-color: #0000;
    background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
    background-clip: text;
    -webkit-background-clip: text;`}>Sign Up</h1>
	</div>

	<form
		class="flex flex-col gap-6 my-6"
		method="POST"
		use:enhance={() =>
			async ({ result }) => {
				log("form result:", result);

				await applyAction(result);

				// TODO: this is kinda a hack since redirecting in the
				// action doesn't work because we can't also update page
				// data.
				if (result.type === "success") {
					const user = result.data?.user;
					if (user) $session.user = user;
					await goto("/dashboard");
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
				type="email"
				name="email"
				placeholder="Email..."
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red w-full"
				required
				value={form?.email ?? ""}
			/>
		</p>
		<p>
			<input
				type="password"
				name="password"
				placeholder="Password..."
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red w-full"
				required
			/>
		</p>
		<p>
			<input
				type="password"
				name="password-confirm"
				placeholder="Confirm password..."
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red w-full"
				required
			/>
		</p>
		<p class="flex items-center gap-6 mt-6">
			<button class="btn btn-primary" style={`background-color: var(--app-primary-color, #d60016);
    border: none;
    color: white;`}>Sign Up</button>
			or
			<a href="/login" class="link">Log In</a>
		</p>
	</form>

	<!-- {#if form}
		<section class="my-8">
			<h3>Form data:</h3>
			<pre>{JSON.stringify(form, null, 2)}</pre>
		</section>
	{/if} -->
</section>
