<script>
  import Container from "./container.svelte";
  let movie = [];
  export let search = "vue";
  export let tab = 1;
  export let m = '';

  let apikey = "bbfbd3744c8bf9d4bf9de18f180b4d6c";

  function SearchMovie(search) {
    if (!search) return;
    let url =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      apikey +
      "&query=" +
      search;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        movie = data.results;
        console.log(movie);
      })
      .catch((error) => console.error(error));
  }
  $: {
    SearchMovie(search);
    movie = [];
    tab = 3;
  }
</script>

{#if movie}
  <Container title="search results" bind:movie={m} bind:data={movie} />
{/if}

<!-- markup (zero or more items) goes here -->
<style>
  :root {
    --primary: #1b1a17;
    --color: #eff0ec;
  }
  .dark {
    background-color: var(--primary);
  }
  .light {
    background-color: var(--color);
  }
</style>
