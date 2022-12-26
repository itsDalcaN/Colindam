<script>
  import '../app.postcss';
  import '../global.scss';
  import Header from '$lib/Header.svelte';
</script>

<header>
  <Header />
</header>
<article class="w-4/5 my-10 m-auto prose prose-base sm:prose-xs md:prose-lg lg:prose-xl">
  <slot />
</article>
