<script lang="ts">
  import { autoExpandOnSearchSetting } from '$lib/stores';
  import SettingRow from '../../lib/SettingRow.svelte';
</script>

<h2 class="text-center">Settings</h2>
<div class="flex flex-col w-1/2 m-auto">
  <SettingRow title="Auto Expand Lyrics On Search" settingStore={autoExpandOnSearchSetting} />
</div>
