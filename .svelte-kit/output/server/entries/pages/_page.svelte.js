import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/index.js";
import { s as session } from "../../chunks/session.js";
/* empty css                                                      */const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
const Analytics_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-16j383l.svelte-16j383l{display:flex;justify-content:space-between;flex-direction:column}.card-box.svelte-16j383l.svelte-16j383l{display:flex;flex-direction:row;background-color:#f3f3f3;justify-content:space-between;border-radius:10px}.card.svelte-16j383l.svelte-16j383l{width:250px;padding:20px;border-radius:10px;text-align:center;box-shadow:0 2px 5px rgba(0, 0, 0, 0.1);margin:10px;transition:transform 0.3s ease}.card.svelte-16j383l.svelte-16j383l:hover{transform:scale(1.05)}.card.svelte-16j383l .number.svelte-16j383l{font-size:36px;font-weight:bold;margin-top:0.6rem}.card.svelte-16j383l .heading.svelte-16j383l{font-size:18px;font-weight:bold;margin:10px 0}.card.svelte-16j383l .subheading.svelte-16j383l{font-size:14px;color:#888}.chart.svelte-16j383l.svelte-16j383l{display:flex;flex-direction:row;margin-top:5rem;justify-content:space-between}.piechart.svelte-16j383l.svelte-16j383l{width:50%;padding-top:11rem;margin-right:2rem;border:1px solid #e1e4dd;border-radius:10px}.doughnut.svelte-16j383l.svelte-16j383l{height:600px;width:600px;border:1px solid #e1e4dd;border-radius:10px}",
  map: null
};
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `


<h2>Analytical Overview</h2>
${`<div class="loading"><div class="loadingSpinner"></div>
    Loading...
  </div>`}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".custom-prose-container.svelte-14mkv49{max-width:100%;margin-left:auto;margin-right:auto}.dashboard.svelte-14mkv49{display:flex;flex-direction:column}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${($session == null ? void 0 : $session.user) ? `<div class="prose custom-prose-container p-4 svelte-14mkv49"><h1>Learning &amp; Development Management</h1>
    <div class="dashboard svelte-14mkv49">${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}
		</div></div>` : `<div class="prose lg:prose-lg" style="margin-left:7rem;"><h1>Learning &amp; Development Management</h1>
    <p>This project shows you how to manage the progress of Interns.</p>
    <p>In this project you can login to the system and can see the scores of
      interns with the help of charts and their score.
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vero
      dolor! Deleniti minus, vel quis omnis rem tempore tenetur dignissimos
      ullam debitis veniam aliquid molestiae labore sit vero! Deleniti,
      deserunt.
    </p>
    <p class="flex items-center gap-4 mt-12"><a href="/signup" class="btn btn-primary">Sign Up</a>
      <a href="/login" class="btn" style="color:white;">Log In</a></p></div>`}`;
});
export {
  Page as default
};
