<script>
  import Footer from "./lib/footer.svelte";
  import Nav from "./lib/nav.svelte";
  import MovieView from "./lib/MovieView.svelte";
  import Container from "./lib/container.svelte";
  let search = "hello";
  let movie;
  let tab = 1;
  let urls = [
    {
      url: "https://api.themoviedb.org/3/trending/movie/day?",
      title: "trending movies",
    },
    {
      url: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=28",
      title: "discover movies",
    },
    {
      url: "https://api.themoviedb.org/3/movie/popular?",
      title: "popular movies",
    },
    {
      url: "https://api.themoviedb.org/3/movie/top_rated?",
      title: "top rated movies",
    },
    {
      url: "https://api.themoviedb.org/3/movie/upcoming?",
      title: "upcoming movies",
    },
    {
      url: "https://api.themoviedb.org/3/movie/now_playing?",
      title: "now playing movies",
    },
    {
      url: "https://api.themoviedb.org/3/movie/latest?",
      title: "latest movies",
    },
    {
      url: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=28",
      title: "Action movies",
    },
    {
      url: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=18",
      title: "Crime movies",
    },
    {
      url: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=12",
      title: "Adventure movies",
    },
    {
      url: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=16",
      title: "Animation movies",
    },
    {
      url: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=35",
      title: "Comedy movies",
    },
    // trillers
    {
      url: "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=0&page=1&with_genres=99",
      title: "trillers",
    },
  ];
  $: {
    console.log("movie:", movie);
    if (movie) {
      tab = 2;
    }
  }
</script>

<Nav bind:search bind:tab />
{#if tab === 1}
  <!-- content here -->
  {#each urls as url}
    <Container url={url.url} title={url.title} bind:movie />
  {/each}
{/if}

{#if tab == 2}
  <!-- content here -->
  <MovieView bind:id={movie} />
{/if}
<Footer />

<style>
  :root {
    --primary: #1b1a17;
    --color: #eff0ec;
  }
</style>
