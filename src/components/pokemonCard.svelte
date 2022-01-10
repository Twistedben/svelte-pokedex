<script>
  export let pokemon;
</script>
<a href={`/pokemon/${pokemon.id}`}>
  <img src={`${pokemon.imageUrl}`} alt={pokemon.name} loading="lazy">
</a>
<p>
  {pokemon.name}
</p>