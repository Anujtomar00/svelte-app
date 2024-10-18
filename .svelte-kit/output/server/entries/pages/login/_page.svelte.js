import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../../chunks/index.js";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import debug from "debug";
import { F as Fa } from "../../../chunks/fa.js";
import "../../../chunks/fa.svelte_svelte_type_style_lang.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 640px){.prose.svelte-1nc6c5s h1.svelte-1nc6c5s{font-size:1.5rem;line-height:1.2}.flex.svelte-1nc6c5s.svelte-1nc6c5s{flex-direction:column}.btn.svelte-1nc6c5s.svelte-1nc6c5s{width:100%}}.prose.svelte-1nc6c5s h1.svelte-1nc6c5s{font-size:2rem;text-align:center}.btn.svelte-1nc6c5s.svelte-1nc6c5s{width:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const log = debug("app:routes:login:page.svelte");
  let { form } = $$props;
  let email = (form == null ? void 0 : form.email) ?? "";
  let password = "";
  (form == null ? void 0 : form.error) ?? "";
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  {
    log("form:", form);
  }
  return `<section style="padding: 3rem;" class="max-w-sm mx-auto"><div class="prose svelte-1nc6c5s"><h1${add_attribute(
    "style",
    ` -webkit-text-fill-color: #0000;
			background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
			background-clip: text;
			-webkit-background-clip: text;`,
    0
  )} class="svelte-1nc6c5s">Log In
    </h1></div>
  <form class="flex flex-col gap-6 my-6 svelte-1nc6c5s">${(form == null ? void 0 : form.error) ? `<div class="alert alert-error"><div>${validate_component(Fa, "Fa").$$render($$result, { icon: faWarning }, {}, {})}
          ${escape(form.error)}</div></div>` : ``}
    <p><input autocomplete="email" autocorrect="off" type="email" name="email" placeholder="Email..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red" required${add_attribute("value", email, 0)}></p>
    <p><input autocomplete="current-password" type="password" name="password" placeholder="Password..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red" required${add_attribute("value", password, 0)}></p>
    <p class="buttonlogin flex gap-6 mt-6 svelte-1nc6c5s"><button class="btn btn-primary svelte-1nc6c5s"${add_attribute(
    "style",
    `background-color: var(--app-primary-color, #d60016);
				border: none;
				color: white;`,
    0
  )}>Log In</button></p></form>
</section>`;
});
export {
  Page as default
};
