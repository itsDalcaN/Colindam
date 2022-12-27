<script lang="ts">
  import type { Writable } from 'svelte/store';

  export let title = 'Setting';
  export let settingStore: Writable<boolean>;

  let checked = false;
  settingStore.subscribe((value) => {
    checked = value;
  });

  function toggleSetting() {
    settingStore.update((value) => !value);
  }
</script>

<div class="form-control">
  <label class="cursor-pointer label">
    <span class="label-text">{title}</span>
    <input type="checkbox" class="toggle toggle-primary" {checked} on:click={toggleSetting} />
  </label>
</div>
