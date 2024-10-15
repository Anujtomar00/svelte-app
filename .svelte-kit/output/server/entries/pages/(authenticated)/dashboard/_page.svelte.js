import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../../../chunks/index.js";
const addBatchModal_svelte_svelte_type_style_lang = "";
const editBatchModal_svelte_svelte_type_style_lang = "";
const svelteTable_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".data-table.svelte-1bxmwst.svelte-1bxmwst{width:100%;border-collapse:collapse;font-family:Arial, sans-serif;font-size:14px;margin-bottom:20px;box-shadow:0 2px 5px rgba(0, 0, 0, 0.1);background-color:#fff}.data-table.svelte-1bxmwst thead th.svelte-1bxmwst{background-color:#f2f2f2;color:#333333;text-align:center;padding:12px;font-weight:bold;border-bottom:1px solid #cccccc}.data-table.svelte-1bxmwst tbody td.svelte-1bxmwst{padding:12px;border-bottom:1px solid #cccccc;text-align:center;vertical-align:middle}.data-table.svelte-1bxmwst tbody tr.svelte-1bxmwst:nth-child(even){background-color:#f8f8f8}.data-table.svelte-1bxmwst tbody tr.svelte-1bxmwst:hover{background-color:#f0f0f0}.notification-span.svelte-1bxmwst.svelte-1bxmwst{width:19rem;color:black}.no-records.svelte-1bxmwst.svelte-1bxmwst{padding:20px;text-align:center;color:#777}.loading.svelte-1bxmwst.svelte-1bxmwst{text-align:center;padding:20px;font-size:18px;color:#777}.loadingSpinner.svelte-1bxmwst.svelte-1bxmwst{border:4px solid rgba(0, 0, 0, 0.3);border-top:4px solid #3498db;border-radius:50%;width:40px;height:40px;-webkit-animation:svelte-1bxmwst-spin 2s linear infinite;animation:svelte-1bxmwst-spin 2s linear infinite;margin:20px auto}@-webkit-keyframes svelte-1bxmwst-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-1bxmwst-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const SvelteTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let batchFilter = "";
  $$result.css.add(css$1);
  return `<div class="prose max-w-none " style="display: flex; justify-content: space-between; align-items: center; "><div><h2${add_attribute("style", `color: var(--app-primary-color, #d60016);`, 0)}>Batches</h2></div>
    <div style="display: flex; align-items: center;"><div><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-rgb(214, 0, 28) focus:shadow-outline" type="text" placeholder="Filter by Batch Name"${add_attribute("value", batchFilter, 0)}></div>    
      ${``}
      <button class="btn btn-info"${add_attribute(
    "style",
    `margin-left: 1rem; background-color: var(--app-primary-color, #d60016);
    border: none;
    color: white;`,
    0
  )}>+ Add Batch</button></div></div>
  ${`<div class="loading svelte-1bxmwst"><div class="loadingSpinner svelte-1bxmwst"></div>
        Loading...
      </div>`}

${``}
${``}

${``}

${``}
${``}`;
});
const addEmployeeModal_svelte_svelte_type_style_lang = "";
const editEmployeeModal_svelte_svelte_type_style_lang = "";
const Timeline_svelte_svelte_type_style_lang = "";
const TimelineItem_svelte_svelte_type_style_lang = "";
const TimelineSeparator_svelte_svelte_type_style_lang = "";
const TimelineDot_svelte_svelte_type_style_lang = "";
const TimelineConnector_svelte_svelte_type_style_lang = "";
const TimelineContent_svelte_svelte_type_style_lang = "";
const TimelineOppositeContent_svelte_svelte_type_style_lang = "";
const displayEmployeeModal_svelte_svelte_type_style_lang = "";
const employeeTable_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-fpswuu{padding:10px 20px;font-size:16px;font-weight:bold;border:none;background-color:#f5f5f5;color:#555;cursor:pointer;transition:background-color 0.3s ease}button.selected.svelte-fpswuu{background-color:#d60016;color:#fff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="prose" style="display:flex; justify-content:center; flex-direction:column; margin-bottom:3%; "><h1 style="-webkit-text-fill-color: #0000; background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b); background-clip: text; -webkit-background-clip: text;">Dashboard</h1></div>
<div class="tab"><button class="${["svelte-fpswuu", "selected"].join(" ").trim()}">Batches</button>
  <button class="${["svelte-fpswuu", ""].join(" ").trim()}">Employees</button></div>
${`${validate_component(SvelteTable, "SvelteTable").$$render($$result, {}, {}, {})}`}
${``}`;
});
export {
  Page as default
};
