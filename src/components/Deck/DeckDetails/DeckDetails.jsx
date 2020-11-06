import React, { useEffect, useState } from 'react';
import cardsStore from '../../../stores/store';
import { loadDecks } from '../../../actions/action-creators';
import './DeckDetails.css';
import { Link } from 'react-router-dom';

function DeckDetails() {
    
    const [decks, setDecks] = useState(cardsStore.getDecks());
    const [title, setTitle] = useState(decks[0]?.title);
    const [description, setDescription] = useState(decks[0]?.description);

    function handleChange() {
        const decks = cardsStore.getDecks();
        setDecks(decks);
        setTitle(decks[0]?.title);
        setDescription(decks[0]?.description);
    }

    useEffect(() => {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
        cardsStore.addEventListener(handleChange);

        if (!decks || !decks.length) {
            loadDecks();
        }
            
        return () => { cardsStore.removeEventListener(handleChange) }
    }, [decks]);

    function onChange(setValue, value) {
        setValue(value);
    }

    function pokemonStatistics() {
        let totalPokemon = 0;
        if (decks[0]?.cards) {
            decks[0].cards.map((card) => {
                if (card.supertype === 'Pokémon') return totalPokemon+=1;
                return null;
            });
        }

        if (totalPokemon < 20) {
            return (
                <span className="statistic warning">You have {totalPokemon} pokemons and we recommend to have at least 20</span>
            );
        } else if (totalPokemon > 38) {
            return (
                <span className="statistic warning">You have {totalPokemon} pokemons and we recommend to have maximum 38</span>
            );
        } else if (totalPokemon > 20 && totalPokemon < 38) {
            return (
                <span className="statistic ok">You have {totalPokemon} pokemons!</span>
            );
        }

    }

    function pokemonTypesStatistics() {
        let totalPokemonTypes = 0;
        if (decks[0]?.cards) {
            decks[0].cards.map((card) => {
                if (card.subtype === 'Basic') return totalPokemonTypes+=1;
                return null;
            });
        }

        if (totalPokemonTypes < 1) {
            return (
                <span className="statistic wrong">You have {totalPokemonTypes} basic pokemons and you must have at least 1</span>
            )
        } else if (totalPokemonTypes > 1) {
            return (
                <span className="statistic ok">You have {totalPokemonTypes} basic pokemons!</span>
            );
        }

    }

    function energyStatistics() {
        let totalEnergy = 0;

        if (decks[0]?.cards) {
            decks[0].cards.map((card) => {
                if (card.supertype === 'Energy') return totalEnergy++;
                return null;
            });
        }

        if (totalEnergy < 12) {
            return (
                <span className="statistic warning">You have {totalEnergy} energies and we recommend to have at least 12</span>
            )
        } else if (totalEnergy > 15) {
            <span className="statistic warning">You have {totalEnergy} energies and we recommend to have maximum 15</span>
        } else if (totalEnergy > 12 && totalEnergy < 15) {
            <span className="statistic ok">You have {totalEnergy} energies!</span>
        }
    }

    function trainerStatistics() {
        let totalTrainers = 0;
        
        if (decks[0]?.cards) {
            decks[0].cards.map((card) => {
                if (card.supertype === 'Energy') return totalTrainers++;
                return null;
            });
        }

        if (totalTrainers < 20) {
            return (
                <span className="statistic warning">You have {totalTrainers} trainers and we recommend to have at least 20</span>
            )
        } else if (totalTrainers > 25) {
            <span className="statistic warning">You have {totalTrainers} trainers and we recommend to have maximum 25</span>
        } else if (totalTrainers > 20 && totalTrainers < 25) {
            <span className="statistic ok">You have {totalTrainers} trainers!</span>
        }
    }
    console.log(decks)
    return (
        <div className='decks__section'>
            <div className="decks__section__block deck__details">
                <div className="decks__section__block__deck-description">
                    <input type="text" name="deck-title" id="name-title" autocomplete="off" value={title} onChange={(event) => {onChange(setTitle, event.target.value)}}/>
                    <input type="text" name="deck-description" id="name-description" autocomplete="off" value={description} placeholder="Try to add a cool description to your Deck!" onChange={(event) => { onChange(setDescription, event.target.value) }}/>
                </div>
                <div className="decks__section__block__deck-statistics">
                    <div className="decks__section__block__deck-statistics__text">
                        {pokemonStatistics()}
                        {pokemonTypesStatistics()}
                        {energyStatistics()}
                        {trainerStatistics()}
                   </div>
                </div>
            </div>
            <div className="decks__section__block deck__add-cards">
                <Link className="header__links" to="/cards">
                    <button id="button-search__cards-home">
						<span class="material-icons">recent_actors</span>&nbsp;
						<span>Find Cards</span>
					</button>
                </Link>
                <div className="decks__section__block__deck__add-cards__total-cards">
                    {decks[0]?.cards && <span>{decks[0].cards.length}/60 CARDS</span>}
                    {!decks[0]?.cards && <span>0/60 CARDS</span>}
                </div>
            </div>
        </div>    
    );
}

export default DeckDetails;