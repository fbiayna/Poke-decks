import React from 'react';
import './LoadingGif.css';

function LoadingGif() {
    return (
        <div className="loading-gif">
            <img src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5f9cb0e6b6fed24123256da4/15c07b009de08e498ed1d40a3ef380de/simple_pokeball.gif" alt="loading-gif" className="loading-gif__image"/>
        </div>
    );
}

export default LoadingGif;