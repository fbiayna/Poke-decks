import React from 'react';

function EnergyStatistics({ cards }) {
	let totalEnergy = cards?.filter((card) => card.supertype === 'Energy').length;

	return (
		<div className="statistics__category" id="statistic__category__energies">
			<div className="statistics__category__name">
				<h2 className="statistics__category-title">Energies</h2>
				<div className="statistics__category-icon"></div>
			</div>
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
		</div>
	);
}

export default EnergyStatistics;