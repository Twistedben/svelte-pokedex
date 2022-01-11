<script>
  import {pokemon as pokemons} from "../stores/pokestore";
  import PokemonCard from "../components/pokemonCard.svelte";

  let searchTerm = "";
  let filteredPokemon = [];
</script>
<svelte:head>
  <title>
    Pokedex - Find Pokemon
  </title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Pokedex</h1>

<label class="mb-4 flex flex-col">
  <span class="pl-4 font-semibold">
    Search for Pokemon
  </span>
  <input type="search" 
  placeholder="Search Pokemon" 
  class="rounded-lg p-4 mx-2 focus:outline-transparent foucs:shadow-md focus:border-yellow-500 w-full border-2 border-yellow-400"
  >
</label>

<div class="py-2 grid gap-x-2 gap-y-6 md:grid-cols-3 grid-cols-2 lg:grid-cols-4">
  {#each $pokemons as pokemon}
  <PokemonCard pokemon={pokemon}/>
  {/each}
</div>
<style>

</style>