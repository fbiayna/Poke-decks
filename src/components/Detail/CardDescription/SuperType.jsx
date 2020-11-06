import React from 'react';

function SuperType({ types }) {
	return (
		<>
			{types.superType === 'Pokémon' ? (
				<p id="poke-subtype">{types.subType}</p>
			) : (
				<p id="poke-supertype">{types.superType}</p>
			)}
		</>
	);
}

export default SuperType;
