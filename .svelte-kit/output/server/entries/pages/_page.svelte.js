import { c as create_ssr_component, v as validate_component, b as subscribe } from "../../chunks/index.js";
import { H as Header } from "../../chunks/Header.js";
import { u as user } from "../../chunks/fa.svelte_svelte_type_style_lang.js";
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
  code: ".svelte-i2ol6c.svelte-i2ol6c{box-sizing:border-box;margin:0;padding:0}.container.svelte-i2ol6c.svelte-i2ol6c{max-width:1200px;margin:0 auto;padding:20px;display:flex;flex-direction:column;align-items:center}.title.svelte-i2ol6c.svelte-i2ol6c{color:#d60016;font-size:2rem;margin-bottom:1rem;text-align:center}.loading.svelte-i2ol6c.svelte-i2ol6c{display:flex;flex-direction:column;align-items:center;justify-content:center;height:50vh}.loading-spinner.svelte-i2ol6c.svelte-i2ol6c{border:4px solid #f3f3f3;border-top:4px solid #d60016;border-radius:50%;width:40px;height:40px;-webkit-animation:svelte-i2ol6c-spin 1s linear infinite;animation:svelte-i2ol6c-spin 1s linear infinite}@-webkit-keyframes svelte-i2ol6c-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-i2ol6c-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.card-container.svelte-i2ol6c.svelte-i2ol6c{display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:1rem;margin-bottom:2rem;width:100%}.card.svelte-i2ol6c.svelte-i2ol6c{padding:1rem;border-radius:10px;text-align:center;color:white;transition:transform 0.3s ease;box-shadow:0 2px 5px rgba(0, 0, 0, 0.2)}.card.svelte-i2ol6c.svelte-i2ol6c:hover{transform:scale(1.05)}.number.svelte-i2ol6c.svelte-i2ol6c{font-size:1.5rem;font-weight:bold;margin:0}.heading.svelte-i2ol6c.svelte-i2ol6c{font-size:1rem;margin:0.5rem 0}.subheading.svelte-i2ol6c.svelte-i2ol6c{font-size:0.875rem;opacity:0.8}.chart-container.svelte-i2ol6c.svelte-i2ol6c{display:grid;grid-template-columns:1fr;gap:2rem;width:100%}.chart.svelte-i2ol6c.svelte-i2ol6c{background-color:white;border:1px solid #e1e4dd;border-radius:10px;padding:1rem;display:flex;flex-direction:column;align-items:center;width:100%;box-shadow:0 2px 5px rgba(0, 0, 0, 0.1)}.chart.svelte-i2ol6c h2.svelte-i2ol6c{text-align:center;margin-bottom:1rem}.chart-wrapper.svelte-i2ol6c.svelte-i2ol6c{width:100%;max-width:300px;margin:0 auto}@media(max-width: 639px){.container.svelte-i2ol6c.svelte-i2ol6c{width:100%;padding:1rem}.card-container.svelte-i2ol6c.svelte-i2ol6c{grid-template-columns:1fr}.chart-container.svelte-i2ol6c.svelte-i2ol6c{margin-left:-1rem;margin-right:-0.5rem}.chart.svelte-i2ol6c.svelte-i2ol6c{padding:0.5rem;border-radius:0;width:100%}.chart-wrapper.svelte-i2ol6c.svelte-i2ol6c{max-width:100%}}@media(min-width: 640px){.card-container.svelte-i2ol6c.svelte-i2ol6c{grid-template-columns:repeat(auto-fit, minmax(200px, 1fr))}.chart-wrapper.svelte-i2ol6c.svelte-i2ol6c{max-width:400px}}@media(min-width: 768px){.chart-container.svelte-i2ol6c.svelte-i2ol6c{grid-template-columns:1fr 1fr}}",
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
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="container svelte-i2ol6c"><h1 class="title svelte-i2ol6c">Analytical Overview</h1>

  ${`<div class="loading svelte-i2ol6c"><p class="loading-spinner svelte-i2ol6c"></p>
      <p class="svelte-i2ol6c">Loading...</p></div>`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".custom-prose-container.svelte-1ep71p8{max-width:100%;margin-left:auto;margin-right:auto}.dashboard.svelte-1ep71p8{display:flex;flex-direction:column}.gradient-text.svelte-1ep71p8{-webkit-text-fill-color:transparent;background:-webkit-linear-gradient(270deg, #d6001c -54.17%, #6d297b);background-clip:text;-webkit-background-clip:text}.btn.svelte-1ep71p8{display:inline-flex;align-items:center;justify-content:center;padding:0.5rem 1rem;border-radius:0.25rem;font-weight:bold;text-align:center;text-decoration:none;transition:background-color 0.3s ease;height:2.5rem}.btn-primary.svelte-1ep71p8{background-color:var(--app-primary-color, #d60016);color:white;border:none}.btn-secondary.svelte-1ep71p8{background-color:#63666b;color:white;border:none}@media(max-width: 640px){.btn.svelte-1ep71p8{width:80vw;margin-top:10px}p.svelte-1ep71p8{font-size:1rem}}h1.svelte-1ep71p8{margin-top:1.5rem;margin-bottom:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$result.css.add(css);
  $$unsubscribe_user();
  return `${$user ? `<div class="prose custom-prose-container svelte-1ep71p8"><div class="dashboard svelte-1ep71p8">${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}
      </div></div>` : `<div class="lg:prose-lg px-4 sm:px-6 md:px-8 lg:px-12 py-8 max-w-4xl mx-auto"><div><h1 class="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold mb-6 svelte-1ep71p8">Learning &amp; Development Management
      </h1>
      <div class="content"><p class="mb-4 svelte-1ep71p8">This project shows you how to manage the progress of Interns.
        </p>
        <p class="mb-4 svelte-1ep71p8">In this project you can login to the system and can see the scores of
          interns with the help of charts and their score.
        </p>
        <p class="mb-4 svelte-1ep71p8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, vero
          dolor! Deleniti minus, vel quis omnis rem tempore tenetur dignissimos
          ullam debitis veniam aliquid molestiae labore sit vero! Deleniti,
          deserunt.
        </p></div></div>
    <div class="flex flex-col sm:flex-row items-center gap-4 mt-8"><a href="/signup" class="btn btn-primary w-full sm:w-auto svelte-1ep71p8">Sign Up</a>
      <a href="/login" class="btn btn-secondary w-full sm:w-auto svelte-1ep71p8">Log In</a></div></div>`}`;
});
export {
  Page as default
};
