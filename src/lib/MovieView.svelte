<script lang='ts'>
   let MovieView:Object = {}
   let t = true;
   // perform fetch request from https://www.omdbapi.com/?i=tt3896198&apikey=d7598465 and assign data to MovieView
 let getMovie = async () => {
    let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d7598465`);
    let data = await response.json();
    MovieView = data;
    console.log(MovieView);
    return data;
    }
 getMovie();
</script>

{#if t}
<div class="card medium">
    <div class="card-image">
        <img src="/src/assets/svelte.png" alt=""/>
        <span class="card-title"></span>
    </div>
    <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.</p>
    </div>
    <div class="card-action">
        <a href="https://hello.github">This is a link</a>
    </div>
</div>
{/if}
<style>
    /* your styles go here */
    a{
        color:rgba(28, 139, 33, 0.911);
    }
</style>

<!-- markup (zero or more items) goes here -->