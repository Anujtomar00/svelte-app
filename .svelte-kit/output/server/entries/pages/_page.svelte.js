import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/index.js";
import { s as session } from "../../chunks/session.js";
const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
const Doughnut_svelte_svelte_type_style_lang = "";
const Analytics_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-15p5v83.svelte-15p5v83{max-width:1200px;margin:0 auto;padding:1rem;display:flex;flex-direction:column;align-items:center;overflow-x:hidden}.title.svelte-15p5v83.svelte-15p5v83{color:var(--app-primary-color, #d60016);font-size:2rem;margin-bottom:1rem;text-align:center}.loading.svelte-15p5v83.svelte-15p5v83{display:flex;flex-direction:column;align-items:center;justify-content:center;height:50vh}.loading-spinner.svelte-15p5v83.svelte-15p5v83{border:4px solid #f3f3f3;border-top:4px solid var(--app-primary-color, #d60016);border-radius:50%;width:40px;height:40px;-webkit-animation:svelte-15p5v83-spin 1s linear infinite;animation:svelte-15p5v83-spin 1s linear infinite}@-webkit-keyframes svelte-15p5v83-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-15p5v83-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.card-container.svelte-15p5v83.svelte-15p5v83{display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:1rem;margin-bottom:2rem;width:100%}.card.svelte-15p5v83.svelte-15p5v83{padding:1rem;border-radius:10px;text-align:center;color:white;transition:transform 0.3s ease}.card.svelte-15p5v83.svelte-15p5v83:hover{transform:scale(1.05)}.number.svelte-15p5v83.svelte-15p5v83{font-size:1.5rem;font-weight:bold;margin:0}.heading.svelte-15p5v83.svelte-15p5v83{font-size:1rem;margin:0.5rem 0}.subheading.svelte-15p5v83.svelte-15p5v83{font-size:0.875rem;opacity:0.8}.chart-container.svelte-15p5v83.svelte-15p5v83{display:grid;grid-template-columns:1fr;gap:2rem;width:100%}.chart.svelte-15p5v83.svelte-15p5v83{background-color:white;border:1px solid #e1e4dd;border-radius:10px;padding:1rem;display:flex;flex-direction:column;align-items:center;width:100%;box-sizing:border-box}.chart.svelte-15p5v83 h2.svelte-15p5v83{text-align:center;margin-bottom:1rem}.chart-wrapper.svelte-15p5v83.svelte-15p5v83{width:100%;max-width:300px;margin:0 auto}@media(max-width: 639px){.container.svelte-15p5v83.svelte-15p5v83{padding:0.5rem}.chart-container.svelte-15p5v83.svelte-15p5v83{margin-left:-0.5rem;margin-right:-0.5rem}.chart.svelte-15p5v83.svelte-15p5v83{padding:0.5rem;border-radius:0}.chart-wrapper.svelte-15p5v83.svelte-15p5v83{max-width:100%}}@media(min-width: 640px){.card-container.svelte-15p5v83.svelte-15p5v83{grid-template-columns:repeat(auto-fit, minmax(200px, 1fr))}.chart-wrapper.svelte-15p5v83.svelte-15p5v83{max-width:400px}}@media(min-width: 768px){.chart-container.svelte-15p5v83.svelte-15p5v83{grid-template-columns:1fr 1fr}}@media(min-width: 1024px){.card-container.svelte-15p5v83.svelte-15p5v83{grid-template-columns:repeat(5, 1fr)}}",
  map: null
};
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let batchList = [];
  let colors = ["#205c65", "#545421", "#81417d", "#b2040e", "#073e53"];
  $$result.css.add(css$1);
  {
    if (batchList.length > 0) {
      batchList.map((item, index) => ({
        ...item,
        color: colors[index % colors.length]
      }));
    }
  }
  return `<div class="container svelte-15p5v83"><h1 class="title svelte-15p5v83">Analytical Overview</h1>
  
  ${`<div class="loading svelte-15p5v83"><div class="loading-spinner svelte-15p5v83"></div>
      <p>Loading...</p></div>`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".custom-prose-container.svelte-15ydine.svelte-15ydine{max-width:100%;margin-left:auto;margin-right:auto}.dashboard.svelte-15ydine.svelte-15ydine{display:flex;flex-direction:column}.gradient-text.svelte-15ydine.svelte-15ydine{-webkit-text-fill-color:transparent;background:-webkit-linear-gradient(270deg, #d6001c -54.17%, #6d297b);background-clip:text;-webkit-background-clip:text}.btn.svelte-15ydine.svelte-15ydine{display:inline-flex;align-items:center;justify-content:center;padding:0.5rem 1rem;border-radius:0.25rem;font-weight:bold;text-align:center;text-decoration:none;transition:background-color 0.3s ease;height:2.5rem}.btn-primary.svelte-15ydine.svelte-15ydine{background-color:var(--app-primary-color, #d60016);color:white;border:none}.btn-secondary.svelte-15ydine.svelte-15ydine{background-color:#63666B;color:white;border:none}@media(max-width: 640px){.btn.svelte-15ydine.svelte-15ydine{width:100%}}h1.svelte-15ydine+p.svelte-15ydine{margin-top:0.5rem}h1.svelte-15ydine.svelte-15ydine{margin-top:1.5rem;margin-bottom:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = subscribe(session, (value) => $session = value);
  $$result.css.add(css);
  $$unsubscribe_session();
  return `${($session == null ? void 0 : $session.user) ? `<div class="prose custom-prose-container p-4 svelte-15ydine"><div class="dashboard svelte-15ydine">${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}
      </div></div>` : `<div style="margin-top: -100px;" class="lg:prose-lg px-4 sm:px-6 md:px-8 lg:px-12 py-8 max-w-4xl mx-auto"><h1 class="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold mb-6 svelte-15ydine">Learning &amp; Development Management</h1>
    <p class="mb-4 svelte-15ydine">This project shows you how to manage the progress of Interns.</p>
    <p class="mb-4">In this project you can login to the system and can see the scores of
      interns with the help of charts and their score.
    </p>
    <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vero
      dolor! Deleniti minus, vel quis omnis rem tempore tenetur dignissimos
      ullam debitis veniam aliquid molestiae labore sit vero! Deleniti,
      deserunt.
    </p>
    <div class="flex flex-col sm:flex-row items-center gap-4 mt-8"><a href="/signup" class="btn btn-primary w-full sm:w-auto svelte-15ydine">Sign Up</a>
      <a href="/login" class="btn btn-secondary w-full sm:w-auto svelte-15ydine">Log In</a></div></div>`}`;
});
export {
  Page as default
};
