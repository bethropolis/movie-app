<script lang="ts">
    let isSearch = false;
  function handleClick(){
    isSearch = !isSearch;
    search = "";
  }
  function handleSubmit(){
   
  }
  export let search = "";
</script>

<nav class="transparent">
    <div class="nav-wrapper">
  {#if isSearch}
  <form action="#" on:submit|preventDefault="{handleSubmit}">
    <input
      type="text"
      bind:value={search}
      class="white"
      placeholder="search for movie..."
    /></form>
    <i class="material-icons"  on:click|preventDefault="{handleClick}" style="position: absolute; z-index: 3;cursor: pointer;  top: 0;right: 0;color: gray;">close</i>
    <!-- content here -->
  {:else}

      <ul class="left">
        <li><a href="#"><i class="material-icons">cloud</i></a></li>
      </ul>
      <ul class="right">
        <li><a href="#" on:click|preventDefault="{handleClick}"><i class="material-icons">search</i></a></li>
      </ul>
   
  {/if}
 </div>
</nav>

<!-- markup (zero or more items) goes here -->
<style></style>
