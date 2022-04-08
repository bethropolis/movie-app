<script>
  import Container from "./container.svelte";
  let MovieView = {};
  let genres = [];
  let t = true;
  export let id = '634649';
  // perform fetch request from https://www.omdbapi.com/?i=tt3896198&apikey=d7598465 and assign data to MovieView
  let getMovie = async (id) => {
    if (!id) return;
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=bbfbd3744c8bf9d4bf9de18f180b4d6c&append_to_response=videos,images`
    );
    let data = await response.json();
    MovieView = data;
    genres = data.genres;
    console.log(MovieView);
  };
  $: {
    getMovie(id);
  }
</script>

<main>
  <div>
    {#if MovieView && MovieView.title}
      <div class="row">
        <div class="col s12 center">
          <div
            class="img"
            style="background-image: url({'https://image.tmdb.org/t/p/w185' + MovieView.backdrop_path});">
            <div class="co-img">
              <img
                src="https://image.tmdb.org/t/p/w185{MovieView.poster_path}"
                alt=""
              />
              <span class="rating ">{MovieView.vote_average}</span>
            </div>
          </div>
          <div class="card-content ">
            <h3 class="card-title">{MovieView.title || "loading..."}</h3>
            <div class="row">
              {#each genres as item}
                <div class="chip">
                  {item.name}
                </div>
              {/each}
            </div>
            <p class="flow-text">{MovieView.overview || "loading..."}</p>
          </div>
        </div>
      </div>
    {/if}
  </div>
</main>

<!-- markup (zero or more items) goes here -->
<style>
  img {
    margin-top: 0px;
    font-size: 30px;
    width: 100%;
    max-width: 290px;
    box-shadow: 13px 20px 5px -5px rgba(3, 3, 3, 0.1);
  }

  div.col.s12.center {
    margin-top: 16px;
    padding: 0;
    padding-top: 15px;
    width: 100%;
  }

  main {
    position: relative;
    border-bottom: 1px dotted #f1f1f1;
  }

  h3 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .img {
    position: relative;
    margin: 0 auto;
    padding: 40px 0;
  }
  div.co-img {
    position: relative;
    margin: 0 auto;
    display: grid;
    place-content: center;
    width: 300px;
  }
  
div.chip{
  background-color: transparent;
  border-radius: 9px;
  filter: brightness(37%);
  color: white;
  font-size: 2ex;
  
}

div.row {
  display: block;
  margin: 0 auto;
  width: 80%;
}
  span.rating {
    position: absolute;
    color: var(--primary) lightness(+20%);
    bottom: -4px;
    left: 51px;
    width: 30px;
    text-align: left;
    padding: 0.3em;
    border-top-right-radius: 12px;
    background-color: #af9c73;
    font-size: 16px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-style: normal;
  }
</style>
