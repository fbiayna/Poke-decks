import React from 'react';

function EnergyStatistics({ cards }) {
	let totalEnergy = cards?.filter((card) => card.supertype === 'Energy')
		.length;

	return (
		<>
			{totalEnergy < 12 ? (
				<span id="stat-warning" className="statistic warning">
					You have {totalEnergy} energies and we recommend to have at least 12
				</span>
			) : null}
			{totalEnergy > 15 ? (
				<span id="stat-toomuch" className="statistic warning">
					You have {totalEnergy} energies and we recommend to have maximum 15
				</span>
			) : null}
			{totalEnergy >= 12 && totalEnergy <= 15 ? (
				<span id="stat-ok" className="statistic ok">You have {totalEnergy} energies!</span>
			) : null}
		</>
	);
}

export default EnergyStatistics;