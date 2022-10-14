import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Pokemones() {
	const [pokemones, setPokemones] = useState([]);
	const [pokemonSelect, setPokemoneSelect] = useState("");
	const navigate = useNavigate();
	const url = "https://pokeapi.co/api/v2/pokemon";
	const traerPokemon = async () => {
			const res = await fetch(url);
			const {results} = await res.json();
			setPokemones(results);
			setPokemoneSelect(results[0].name);
	}

	const irDetallePokemon = async () => {
		if (pokemonSelect) navigate (`/pokemones-detalle/${pokemonSelect}`);
		else alert ("Debe seleccionar un pokemon");
	};

	useEffect (() => {
		traerPokemon();
	}, []);

	return (
		<div className="mt-5 text-center">
			<h1> Selecciona un pokemon </h1>
			<div className="col-5 col-sm-3 col-lg-2 mx-auto">
				<select
					value={pokemonSelect}
					onChange={e => setPokemoneSelect(e.target.value)}>
						{
								pokemones.map(pokemon => <option details={pokemon} key={pokemon.name}>{pokemon.name}</option>)
						}
				</select><br/><br/>
				<Button variant="dark" onClick={ irDetallePokemon }>Ver Detalle</Button>
			</div>
		</div>
	);
}