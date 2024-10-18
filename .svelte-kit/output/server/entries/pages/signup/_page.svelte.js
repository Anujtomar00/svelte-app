import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/fa.svelte_svelte_type_style_lang.js";
import debug from "debug";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 640px){.flex.svelte-1mz1p45.svelte-1mz1p45{flex-direction:column}.btn.svelte-1mz1p45.svelte-1mz1p45{width:100%}}.prose.svelte-1mz1p45 h1.svelte-1mz1p45{font-size:2rem;text-align:center}.btn.svelte-1mz1p45.svelte-1mz1p45{width:auto}section.svelte-1mz1p45.svelte-1mz1p45{min-width:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  debug("app:routes:signup:page.svelte");
  let email = "";
  let password = "";
  let passwordConfirm = "";
  $$result.css.add(css);
  return `<section style="padding: 3rem;" class="max-w-sm mx-auto svelte-1mz1p45"><div class="prose svelte-1mz1p45"><h1${add_attribute(
    "style",
    ` -webkit-text-fill-color: #0000;
			background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
			background-clip: text;
			-webkit-background-clip: text;`,
    0
  )} class="svelte-1mz1p45">Sign Up
    </h1></div>

  <form class="flex flex-col gap-6 my-6 svelte-1mz1p45">${``}
    <p><input type="email" placeholder="Email..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red" required${add_attribute("value", email, 0)}></p>
    <p><input type="password" placeholder="Password..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red" required${add_attribute("value", password, 0)}></p>
    <p><input type="password" placeholder="Confirm password..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red" required${add_attribute("value", passwordConfirm, 0)}></p>
    <p class="buttonlogin flex items-center gap-6 mt-6 svelte-1mz1p45"><button class="btn btn-primary svelte-1mz1p45"${add_attribute(
    "style",
    `background-color: var(--app-primary-color, #d60016);
				border: none;
				color: white;`,
    0
  )}>Sign Up</button>
      or
      <a href="/login" class="link">Log In</a></p></form>
</section>`;
});
export {
  Page as default
};
