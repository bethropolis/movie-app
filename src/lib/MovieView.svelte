<script>
  import Container from "./container.svelte";
  let MovieView = {};
  let t = true;
  export let movie;
  // perform fetch request from https://www.omdbapi.com/?i=tt3896198&apikey=d7598465 and assign data to MovieView
  let getMovie = async (id) => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6493a6123f5162ff2ff9776e58dd41de&append_to_response=videos`
    );
    let data = await response.json();
    MovieView = data;
    console.log(MovieView);
  };
  $: getMovie(movie);
</script>

<main>
  <div class="container">
    <div class="row">
      <div class="col s12 center">
        <div class="img">
          <img
            src="https://image.tmdb.org/t/p/w185{MovieView.poster_path}"
            alt=""
          />
          <span class="rating ">{MovieView.vote_average}</span>
        </div>
        <div class="card-content ">
          <h3 class="card-title">{MovieView.title}</h3>
          <p class="flow-text">{MovieView.overview}</p>
        </div>
      </div>
    </div>
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
    width: 300px;
    margin: 0 auto;
  }
  span.rating {
    position: absolute;
    color: var(--primary) lightness(+20%);
    bottom: 2px;
    left: 5px;
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
