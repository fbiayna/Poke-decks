import React, { useEffect, useState } from 'react';
import cardsStore from '../../../stores/store';
import { loadDecks } from '../../../actions/action-creators';
import DeckDescription from './DeckDescription/DeckDescription';
import DeckStatistics from './DeckStatistics/DeckStatistics';
import ButtonsBar from './DeckStatistics/ButtonsBar/ButtonsBar';
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
