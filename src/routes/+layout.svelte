<script>
  import '../app.postcss';
  import '../global.scss';
  import Header from '$lib/Header.svelte';
</script>

<header>
  <Header />
</header>
<article
  class="w-11/12 my-10 m-auto prose prose-base sm:prose-xs md:prose-lg lg:prose-xl max-w-none"
>
  <slot />
</article>
