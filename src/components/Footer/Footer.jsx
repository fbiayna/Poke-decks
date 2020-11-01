import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer__about-us">
				<h5>ABOUT US</h5>
				<p>You can reach us at:</p>

				<div className="footer__info">
					<div className="address">
						<h6 className="footer__about-us--headers">ADDRESS</h6>
						<address>Roc Boronat 35 - 08005 Barcelona</address>
					</div>

					<br />

					<div className="email">
						<h6 className="footer__about-us--headers">HAVE ANY QUESTIONS?</h6>
						<p>contact@mail.com</p>
					</div>

					<br />

					<div className="phone">
						<h6 className="footer__about-us--headers">PHONE</h6>
						<p>+XX (0) XX XX-XXXX-XXXX</p>
					</div>
				</div>
			</div>

			<div className="footer__follow">
				<h5>FOLLOW US</h5>
				<ul>
					<li>
						<img
							src="https://www.flaticon.es/svg/static/icons/svg/733/733549.svg"
							alt="fb-logo"
							className="fb-logo"
						/>
					</li>
					<li>
						<img
							src="https://www.flaticon.es/svg/static/icons/svg/733/733579.svg"
							alt="twitter-logo"
							className="twitter-logo"
						/>
					</li>
					<li>
						<img
							src="https://www.flaticon.es/svg/static/icons/svg/733/733557.svg"
							alt="gplus-logo"
							className="gplus-logo"
						/>
					</li>
					<li>
						<img
							src="https://www.flaticon.es/svg/static/icons/svg/174/174855.svg"
							alt="instagram-logo"
							className="instagram-logo"
						/>
					</li>
					<li>
						<a href="https://github.com/SkylabCoders/team-rocket">
							<img
								src="https://www.flaticon.es/svg/static/icons/svg/733/733609.svg"
								alt="github-logo"
								className="github-logo"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Footer;
