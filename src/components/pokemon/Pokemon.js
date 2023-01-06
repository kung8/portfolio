import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Pokemon() {
    const [dittoImg, updateDittoImg] = useState(null);
    const [pokemonList, updatePokemonList] = useState([]);
    const [selected, updateSelected] = useState('ditto');

    useEffect(() => {
        getDitto();
        getOtherPokemon();
    }, []);

    const getDitto = async () => {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        updateDittoImg(data.sprites.front_default);
    }

    const getOtherPokemon = async () => {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        updatePokemonList(data.results);
    }

    const transformDitto = async (url, name) => {
        if (name !== selected) {
            const { data } = await axios.get(url);
            const img = document.querySelector('.ditto-img');
            const glow = document.querySelector('.glow');

            setTimeout(() => {
                updateDittoImg(data.sprites.front_default);
                updateSelected(name);
                img.classList.remove('transition-out');
                glow.classList.add('hide');
            }, 300);

            img.classList.add('transition-out');
            glow.classList.remove('hide');
        }
    }

    const mapPokemonList = () => {
        return (
            <div className="pokemon-list-container">
                {pokemonList.map((item, index) => {
                    const { name, url } = item;
                    return (
                        <button
                            key={'pokemon-' + index}
                            onClick={() => transformDitto(url, name)}
                            className={`pokemon-button ${selected === name && 'selected'}`}>
                            {name}
                        </button>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="pokemon-page">
            <div className="ditto-img-container">
                <img className="ditto-img" src={dittoImg} alt="pokemon" />
                <div className="glow hide"></div>
            </div>
            {mapPokemonList()}
        </div>
    )
}