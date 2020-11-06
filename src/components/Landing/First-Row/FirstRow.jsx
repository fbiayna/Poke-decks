import React from 'react';
import './FirstRow.css';

function FirstRow() {
	return (
		<div className="landing__header--first-row">
			<div className="landing__header--bg-image"></div>
			<div className="landing__header--content">
				<div className="header--content__text">
					<p className="landing__header--description">
						“ Poke-Decks is a database built around trading card game of
						Pokemon. You will be able to consult from all Pokemon’s TCG sets to
						every existing card in the game. In addition, we offer a competitive
						tool such a deck editor. ”
					</p>
				</div>
			</div>
			<div className="landing__header--logo">
				<img
					src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5f9cb0e6b6fed24123256da4/5008bece5d858b116da1ee25fae6206e/Poke-Decks.png"
					alt="website-logo"
					className="website-logo"
				/>
			</div>
		</div>
	);
}

export default FirstRow;
