import React from 'react';

function TrainerStatistics({ cards }) {
	let totalTrainers = cards?.filter((card) => card.supertype === 'Trainer')
		.length;

	return (
		<>
			{totalTrainers < 20 ? (
				<span className="statistic warning">
					You have {totalTrainers} trainers and we recommend to have at least 20
				</span>
			) : null}
			{totalTrainers > 38 ? (
				<span className="statistic warning">
					You have {totalTrainers} trainers and we recommend to have maximum 25
				</span>
			) : null}
			{totalTrainers >= 20 && totalTrainers <= 38 ? (
				<span className="statistic ok">You have {totalTrainers} trainers!</span>
			) : null}
		</>
	);
}

export default TrainerStatistics;
