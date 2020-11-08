import React from 'react';
import cardsStore from '../../stores/store'
import './NotFound.css';

function NotFound() {
    
	return (
		<>
			<div className="landing-not-found">
				<div className="landing-not-found__background"></div>
				<div className="landing-not-found__container">
					<h1>404 - Page Not Found! </h1>
					<div className="container__image">
						<img id="container__image-img"
							alt="Not Found"
							src="https://i.pinimg.com/originals/00/2d/57/002d5714c44f88a16c1f0bdfa97ca05e.jpg"
						></img>
					</div>
                    <div className="image__button-add">
							<button id="button-back" onClick={() => cardsStore.goBack()}>
								<span class="material-icons">arrow_back</span>&nbsp;
								<span>Go Back</span>
							</button>
						</div>
				</div>
			</div>
		</>
	);
}

export default NotFound;
