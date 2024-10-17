<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let isOpen = false;

  function handleClose() {
    dispatch('close');
  }

  function handleSubmit() {
    dispatch('submit');
  }
</script>

{#if isOpen}
<div class="fixed inset-0 flex items-center justify-center z-50 bg-overlay">
  <div class="dlg bg-base-300 rounded-lg shadow-lg p-8" style="width: 30%;">
    
    <slot></slot>
    <div class="flex justify-end mt-8">
      <button class="btn" style="margin-right: 1rem; background-color: #63666B;" on:click={handleClose}>
        Close
      </button>
      <button class="btn btn-primary mr-2" style="background-color: var(--app-primary-color, #d60016); border: none; color: white;" on:click={handleSubmit}>
        Delete
      </button>
    </div>
  </div>
</div>
{/if}

<style>
.bg-overlay {
  background-color: rgba(0, 0, 0, 0.5); 
  backdrop-filter: blur(5px); 
}
@media (max-width: 425px) {
  .dlg {
    width: 70% !important;
  }
}
</style>
