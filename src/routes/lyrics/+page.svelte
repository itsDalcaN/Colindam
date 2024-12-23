<script lang="ts">
  import CollapsibleSection from '$lib/CollapsibleSection.svelte';
  import { autoExpandOnSearchSetting, sortSongsAlphabeticallySetting } from '$lib/stores';
  import { convertRomanianSymbols, removePunctuation } from '$lib/util';
  import type { PageData } from './$types';
  export let data: PageData;
  const initSongs = data.songs;
  let songs = initSongs;
  let search = '';

  let shouldExpandAll = false; // Expand all songs toggle state
  let activateAutoExpand = false; // Conditionally expand based on search
  let shouldAutoExpandOnSearch = false; // Local setting from the store
  let sortSongsAlphabetically = false; // Local setting from the store

  autoExpandOnSearchSetting.subscribe((value: boolean) => {
    shouldAutoExpandOnSearch = value;
  });

  sortSongsAlphabeticallySetting.subscribe((value: boolean) => {
    sortSongsAlphabetically = value;
  });

  $: {
    updateSongs(search);
    if (shouldAutoExpandOnSearch) {
      activateAutoExpand = search !== '';
    }
  }

  function updateSongs(value: string) {
    songs = initSongs.filter((s) => stringIncludesValue(s.searchLyrics, value));

    // Sort songs by title
    if (sortSongsAlphabetically) {
      songs.sort((songA, songB) => songA.title.localeCompare(songB.title));
    }
  }

  function stringIncludesValue(line: string, value: string) {
    const formattedString = convertRomanianSymbols(removePunctuation(line));
    return formattedString.toLowerCase().includes(value.toLowerCase());
  }
</script>

<h2 class="text-center">Lyrics</h2>
<div class="m-auto sm:w-5/6 md:w-3/5 lg:w-1/2 xl:w-5/12">
  <div class="mb-10">
    <div class="search-field">
      <div class="material-symbols-outlined">search</div>
      <input
        type="text"
        placeholder="Search lyrics ... "
        class="input input-ghost w-full text-left mx-2"
        bind:value={search}
      />
      <button id="clear" on:click={() => (search = '')} disabled={search === ''}>
        <span class="material-symbols-outlined">backspace</span>
      </button>
      <label class="swap">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" bind:checked={shouldExpandAll} />
        <!-- Collapse icon -->
        <div class="swap-on">
          <span class="material-symbols-outlined">expand_less</span>
        </div>
        <!-- Expand icon -->
        <div class="swap-off">
          <span class="material-symbols-outlined">expand_more</span>
        </div>
      </label>
    </div>
  </div>
  <div>
    {#each songs as { title, displayLyrics }}
      <CollapsibleSection {title} expanded={shouldExpandAll || activateAutoExpand}>
        {#each displayLyrics as verse}
          <p class="text-xl">
            {#each verse as line}
              {#if search !== '' && stringIncludesValue(line, search)}
                <span
                  ><mark class="text-neutral-content font-semibold bg-transparent">{line}</mark
                  ></span
                >
                <br />
              {:else}
                <span>{line}</span> <br />
              {/if}
            {/each}
          </p>
        {/each}
      </CollapsibleSection>
    {/each}
  </div>
</div>

<style lang="scss">
  .search-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .material-symbols-outlined {
    font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 200,
      'opsz' 48;
    padding: 5px;
  }

  #clear:disabled {
    opacity: 0.1;
  }
</style>
