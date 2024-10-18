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
		faHome
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { onMount } from 'svelte';
	import "../app.postcss";
	import type { PageData } from "./$types";

	let isMenuOpen = false;
	let menuRef: HTMLElement;

	function toggleMenu(event: MouseEvent) {
		event.stopPropagation();
		isMenuOpen = !isMenuOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		if (menuRef && !menuRef.contains(event.target as Node) && isMenuOpen) {
			isMenuOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});

	$: menu_items = $session?.user
		? [
				{
					href: "/dashboard",
					icon: faChartLine,
					label: "Dashboard",
				},
				{
					href: "/",
					icon: faHome,
					label: "Home",
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

<header class="bg-base-200 shadow-md w-full">
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between h-16">
			<div class="flex-shrink-0">
				<a href="/" class="block">
					<img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/nashTech-logo-red.svg" alt="logo" class="h-8 w-auto">
				</a>
			</div>
			<div class="flex items-center">
				<nav class="relative " bind:this={menuRef}>
					<button
						class="btn btn-ghost gap-2"
						aria-haspopup="true"
						aria-expanded={isMenuOpen}
						on:click={toggleMenu}
					>
						<Fa icon={faBars} />
						<span class="hidden sm:inline">Menu</span>
					</button>
					<ul
					     style="list-style-type: none;"
						class="absolute right-0 mt-2 w-48 bg-base-200 rounded-md shadow-lg py-1 z-10"
						class:hidden={!isMenuOpen}
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu"
					>
						{#each menu_items as item}
							<li>
								<a
									href={item.href}
									data-sveltekit-reload={item.reload ? "" : "off"}
									class="flex no-underline items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
									on:click={() => isMenuOpen = false}
								>
									<Fa icon={item.icon} class="mr-2" />
									<span>{item.label}</span>
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
