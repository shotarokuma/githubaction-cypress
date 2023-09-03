const getPokemons = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return res.json();
}


const Page: React.FC = async () => {
  const poke = await getPokemons(108);
  return <p>{poke.name.toString()}</p>
}

export default Page;