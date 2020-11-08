import React from 'react';
import DeckDescription from './DeckDescription/DeckDescription';
import DeckStatistics from './DeckStatistics/DeckStatistics';
import ButtonsBar from './ButtonsBar/ButtonsBar';
import './DeckDetails.css';


function DeckDetails() {

    
	return (
		<div className="decks__section">
			<div className="decks__section__block deck__details">
				<DeckDescription />
				<DeckStatistics />
			</div>
			<ButtonsBar />
		</div>

	);
}

export default DeckDetails;
