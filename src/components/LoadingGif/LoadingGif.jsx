import React from 'react';
import './LoadingGif.css';
import 'simple_pokeball.gif';

function LoadingGif() {
    return (
        <div className="loading-gif">
            <img src="simple_pokemon.gif" alt="loading-gif" className="loading-gif__image"/>
        </div>
    );
}

export default LoadingGif;