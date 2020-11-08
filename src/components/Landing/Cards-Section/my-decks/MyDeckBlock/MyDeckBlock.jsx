import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../../Login/Login';
import LoadingGif from '../../../../LoadingGif/LoadingGif';

function MyDeckBlock({ props }) {
	return (
		<>
			{props.user ? (
				<div id="image__cards-deck" className="deckSection__images">
					<Link className="title__link" to="/decks">
						<div className="images__title">
							<h2>MY DECK</h2>
							<p>
								It's time to create!<br></br>Customize your deck whatever you
								want
							</p>
						</div>
					</Link>
					<div className="images__cards">
						{!props.decks.length && <LoadingGif />}
						{props.decks.length &&
							props.decks.map((deck) => (
								<Link
									to="/decks"
									key={`deck-${deck.title}`}
									className="MyDeck-Links"
								>
									<div className="cardsSection__myDeck__deckBlock">
										<span className="cardsSection__myDeck__deckBlock__title">
											{deck.title}
										</span>
										<img src={deck.url} alt={deck.imagealt} />
									</div>
								</Link>
							))}
					</div>
					<div className="images__button-search">
						<Link id="images__button-search-button" to="/decks">
							<button id="button-search__cards-home">
								<span class="material-icons">style</span>&nbsp;
								<span>Create a Deck</span>
							</button>
						</Link>
					</div>
				</div>
			) : (
				<div id="image__cards-deck" className="deckSection__images">
					<div className="login__wrapper-nobackground">
						<Login />
					</div>
				</div>
			)}
		</>
	);
}

export default MyDeckBlock;
