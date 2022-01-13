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

  const {name, height, weight, sprites} = pokemon;
  const type = pokemon.types[0].type.name

</script>
<div class="flex flex-col items-center mb-8">
  <h1 class="text-4xl text-center my-4 capitalize">{name}</h1>
  <img src={sprites["front_default"]} alt={name}>
  <p>
    <b>
      Type:
    </b>
    {type}
    <br>
    <b>Height:</b>
    {height}
    <br>
    <b>Weight:</b>
    {weight}
  </p>
</div>