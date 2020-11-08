import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer__follow">
				<h5>FOLLOW US</h5>
				<ul>
					<li>
						<a href="#">
							<i class="fa fa-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-google-plus"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://github.com/SkylabCoders/team-rocket">
							<i class="fa fa-github"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="footer__about-us">
				<h5>ABOUT US</h5>

				<div className="footer__info">
					<div className="address">
						<h6 className="footer__about-us--headers">
							<i class="fa fa-map-marker"></i>ADDRESS
						</h6>
						<address>Pallet Town 35 - 08005 Kanto</address>
					</div>

					<br />

					<div className="email">
						<h6 className="footer__about-us--headers">
							<i class="fa fa-envelope"></i>CONTACT
						</h6>
						<p>info@poke-decks.com</p>
					</div>

					<br />

					<div className="phone">
						<h6 className="footer__about-us--headers">
							<i class="fa fa-phone"></i>PHONE
						</h6>
						<p>+34 (6) 40 12-9873-12345</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
