import type { PageLoadEvent } from "./$types";

export async function load(event: PageLoadEvent) {
  return { title: "Log In" };
}
