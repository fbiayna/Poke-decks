import React from 'react';

function MyDecks() {

    const myDecks = [
        {title: 'My Deck', totalcards: 0, 
        imagealt: 'card-pile',
        url: 'https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5f9cb0e6b6fed24123256da4/0b8025e8ab38f7b89454be9b91dd114a/91yL1H9fBdL.svg'}
    ];

    return (
            <div className="cardsSection__myDeck">
                {
                    myDecks.map((deck) => 
                        <div className="cardsSection__myDeck__deckBlock">
                            <span className="cardsSection__myDeck__deckBlock__title">{deck.title}</span>
                            <img src={deck.url} alt={deck.imagealt}/>
                        </div>
                    )
                }
            </div>
    );
}

export default MyDecks;