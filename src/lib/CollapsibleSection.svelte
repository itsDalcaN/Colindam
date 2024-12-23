<script lang="ts">
  export let title: string;
  export let expanded = false;

  function toggleExpanded() {
    expanded = !expanded;
  }
</script>

<div class="collapsible">
  <h3>
    <button
      aria-expanded={expanded}
      on:click={toggleExpanded}
      class="btn btn-ghost uppercase no-animation text-primary text-base italic"
    >
      {title}
      <svg viewBox="0 0 20 20" fill="none" class="stroke-2 stroke-primary">
        <path class="vert" d="M10 1V19" />
        <path d="M1 10L19 10" />
      </svg>
    </button>
  </h3>

  {#if expanded}
    <div class="contents" hidden={!expanded}>
      <slot />
    </div>
  {/if}
</div>

<style lang="scss">
  .collapsible {
    margin: 1rem 0rem;
  }

  .contents {
    display: flow-root;
    margin: 0px 0.125rem;
    padding: 0px 2rem;
    border-bottom: 2px hsl(var(--b3)) solid;
    border-radius: 0.5rem;
    background-color: hsl(var(--b2));
  }

  h3 {
    margin: 0;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  button[aria-expanded='true'] .vert {
    display: none;
  }

  svg {
    height: 0.7em;
    width: 0.7em;
  }
</style>
