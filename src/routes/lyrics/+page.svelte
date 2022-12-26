<script lang="ts">
  import CollapsibleSection from '$lib/CollapsibleSection.svelte';
  import { convertRomanianSymbols, removePunctuation } from '$lib/util';
  import type { PageData } from './$types';
  export let data: PageData;
  const initSongs = data.songs;
  let songs = initSongs;
  let search = '';

  function filterByVerse() {
    songs = initSongs.filter((s) => stringIncludesSearch(s.searchLyrics));
  }

  function stringIncludesSearch(line: string) {
    const formattedString = convertRomanianSymbols(removePunctuation(line));
    return formattedString.toLowerCase().includes(search.toLowerCase());
  }
</script>

<h2 class="text-center">Lyrics</h2>
<div class="mb-10">
  <div class="search-field">
    <div class="material-symbols-outlined">search</div>
    <input
      type="text"
      placeholder="Filtering by song lyrics ... "
      class="input input-ghost w-full text-left mx-4"
      bind:value={search}
      on:input={filterByVerse}
    />
  </div>
</div>
<div>
  {#each songs as { title, displayLyrics }}
    <CollapsibleSection {title} expanded={search !== ''}>
      {#each displayLyrics as verse}
        <p>
          {#each verse as line}
            {#if search !== '' && stringIncludesSearch(line)}
              <span><mark class="text-success bg-transparent">{line}</mark></span>
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

<style lang="scss">
  .search-field {
    display: flex;
    justify-content: space-between;

    align-items: center;
    width: 100%;
  }
</style>
