import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
import "../../chunks/fa.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                                                 */import debug from "debug";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="max-w-screen-sm mx-auto prose my-32 px-6"></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let title;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const log = debug("app:routes:layout.svelte");
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  title = ((_a = $page.data) == null ? void 0 : _a.title) ? $page.data.title + " | " : "";
  {
    log("data:", data);
  }
  {
    log("$page.data:", $page.data);
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-xa1w0g_START -->${$$result.title = `<title>${escape(title)}L&amp;D Management</title>`, ""}<!-- HEAD_svelte-xa1w0g_END -->`, ""}



<main style="width: 100%;">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
