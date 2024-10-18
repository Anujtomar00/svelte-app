import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<section style="padding: 3rem;" class="prose"><h1 style="-webkit-text-fill-color: #0000; background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b); background-clip: text; -webkit-background-clip: text;">Settings</h1>
	<p>Coming Soon</p></section>`;
});
export {
  Page as default
};
