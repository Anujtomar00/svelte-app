import type { PageLoadEvent } from "./$types";

export async function load(event: PageLoadEvent) {
	return { title: "Sign Up" };
}
