<script lang="ts">
  let count=1;
 let inc = () =>{
   count = count+1;
 }
</script>

<button on:click="{inc}">{count}</button>

<style>
button{
  padding: 2em;
  font-size: 16px;
}
button:hover{
  padding: 2em;
  font-size: 16px;
  background: #ccc;
}
button:active{
  padding: 2em;
  font-size: 16px;
  background: rgb(209, 75, 13);
}
</style>
