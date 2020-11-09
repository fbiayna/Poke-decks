import React from 'react';

function Type({ type }) {
	return (
		<>
			{type ? (
				<p>
					{type.map((one_type) => (
						<i id="poke-type" className={`energy ${one_type}`}></i>
					))}
				</p>
			) : null}
		</>
	);
}

export default Type;
