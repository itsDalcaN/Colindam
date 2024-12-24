<script>
  import '../app.postcss';
  import '../global.scss';
  import Header from '$lib/Header.svelte';
</script>

<header>
  <Header />
</header>
<article
  class="w-11/12 my-10 mx-auto prose prose-base sm:prose-xs md:prose-lg lg:prose-xl max-w-none"
>
  <slot />
</article>
<footer class="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>
      Created in {new Date().getFullYear()} by Dan Sumindan /
      <a class="link link-secondary" href="https://github.com/itsDalcaN/Colindam">GitHub</a>
    </p>
  </aside>
</footer>
