import React from 'react';

function TrainerStatistics({ cards }) {
	let totalTrainers = cards?.filter((card) => card.supertype === 'Trainer').length;

	return (
			<div className="statistics__category" id="statistic__category__trainers">
				<div className="statistics__category__name">
					<h2 className="statistics__category-title">Trainers</h2>
					<div className="statistics__category-icon"></div>
				</div>
				{totalTrainers < 20 ? (
					<div className="statistics__row">
						<div className="stateIcon warningIcon"></div>
						<span id="stat-warning" className="statistic warning">
							You have {totalTrainers} trainers and we recommend to have at least 20
						</span>
					</div>
				) : null}
				{totalTrainers > 38 ? (
					<div className="statistics__row">
						<div className="stateIcon warningIcon"></div>
						<span id="stat-toomuch" className="statistic warning">
							You have {totalTrainers} trainers and we recommend to have maximum 25
						</span>
					</div>

				) : null}
				{totalTrainers >= 20 && totalTrainers <= 38 ? (
					<div className="statistics__row">
						<div className="stateIcon okIcon"></div>
						<span id="stat-ok" className="statistic ok">You have {totalTrainers} trainers!</span>
					</div>
					) : null}
			</div>
	);
}

export default TrainerStatistics;
