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
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-base-300 rounded-lg shadow-lg p-8" style="width: 30%;">
        <!-- Dialog content goes here -->
        <slot></slot>
        <div class="flex  mt-8">
          <button class="btn btn-primary mr-2"  style={`background-color: var(--app-primary-color, #d60016);
    border: none;
    color: white;`} on:click={handleSubmit}>
            Delete
          </button>
          <button class="btn"  style={`margin-left: 1rem; background-color: #63666B;`} on:click={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  {/if}
  