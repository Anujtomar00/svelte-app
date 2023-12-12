import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-f6cd83ab.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-f6cd83ab.js","_app/immutable/chunks/index-6c230a90.js","_app/immutable/chunks/stores-5e3c0a87.js","_app/immutable/chunks/singletons-a5656164.js","_app/immutable/chunks/index-37129d4c.js","_app/immutable/chunks/session-3dce4b9c.js","_app/immutable/chunks/fa-f7b18daf.js"];
export const stylesheets = ["_app/immutable/assets/_layout-a932a93e.css","_app/immutable/assets/fa-32503cb2.css"];
