<script lang="ts">
	import { session } from "$lib/stores/session";
</script>

<div class="prose" style="margin-left:7rem;">
	<h1>Intern Management For HRs</h1>
	<p>This project shows you how to manage the progress of Interns.</p>
	<p>
		In this project you can login to the system and can see the scores of
		interns with the help of charts and their score.
	</p>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vero
		dolor! Deleniti minus, vel quis omnis rem tempore tenetur dignissimos ullam
		debitis veniam aliquid molestiae labore sit vero! Deleniti, deserunt.
	</p>
	<p class="flex items-center gap-4 mt-12">
		{#if $session?.user}
			<a href="/dashboard" class="btn btn-primary">Dashboard</a>
			<a href="/settings" class="btn">Settings</a>
		{:else}
			<!-- <a href="/signup" class="btn btn-primary">Sign Up</a> -->
			<a href="/login" class="btn" style="color:white;">Log In</a>
		{/if}
	</p>
</div>
