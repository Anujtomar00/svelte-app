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
	let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  $: menuVisible = $session?.user && !isMobileMenuOpen;
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

<style>
    .navHeader {
    background-color: #f3f3f3;
       @media (max-width: 1400px) and (min-width: 1010px) {
      width: 108%; /* Adjust width for smaller screens */
    }
     @media (max-width: 1009px) and (min-width: 988px) {
      width: 110%; /* Adjust width for smaller screens */
    }
	 @media (max-width: 987px) and (min-width: 964px) {
      width: 113%; /* Adjust width for smaller screens */
    }
	 @media (max-width: 963px) and (min-width: 907px) {
      width: 117%; /* Adjust width for smaller screens */
    }
	 @media (max-width: 906px) and (min-width: 827px) {
      width: 123%; /* Adjust width for smaller screens */
    }
	 @media (max-width: 826px) and (min-width: 780px) {
      width: 129%; /* Adjust width for smaller screens */
    }
	@media (max-width: 779px) and (min-width: 728px) {
      width: 134%; /* Adjust width for smaller screens */
    }
	@media (max-width: 727px) and (min-width: 660px) {
      width: 144%; /* Adjust width for smaller screens */
    }
	@media (max-width: 659px) and (min-width: 596px) {
      width: 154%; /* Adjust width for smaller screens */
    }
	@media (max-width: 595px) and (min-width: 530px) {
      width: 167%; /* Adjust width for smaller screens */
    }
	@media (max-width: 529px) and (min-width: 477px) {
      width: 180%; /* Adjust width for smaller screens */
    }
	@media (max-width: 476px) and (min-width: 340px) {
      width: 224%; /* Adjust width for smaller screens */
    }
  }
</style>

<header class="bg-base-200 px-6 navHeader" style="  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);">
	<div class="max-w-screen-xxl mx-auto flex items-center py-2">
		<h1>
			<a href="/" >
				<img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/nashTech-logo-red.svg" alt="logo" style="max-width: 74%;">
			</a>
		</h1>
		<h1 class="" style={` -webkit-text-fill-color: #0000;
    background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
    background-clip: text;
    -webkit-background-clip: text; font-size: 24px;
    font-weight: 500;`}>Learning & Development Management</h1>
		<div class="hidden lg:flex items-center space-x-4 ml-auto">
		{#if $session.user}
		<!--  <p>🎉 Hello there <strong>{$session.user?.email}</strong></p> -->
		{/if}
		<nav class="dropdown dropdown-end">
			
			
			<ul
				tabindex="0"
				class="flex space-x-4 " style="
    font-size: 18px;
    text-align: center;
    padding: 8px;
    margin: 4px 10px 0px 8px;
    height: max-content;
    line-height: 1px;
    color: #000;
	font-weight: 500;
"
			>
			
				{#each menu_items as item}
					<li style="padding-left: 8px;">
						<a
							href={item.href}
							data-sveltekit-reload={item.reload ? "" : "off"}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	  <!-- Mobile menu toggle button -->
  <div class="lg:hidden ml-auto">
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
