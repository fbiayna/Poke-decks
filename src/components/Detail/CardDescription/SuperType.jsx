import React from 'react';

function SuperType({ types }) {
	return (
		<>
			{types.superType === 'Pokémon' ? (
				<p>{types.subType}</p>
			) : (
				<p>{types.superType}</p>
			)}
		</>
	);
}

export default SuperType;
