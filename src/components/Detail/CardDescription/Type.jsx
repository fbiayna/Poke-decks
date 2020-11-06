import React from 'react';

function Type({ type }) {
	return (
		<>
			{type ? (
				<p>
					{type.map((type) => (
						<i id="poke-type" className={`energy ${type}`}></i>
					))}
				</p>
			) : null}
		</>
	);
}

export default Type;
