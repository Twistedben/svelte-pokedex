<script context="module">
  export async function load({params, fetch}) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url); 

    if (res.ok) {
			return {
				props: {
					pokemon: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
  }
</script>
<script>
  export let pokemon;
  const name = pokemon.name;
  const type = pokemon.types[0].type.name

</script>
<h1 class="text-4xl text-center my-8">{name}</h1>
{type}