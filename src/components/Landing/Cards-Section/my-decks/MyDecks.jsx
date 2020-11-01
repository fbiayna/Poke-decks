import React from 'react';
import { Link } from 'react-router-dom';
import './MyDecks.css';

function MyDecks() {

    const myDecks = [
        {
        title: 'My Deck Name', 
        totalcards: 0, 
        id:0,
        imagealt: 'card-pile',
        url: 'https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5f9cb0e6b6fed24123256da4/0b8025e8ab38f7b89454be9b91dd114a/91yL1H9fBdL.svg'}
    ];

    return (
            <div className="cardsSection__myDeck">
                {
                    myDecks.map((deck) => 
                    <Link to="/my-decks" className="MyDeck-Links">
                        <div className="cardsSection__myDeck__deckBlock">
                            <span className="cardsSection__myDeck__deckBlock__title">{deck.title}</span>
                            <img src={deck.url} alt={deck.imagealt}/>
                        </div>
                    </Link>
                    )
                }
            </div>
    );
}

export default MyDecks;