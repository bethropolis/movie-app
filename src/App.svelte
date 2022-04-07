<script>
  import { fade } from "svelte/transition";
  import Nav from "./lib/nav.svelte";
  import MovieView from "./lib/MovieView.svelte";
  import Container from "./lib/container.svelte";
  let search = "hello";
  let movie;
  let tab = 1;
  let urls = [
    { url: "../../test/download.json?", title: "popular movies" },
    // {
    //   url: "https://api.themoviedb.org/3/trending/movie/day?",
    //   title: "trending movies",
    // },
    // {
    //   url: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=28",
    //   title: "discover movies",
    // },
  ];
</script>

<Nav bind:search />
{#if tab === 1}
  <!-- content here -->
  {#each urls as url}
    <Container url={url.url} title={url.title} bind:movie />
  {/each}
{/if}

{#if tab === 2}
  <!-- content here -->
  <MovieView />
{/if}

<main>
  <h1 transition:fade>Hello {search}</h1>
  <p>This is a simple Svelte app.</p>
</main>

<style>
  :root {
    --primary: #1b1a17;
    --color: #eff0ec;
  }
</style>
