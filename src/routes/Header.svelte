<script lang="ts">
	import { user } from "$lib/services/firebaseAuth"; // Import user store
	import {
	  faBars,
	  faChartLine,
	  faCog,
	  faSignIn,
	  faSignOut,
	  faHome,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { goto } from "$app/navigation";
	import { firebaseAuthAdapter } from "$lib/services/firebaseAuth";
  
	let menuOpen = false;
  
	$: menu_items = $user
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
		  }
		]
	  : [
		  {
			href: "/login",
			icon: faSignIn,
			label: "Log In",
		  }
		];
  
	async function handleLogout() {
	  await firebaseAuthAdapter.logout();
	  goto("/");
	}
  
	function toggleMenu() {
	  menuOpen = !menuOpen;
	}
  </script>
  
  <header class="bg-base-200 shadow-md w-full">
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
	  <div class="flex items-center justify-between h-16">
		<div class="flex-shrink-0">
		  <a href="/" class="block">
			<img
			  src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/nashTech-logo-red.svg"
			  alt="logo"
			  class="h-8 w-auto"
			/>
		  </a>
		</div>
		<div class="flex items-center">
		  <nav class="relative">
			<button
			  class="btn btn-ghost gap-2"
			  aria-haspopup="true"
			  aria-expanded={menuOpen}
			  on:click={toggleMenu}
			>
			  <Fa icon={faBars} />
			  <span class="hidden sm:inline">Menu</span>
			</button>
  
			<!-- Menu -->
			<ul
			  class={`absolute right-0 mt-2 w-48 bg-base-200 rounded-md shadow-lg py-1 z-10 ${menuOpen ? 'block' : 'hidden'} list-none`}
			  role="menu"
			  aria-orientation="vertical"
			  aria-labelledby="user-menu"
			>
			  {#each menu_items as item}
				<li>
				  <a
					href={item.href}
					class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
					role="menuitem"
				  >
					<Fa icon={item.icon} class="mr-2" />
					<span>{item.label}</span>
				  </a>
				</li>
			  {/each}
			  {#if $user}
				<li>
				  <a
					on:click={handleLogout}
					class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
					role="menuitem"
				  >
					<Fa icon={faSignOut} class="mr-2" />
					<span>Log Out</span>
				  </a>
				</li>
			  {/if}
			</ul>
		  </nav>
		</div>
	  </div>
	</div>
</header>

<style>
	nav:hover ul, nav ul:hover {
		display: block;
	}
	.group:hover .group-hover\:block {
		display: block;
	}
</style>
