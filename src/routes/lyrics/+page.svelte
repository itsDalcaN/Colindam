<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData;
  const initSongs = data.songs;
  let songs = initSongs;
  let search = '';

  function filterByVerse() {
    songs = initSongs.filter((s) => s.searchLyrics.toLowerCase().includes(search.toLowerCase()));
  }
</script>

<h2 class="text-center">Versuri</h2>
<input
  type="text"
  placeholder="Filtering by song lyrics ... "
  class="input input-bordered input-primary w-full"
  bind:value={search}
  on:input={filterByVerse}
/>
{#each songs as { title, displayLyrics, searchLyrics }}
  <h3>{title}</h3>
  {#each displayLyrics as verse}
    <p>
      {#each verse as line}
        <span>{line}</span> <br />
      {/each}
    </p>
  {/each}
  <p class="text-neutral-focus">{searchLyrics}</p>
{/each}
