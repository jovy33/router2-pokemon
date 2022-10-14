import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function PokemonesDetalle() {
  const [detallePokemon, setDetallePokemon] = useState([]);
	const { id } = useParams();

	const url = "https://pokeapi.co/api/v2/pokemon/";
	const traerPokemon = async () => {
		const res = await fetch(url + id);
		const { sprites, stats, types } = await res.json();
		const pokemon = {
			img: sprites.other.home.front_default,
			hp: stats[0].base_stat,
			attack: stats[1].base_stat,
			defense: stats[2].base_stat,
			specialAttack: stats[3].base_stat,
			specialDefense: stats[4].base_stat,
			speed: stats[5].base_stat,
			type: types[0].type.name,
		};
		setDetallePokemon(pokemon);
	}

	useEffect (() => {
		traerPokemon();
	}, []);

  return (
    <div className='mt-5 divPokemonDetalle'>
			<div className='divImgDetalle'>
				<img src={detallePokemon.img} alt="imagen pokemon" />
			</div>
			<div className='divDetalle'>			
				<h1>{ id }</h1>
				<ul>
					<li>hp: {detallePokemon.hp}</li>
					<li>attack: {detallePokemon.attack}</li>
					<li>defense: {detallePokemon.defense}</li>
					<li>special-attack: {detallePokemon.specialAttack}</li>
					<li>special-defense: {detallePokemon.specialDefense}</li>
					<li>speed: {detallePokemon.speed}</li>
				</ul>
				<span>{detallePokemon.type}</span>
			</div>
		</div>
  )
}
