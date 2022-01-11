<script>
  export let pokemon;
</script>
<a class="p-6 bg-gray-200 shadow-sm rounded-md hover:shadow-md flex flex-col transition-all ease-in duration-300 hover:scale-105 mx-2 items-center justify-center" href={`/pokemon/${pokemon.id}`}>
  <img class="h-40 w-40" height="" src={`${pokemon.imageUrl}`} alt={pokemon.name} loading="lazy">
  <h2 class="uppercase text-xl">{pokemon.id}. {pokemon.name}</h2>
</a>
