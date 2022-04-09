<script>
import { loop_guard } from "svelte/internal";

  export let data = [];
  export let url = "";
  export let title = "";
  export let movie = "";
  async function getData(url) {
    if (!url) return;
    url += "&api_key=bbfbd3744c8bf9d4bf9de18f180b4d6c";
    await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        data = json.results || [];
      });
  }

  function handleClick(id) {
    if(!url)return
    movie = id;
  }
  $: getData(url);
</script>

{#if data.length}
  <h4>{title || "other movies"}</h4>
  <div class="contain app">
    <ul class="hs full no-scrollbar">
      {#each data as item}
          <li
            on:click|preventDefault={() => {
              handleClick(item.id);
            }}
            class="item flow-text"
            loading="lazy"
          >
          <img data-src={'https://image.tmdb.org/t/p/w185' + (item.poster_path||item.profile_path)}  on:error={function() {this.src='/public/unknown.svg'}} alt="" class="lazyload">
            <div class="flow-text cal">
              {item.title || item.name}
            </div>
            <span>{item.release_date || item.character}</span>
          </li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  :root {
    --gutter: 20px;
  }
  .app {
    padding: 0;
    display: grid;
    grid-gap: var(--gutter) 0;
    grid-template-columns: var(--gutter) 1fr var(--gutter);
    align-content: start;
  }

  .app > * {
    grid-column: 2 / -2;
  }

  .app > .full {
    grid-column: 1 / -1;
  }

  .hs {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 0;
    grid-template-rows: 270px;
    grid-auto-flow: column;
    grid-auto-columns: 183px;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    padding-bottom: calc(0.75 * var(--gutter));
    margin-bottom: calc(-0.25 * var(--gutter));
  }

  .hs:before,
  .hs:after {
    content: "";
    width: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .hs > li,
  .item {
    position: relative;
    scroll-snap-align: center;
    background-repeat: no-repeat !important;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    flex-direction: column;
    border-radius: 8px;
  }

  .cal {
    width: 100%;
    height: 60%;
    bottom: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    display: none;
    /* create animation for height */
    transition: all 0.5s ease-in-out;
    animation: fadeOut 0.5s ease-in-out;
  }
  .item:hover .cal {
    display: block;
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      height: 0;
    }
    to {
      opacity: 1;
      height: 60%;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      height: 60%;
    }
    to {
      opacity: 0;
      height: 0;
    }
  }

  li {
    width: 100%;
    position: relative;
  }
 li img{
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
  left: 0;
  border-radius: 8px;
  object-fit: cover;
 }
  span {
    position: absolute;
    background-color: grey;
    z-index: 600;
    color: #fdf6ec;
    padding-right: 10px;
    border-bottom-right-radius: 8px;
    font-size: 12px;
  }
  .no-scrollbar {
    scrollbar-width: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
