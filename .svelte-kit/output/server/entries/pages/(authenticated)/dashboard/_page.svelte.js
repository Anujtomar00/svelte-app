import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
const addBatchModal_svelte_svelte_type_style_lang = "";
const editBatchModal_svelte_svelte_type_style_lang = "";
const dialog_svelte_svelte_type_style_lang = "";
const svelteTable_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".table-container.svelte-1gqwpfu.svelte-1gqwpfu{width:100%;overflow-x:auto}.data-table.svelte-1gqwpfu.svelte-1gqwpfu{width:100%;border-collapse:collapse;font-family:Arial, sans-serif;font-size:14px;margin-bottom:20px;box-shadow:0 2px 5px rgba(0, 0, 0, 0.1);background-color:#fff}@media(max-width: 550px){.data-table.svelte-1gqwpfu.svelte-1gqwpfu{width:100%}.data-table.svelte-1gqwpfu thead th.svelte-1gqwpfu,.data-table.svelte-1gqwpfu tbody td.svelte-1gqwpfu{padding:8px;font-size:12px}.prose.max-w-none.svelte-1gqwpfu.svelte-1gqwpfu{flex-direction:column;align-items:flex-start}.prose.max-w-none.svelte-1gqwpfu>div.svelte-1gqwpfu:first-child,.prose.max-w-none.svelte-1gqwpfu>div.svelte-1gqwpfu:last-child{width:100%}.prose.max-w-none.svelte-1gqwpfu>div.svelte-1gqwpfu:last-child{margin-top:-1rem;margin-bottom:2rem}}.data-table.svelte-1gqwpfu thead th.svelte-1gqwpfu{background-color:#f2f2f2;color:#333333;text-align:center;padding:12px;font-weight:bold;border-bottom:1px solid #cccccc}.data-table.svelte-1gqwpfu tbody td.svelte-1gqwpfu{padding:12px;border-bottom:1px solid #cccccc;text-align:center;vertical-align:middle}.data-table.svelte-1gqwpfu tbody tr.svelte-1gqwpfu:nth-child(even){background-color:#f8f8f8}.data-table.svelte-1gqwpfu tbody tr.svelte-1gqwpfu:hover{background-color:#f0f0f0}.notification-span.svelte-1gqwpfu.svelte-1gqwpfu{width:19rem;color:black}.no-records.svelte-1gqwpfu.svelte-1gqwpfu{padding:20px;text-align:center;color:#777}.loading.svelte-1gqwpfu.svelte-1gqwpfu{text-align:center;padding:20px;font-size:18px;color:#777}.loadingSpinner.svelte-1gqwpfu.svelte-1gqwpfu{border:4px solid rgba(0, 0, 0, 0.3);border-top:4px solid #3498db;border-radius:50%;width:40px;height:40px;-webkit-animation:svelte-1gqwpfu-spin 2s linear infinite;animation:svelte-1gqwpfu-spin 2s linear infinite;margin:20px auto}@-webkit-keyframes svelte-1gqwpfu-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-1gqwpfu-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const SvelteTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let batchFilter = "";
  $$result.css.add(css$1);
  return `<div class="prose max-w-none  svelte-1gqwpfu" style="display: flex; justify-content: space-between; align-items: center; width: 100%"><div class="svelte-1gqwpfu"><h2${add_attribute("style", `color: var(--app-primary-color, #d60016);`, 0)}>Batches</h2></div>
    <div style="display: flex; align-items: center; margin-top:22px" class="svelte-1gqwpfu"><div><input style="height: 3rem;" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-rgb(214, 0, 28) focus:shadow-outline" type="text" placeholder="Filter by Batch Name"${add_attribute("value", batchFilter, 0)}></div>    
      ${``}
      <button class="btn btn-info"${add_attribute(
    "style",
    `margin-left: 1rem; background-color: var(--app-primary-color, #d60016);
    border: none; height:3rem; 
    color: white;`,
    0
  )}>+ Add Batch</button></div></div>
  ${`<div class="loading svelte-1gqwpfu"><div class="loadingSpinner svelte-1gqwpfu"></div>
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
  code: ":root{--switches-bg-color:#f2f2f2;--switches-label-color:black;--switch-bg-color:#d60016;--switch-text-color:white }.dashboard-container.svelte-v1iiex.svelte-v1iiex.svelte-v1iiex{padding:3rem\n  }@media(max-width: 670px){.dashboard-container.svelte-v1iiex.svelte-v1iiex.svelte-v1iiex{padding:1rem\n  }}.switches-container.svelte-v1iiex.svelte-v1iiex.svelte-v1iiex{width:16rem;display:flex;padding:0;position:relative;background:var(--switches-bg-color);line-height:3rem;border-radius:7px;margin-left:auto;margin-right:auto;box-shadow:rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px}.switches-container.svelte-v1iiex input.svelte-v1iiex.svelte-v1iiex{visibility:hidden;position:absolute;top:0}.switches-container.svelte-v1iiex label.svelte-v1iiex.svelte-v1iiex{width:50%;padding:0;margin:0;text-align:center;cursor:pointer;color:var(--switches-label-color)}.switch-wrapper.svelte-v1iiex.svelte-v1iiex.svelte-v1iiex{position:absolute;top:0;bottom:0;width:50%;z-index:3;transition:transform .5s cubic-bezier(.77, 0, .175, 1)}.switch.svelte-v1iiex.svelte-v1iiex.svelte-v1iiex{border-radius:7px;background:var(--switch-bg-color);height:100%}.switch.svelte-v1iiex div.svelte-v1iiex.svelte-v1iiex{width:100%;text-align:center;opacity:0;display:block;color:var(--switch-text-color) ;transition:opacity .2s cubic-bezier(.77, 0, .175, 1) .125s;will-change:opacity;position:absolute;top:0;left:0}.switches-container.svelte-v1iiex input.svelte-v1iiex:nth-of-type(1):checked~.switch-wrapper.svelte-v1iiex{transform:translateX(0%)}.switches-container.svelte-v1iiex input.svelte-v1iiex:nth-of-type(2):checked~.switch-wrapper.svelte-v1iiex{transform:translateX(100%)}.switches-container.svelte-v1iiex input:nth-of-type(1):checked~.switch-wrapper .switch div.svelte-v1iiex.svelte-v1iiex:nth-of-type(1){opacity:1}.switches-container.svelte-v1iiex input:nth-of-type(2):checked~.switch-wrapper .switch div.svelte-v1iiex.svelte-v1iiex:nth-of-type(2){opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div class="dashboard-container p-4 svelte-v1iiex"><div class="prose" style="display:flex; justify-content:center; flex-direction:column; margin-bottom:3%; "><h1 style="-webkit-text-fill-color: #0000; background: -webkit-linear-gradient(270deg,#d6001c -54.17%,#6d297b); background-clip: text; -webkit-background-clip: text;">Dashboard</h1></div>


<div style="float: left;" class="switches-container svelte-v1iiex"><input type="radio" id="Batches" name="switchPlan" value="Batches" checked="checked" class="${["svelte-v1iiex", "selected"].join(" ").trim()}">
  <input type="radio" id="Employees" name="switchPlan" value="Employee" class="${["svelte-v1iiex", ""].join(" ").trim()}">
  <label for="Batches" class="svelte-v1iiex">Batches</label>
  <label for="Employees" class="svelte-v1iiex">Employees</label>
  <div class="switch-wrapper svelte-v1iiex"><div class="switch svelte-v1iiex"><div class="svelte-v1iiex">Batches</div>
      <div class="svelte-v1iiex">Employees</div></div></div></div>

${`${validate_component(SvelteTable, "SvelteTable").$$render($$result, {}, {}, {})}`}
${``}
</div>`;
});
export {
  Page as default
};
