<script lang="ts">
	import { session } from "$lib/stores/session";
	import {
		faBars,
		faChartLine,
		faCog,
		faHeart,
		faRocket,
		faSignIn,
		faSignOut,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import "../app.postcss";
	import type { PageData } from "./$types";
	$: menu_items = $session?.user
		? [
				{
					href: "/dashboard",
					icon: faChartLine,
					label: "Dashboard",
				},
				{
					href: "/settings",
					icon: faCog,
					label: "Settings",
				},
				{
					href: "/logout",
					icon: faSignOut,
					label: "Log Out",
					reload: true,
				},
		  ]
		: [
				{
					href: "/login",
					icon: faSignIn,
					label: "Log In",
				},
				// {
				// 	href: "/signup",
				// 	icon: faHeart,
				// 	label: "Sign Up",
				// },
		  ];
</script>

<header class="bg-base-200 px-6" style="  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);">
	<div class="max-w-screen-xxl mx-auto flex items-center py-2">
		<h1>
			<a href="/" >
				<img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/nashTech-logo-red.svg" alt="logo" style="max-width: 74%;">
			</a>
		</h1>
		<div style="display: flex;
		line-height: 44px;
		margin-left: auto;">
		{#if $session.user}
		<p>🎉 Hello there <strong>{$session.user?.email}</strong></p>
		{/if}
		<nav class="dropdown dropdown-end ml-auto">
			<label tabindex="0" class="btn btn-ghost gap-3">
				<Fa icon={faBars} />
				Menu
			</label>
			
			<ul
				tabindex="0"
				class="dropdown-content menu p-2 shadow-md bg-base-200 rounded-box w-52 "
			>
			
				{#each menu_items as item}
					<li>
						<a
							href={item.href}
							data-sveltekit-reload={item.reload ? "" : "off"}
						>
							<Fa icon={item.icon} />
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	</div>
</header>
