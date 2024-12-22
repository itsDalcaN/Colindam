<script lang="ts">
  import { autoExpandOnSearchSetting, sortSongsAlphabeticallySetting } from '$lib/stores';
  import SettingRow from '../../lib/SettingRow.svelte';
</script>

<h2 class="text-center">Settings</h2>
<div class="flex flex-col m-auto xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/3">
  <SettingRow title="Auto Expand Lyrics On Search" settingStore={autoExpandOnSearchSetting} />
  <SettingRow title="Sort Songs Alphabetically" settingStore={sortSongsAlphabeticallySetting} />
</div>
