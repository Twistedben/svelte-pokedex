import {writable} from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const res = await fetch(url);
  const data = await res.json(); 
  console.log('data:', data)
  const loadedPokemon = data.results.map((data, i) => {
    
    return {
      id: i + 1,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
      
    };
  });
  pokemon.set(loadedPokemon)
}
fetchPokemon();