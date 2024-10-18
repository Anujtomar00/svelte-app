<script lang="ts">
  import "../app.postcss";
  import type { LayoutData } from "./$types";
  import { onMount } from "svelte";
  import { user } from "$lib/services/firebaseAuth";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import debug from "debug";

  const log = debug("app:routes:layout.svelte");

  export let data: LayoutData;

  $: title = $page.data?.title ? $page.data.title + " | " : "";

  $: log("data:", data);
  $: log("$page.data:", $page.data);
  onMount(() => {
    const unsubscribe = user.subscribe(($user) => {
      if ($user === null) {
        goto("/");
      }
    });

    return unsubscribe;
  });
</script>

<svelte:head>
  <title>{title}L&D Management</title>
</svelte:head>

<!-- <Header /> -->

<main style="width: 100%;">
  <slot />
</main>

<Footer />
