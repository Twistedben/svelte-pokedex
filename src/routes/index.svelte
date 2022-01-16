<script context="module">
  export async function load({params, fetch}) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json(); 
    const loadedPokemon = data.results.map((data, i) => {
    
      return {
        id: i + 1,
        name: data.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
      };
    });
    return {props: {pokemons: loadedPokemon}};
  }
</script>
<script>
  import PokemonCard from "../components/pokemonCard.svelte";

  export let pokemons;

  let searchTerm = "";
  let filteredPokemon = [];

  $: {
    if (searchTerm) {
      filteredPokemon = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      filteredPokemon = [...pokemons];
    }
  }

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
  <input bind:value={searchTerm} type="search" 
    placeholder="Search Pokemon" 
    class="rounded-lg p-4 mx-2 focus:outline-transparent focus:bg-yellow-100 focus:shadow-sm focus:border-yellow-500 transition-colors ease-linear duration-300 w-full border-2 border-yellow-400"
  >
  <input type="integer" bind:value={amount}>
</label>

<div class="py-2 grid gap-x-2 gap-y-6 md:grid-cols-3 grid-cols-2 lg:grid-cols-4">
  {#each filteredPokemon as pokemon}
    <PokemonCard pokemon={pokemon}/>
  {/each}
</div>
<style>

</style>