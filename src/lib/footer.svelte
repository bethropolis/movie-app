<script>
   export let tab;

</script>
<!-- footer with atrribution to tmdb web-->
<footer class="center">
  {#if tab !== 3}
     <!-- content here -->

    <p>powered by <a href="themoviedb.org">themoviedb.org</a></p>  
    {/if}
</footer>

   <style>
    footer {
      background-color: #222;
      color: #fff;
      padding: 1px;
      
    }
    footer a {
      color: #fff;
    }
    footer a:hover {
      color: #fff;
    }
</style>

<!-- markup (zero or more items) goes here -->