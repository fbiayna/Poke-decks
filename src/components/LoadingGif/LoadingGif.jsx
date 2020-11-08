import React from 'react';
import './LoadingGif.css';

function LoadingGif({ cardSearchItems }) {
	return (
		<>
			{!cardSearchItems ? (
				<div className="loading-gif">
					<img
						src="https://trello-attachments.s3.amazonaws.com/5f8ca3639574d3550b3ad495/5f9cb0e6b6fed24123256da4/bfc62aa34a97a0de70a4f7a0f888aafe/oie_7194959z2I69Pqo.gif"
						alt="loading-gif"
						className="loading-gif__image"
					/>
				</div>
			) : null}
		</>
	);
}

export default LoadingGif;
