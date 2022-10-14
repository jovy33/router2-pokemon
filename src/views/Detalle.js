import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Detalle() {
    const [name] = useParams();
    const [pokemon, setPokemones] = useState({});

    const url = "https://pokeapi.co/api/v2/pokemon"

    const traerPokemon = async (name) => {
        const res = await fetch(`${url}/${name}`);
        const data = await res.json();
        const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((stat) => ({
            name: stat.stat.name,
            base: stat.base_stat
        }));

        const types = data.types.map(({type}) => type.name).join(" ");
        setPokemones({ name, stats, src, types });
    }

    useEffect(() => {
        traerPokemon(name);
    }, [name]);

  return (
    <div>
        <PokemonCard pokemon={pokemon} />
    </div>
  )
}
