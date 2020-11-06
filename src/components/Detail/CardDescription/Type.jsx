import React from 'react';

function Type({ type }) {
	return (
		<>
			{type ? (
				<p>
					{type.map((type) => (
						<i className={`energy ${type}`}></i>
					))}
				</p>
			) : null}
		</>
	);
}

export default Type;
