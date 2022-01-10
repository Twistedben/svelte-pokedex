<script>
  import {pokemon as pokemons} from "../stores/pokestore";
  import PokemonCard from "../components/pokemonCard.svelte";

  console.log('pokemon', $pokemons)
</script>
<svelte:head>
  <title>
    Pokedex - Find Pokemon
  </title>
</svelte:head>

<h1 class="text-4xl text-center my-8">Pokedex</h1>

{#each $pokemons as pokemon}
  <PokemonCard pokemon={pokemon}/>
{/each}
<style>

</style>