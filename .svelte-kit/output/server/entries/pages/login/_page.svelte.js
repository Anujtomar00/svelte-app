import { c as create_ssr_component, b as subscribe, f as add_attribute, v as validate_component, e as escape } from "../../../chunks/index.js";
import { s as session } from "../../../chunks/session.js";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import debug from "debug";
import { F as Fa } from "../../../chunks/fa.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => value);
  const log = debug("app:routes:login:page.svelte");
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    log("form:", form);
  }
  $$unsubscribe_session();
  return `<section class="max-w-sm mx-auto"><div class="prose"><h1 class=""${add_attribute(
    "style",
    ` -webkit-text-fill-color: #0000;
    background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b);
    background-clip: text;
    -webkit-background-clip: text;`,
    0
  )}>Log In</h1>
		</div>
	<form class="flex flex-col gap-6 my-6" method="POST">${(form == null ? void 0 : form.error) ? `<div class="alert alert-error"><div>${validate_component(Fa, "Fa").$$render($$result, { icon: faWarning }, {}, {})}
					${escape(form.error)}</div></div>` : ``}
		<p><input autocomplete="email" autocorrect="off" type="email" name="email" placeholder="Email..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red w-full" required${add_attribute("value", (form == null ? void 0 : form.email) ?? "", 0)}></p>
		<p><input autocomplete="current-password" type="password" name="password" placeholder="Password..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red focus:border-red block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red dark:focus:border-red w-full" required></p>
		<p class="flex items-center gap-6 mt-6"><button class="btn btn-primary"${add_attribute(
    "style",
    `background-color: var(--app-primary-color, #d60016);
    border: none;
    color: white;`,
    0
  )}>Log In</button>
			</p></form>

	</section>`;
});
export {
  Page as default
};
