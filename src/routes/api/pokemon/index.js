export async function get({parmas}) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const res = await fetch(url);
  const data = await res.json(); 
  const loadedPokemon = data.results.map((data, i) => {
    
    return {
      id: i + 1,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
      weight: data.weight
      
    };
  });
  return {
    status: 200,
    body: loadedPokemon
  }
}