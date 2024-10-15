import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, d as each, f as add_attribute, g as set_store_value } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { s as session } from "../../chunks/session.js";
import { faChartLine, faHome, faCog, faSignOut, faSignIn, faBars } from "@fortawesome/free-solid-svg-icons";
import { F as Fa } from "../../chunks/fa.js";
import debug from "debug";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="max-w-screen-sm mx-auto prose my-32 px-6"></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let menu_items;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  menu_items = ($session == null ? void 0 : $session.user) ? [
    {
      href: "/dashboard",
      icon: faChartLine,
      label: "Dashboard"
    },
    { href: "/", icon: faHome, label: "Home" },
    {
      href: "/settings",
      icon: faCog,
      label: "Settings"
    },
    {
      href: "/logout",
      icon: faSignOut,
      label: "Log Out",
      reload: true
    }
  ] : [
    {
      href: "/login",
      icon: faSignIn,
      label: "Log In"
    }
  ];
  $$unsubscribe_session();
  return `<header class="bg-base-200 px-6" style="box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);"><div class="max-w-screen-xxl mx-auto flex items-center py-2"><h1><a href="/"><img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/nashTech-logo-red.svg" alt="logo" style="max-width: 74%;"></a></h1>
		<div style="display: flex; line-height: 44px; margin-left: auto;">${$session.user ? `<p>\u{1F389} Hello there <strong>${escape((_a = $session.user) == null ? void 0 : _a.email)}</strong></p>` : ``}
		<nav class="dropdown dropdown-end ml-auto"><label tabindex="0" class="btn btn-ghost gap-3">${validate_component(Fa, "Fa").$$render($$result, { icon: faBars }, {}, {})}
				Menu
			</label>
			
			<ul tabindex="0" class="dropdown-content menu p-2 shadow-md bg-base-200 rounded-box w-52 ">${each(menu_items, (item) => {
    return `<li><a${add_attribute("href", item.href, 0)}${add_attribute("data-sveltekit-reload", item.reload ? "" : "off", 0)}>${validate_component(Fa, "Fa").$$render($$result, { icon: item.icon }, {}, {})}
							${escape(item.label)}</a>
					</li>`;
  })}</ul></nav></div></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let title;
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  const log = debug("app:routes:layout.svelte");
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  title = ((_a = $page.data) == null ? void 0 : _a.title) ? $page.data.title + " | " : "";
  {
    if (data == null ? void 0 : data.user)
      set_store_value(session, $session.user = data.user, $session);
  }
  {
    log("data:", data);
  }
  {
    log("$page.data:", $page.data);
  }
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `${$$result.head += `<!-- HEAD_svelte-xbqtmr_START -->${$$result.title = `<title>${escape(title)}L&amp;D Management</title>`, ""}<!-- HEAD_svelte-xbqtmr_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="max-w-screen-xl mx-auto my-20 px-6 " style="max-width: 90%;">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
