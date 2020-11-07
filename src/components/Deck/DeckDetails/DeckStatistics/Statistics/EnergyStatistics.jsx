import React from 'react';

function EnergyStatistics({ decks }) {
	let totalEnergy = decks[0]?.cards?.filter((card) => card.supertype === 'Energy').length;

	return (
		<>
			{totalEnergy < 12 ? (
				<div className="statistics__row">
					<div className="stateIcon warningIcon"></div>
					<span id="stat-warning" className="statistic warning">
					You have {totalEnergy} energies and we recommend to have at least 12
					</span>
				</div>
			) : null}
			{totalEnergy > 15 ? (
				<div className="statistics__row">
					<div className="stateIcon warningIcon"></div>
					<span id="stat-toomuch" className="statistic warning">
						You have {totalEnergy} energies and we recommend to have maximum 15
					</span>
				</div>
			) : null}
			{totalEnergy >= 12 && totalEnergy <= 15 ? (
				<div className="statistics__row">
					<div className="stateIcon OkIcon"></div>
					<span id="stat-ok" className="statistic ok">You have {totalEnergy} energies!</span>
				</div>
			) : null}
		</>
	);
}

export default EnergyStatistics;