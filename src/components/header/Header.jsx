import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import headerLogo from './image/headerLogo';
import { signInWithGoogle, signOut } from '../../actions/auth-actions';
import authStore from '../../stores/auth-store';
import Username from './User/Username';

function Header() {
	const [user, setUser] = useState(authStore.getUser());

	function handleChange() {
		setUser(authStore.getUser());
	}

	useEffect(() => {
		authStore.addEventListener(handleChange);

		return () => authStore.removeEventListener(handleChange);
	});

	function getSignInButtons() {
		return (
			<div className="desktop-header__login">
				<div
					className="desktop-header__login__button"
					onClick={(event) => {
						event.preventDefault();
						signInWithGoogle();
					}}
				>
					<img
						id="google_icon"
						alt="google"
						src="https://img.icons8.com/bubbles/100/000000/google-logo.png"
					/>
				</div>
			</div>
		);
	}

	function isSignInVisible() {
		return user ? (
			<div
				className="desktop-header__login__button logout"
				onClick={(event) => {
					event.preventDefault();
					signOut();
				}}
			>
				<i class="fa fa-power-off"></i>
			</div>
		) : (
			getSignInButtons()
		);
	}

	return (
		<>
			<link
				href="https://fonts.googleapis.com/icon?family=Material+Icons"
				rel="stylesheet"
			></link>
			<h1 className="title__body">Pokémon TCG - Deck Masters</h1>
			<nav className="mobile-header">
				<h2 className="title__body">Deck Masters - Header</h2>
				<div className="desktop-header">
					<div className="desktop-header__block">
						<Link className="header__links" to="/">
							<div className="desktop-header__logo">
								<img
									id="logo__pokeball"
									alt="error"
									src="https://www.flaticon.es/svg/static/icons/svg/743/743977.svg"
								/>
								<img
									id="logo__cards"
									alt="error"
									src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY0IDY0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSwwLDAsMSw2My45OTk1MDA4NzA3MDQ2NSwwKSI+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzcuMDkgNTcuNjgtMjkuMjc5LTI5LjI4LTYuNTEgMTUuNjkgNDAuNjYgMTYuODQgNS43MjgtMTMuODV6IiBmaWxsPSIjY2NkMWQ5IiBkYXRhLW9yaWdpbmFsPSIjY2NkMWQ5IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzIuNjk5IDQ3LjA3di00MS40MmwtMTUuNjk5IDYuNTEuOTkgMi4zOTEgMTUuODUgMzguMjYgMTMuODQ5LTUuNzQxeiIgZmlsbD0iI2NjZDFkOSIgZGF0YS1vcmlnaW5hbD0iI2NjZDFkOSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTUuOTcxIDI2LjU2MSAxMi4wMTktMTIuMDEgMTUuODUgMzguMjYgMTMuODQ5LTUuNzQxdi4wMWwtMTAuNTk5IDEwLjYtMjkuMjc5LTI5LjI4eiIgZmlsbD0iI2U2ZTllZCIgZGF0YS1vcmlnaW5hbD0iI2U2ZTllZCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMyLjY5OSAzLjA3djIuNTggNDEuNDJoMTQuOTkuMDF2LS4wMDloLjAxMmwtLjAxMi4wMDloMTV2LTQ0eiIgZmlsbD0iI2U2ZTllZCIgZGF0YS1vcmlnaW5hbD0iI2U2ZTllZCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTEwLjAxIDQxLjc0Yy4zMTEuNzUtLjA0OSAxLjYtLjc5OSAxLjkxLS43NC4zMDktMS42MDItLjA0MS0xLjkxLS43OTFsLTEuMTIxLTIuNzA5IDIuNzExLTEuMTIxYy43NC0uMzA5IDEuNi4wNTEgMS45MS44MDEuMzA4Ljc0LS4wNTEgMS42LS43OTEgMS45MXoiIGZpbGw9IiM2NTZkNzgiIGRhdGEtb3JpZ2luYWw9IiM2NTZkNzgiIHN0eWxlPSIiPjwvcGF0aD48ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNlZDU1NjUiPjxwYXRoIGQ9Im0yNi41IDE0LjE4LTEuMzU5IDMuMjU5LTMuMjYtMS4zNDkgMS4zNDktMy4yN3oiIGZpbGw9IiNlZDU1NjUiIGRhdGEtb3JpZ2luYWw9IiNlZDU1NjUiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNDAuMjcgNi41Yy41Ny41Ny41NyAxLjQ5IDAgMi4wN2wtMi4wNyAyLjA3LTIuMDY4LTIuMDdjLS41Ny0uNTgtLjU3LTEuNSAwLTIuMDcuNTY4LS41OCAxLjUtLjU4IDIuMDY4IDAgLjU3LS41OCAxLjQ5OS0uNTggMi4wNyAweiIgZmlsbD0iI2VkNTU2NSIgZGF0YS1vcmlnaW5hbD0iI2VkNTU2NSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im01OS4yNyAzOS45MmMuNTcuNTguNTcgMS41IDAgMi4wN2wtMi4wNyAyLjA3LTIuMDY4LTIuMDdjLS41Ny0uNTctLjU3LTEuNDkgMC0yLjA3LjU2OC0uNTcgMS41LS41NyAyLjA2OCAwIC41Ny0uNTcgMS40OTktLjU3IDIuMDcgMHoiIGZpbGw9IiNlZDU1NjUiIGRhdGEtb3JpZ2luYWw9IiNlZDU1NjUiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtNTIuMjMgMjEuMDFjMS4yNCAxLjI1IDEuMjQgMy4yNzkgMCA0LjUyOWwtNC41MzEgNC41MzEtNC41MzktNC41MzFjLTEuMjQtMS4yNS0xLjI0LTMuMjc5IDAtNC41MjkgMS4yNS0xLjI1IDMuMjg5LTEuMjUgNC41MzkgMCAxLjI1LTEuMjUgMy4yNzItMS4yNSA0LjUzMSAweiIgZmlsbD0iI2VkNTU2NSIgZGF0YS1vcmlnaW5hbD0iI2VkNTU2NSIgc3R5bGU9IiI+PC9wYXRoPjwvZz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00MS45NTUgNjEuOTMyYy0uMTI4IDAtLjI1OC0uMDI0LS4zODMtLjA3NmwtNDAuNjU0LTE2Ljg0Yy0uMjQ1LS4xMDItLjQzOS0uMjk2LS41NDEtLjU0MXMtLjEwMi0uNTIxIDAtLjc2Nmw2LjUwNC0xNS42OTljLjIxMS0uNTExLjc5OS0uNzUxIDEuMzA3LS41NDEuNTEuMjExLjc1Mi43OTYuNTQxIDEuMzA3bC02LjEyMiAxNC43NzUgMzguODA3IDE2LjA3NCA1LjM2My0xMi45NDdjLjIxMS0uNTExLjc5OS0uNzUyIDEuMzA3LS41NDEuNTEuMjExLjc1Mi43OTYuNTQxIDEuMzA3bC01Ljc0NiAxMy44NzFjLS4xNTkuMzg0LS41MzIuNjE3LS45MjQuNjE3eiIgZmlsbD0iI2NjZDFkOSIgZGF0YS1vcmlnaW5hbD0iI2NjZDFkOSIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM3LjA5IDU4LjY4Yy0uMjU2IDAtLjUxMi0uMDk4LS43MDctLjI5M2wtMzEuMTE1LTMxLjExNmMtLjM5MS0uMzkxLS4zOTEtMS4wMjMgMC0xLjQxNGwxMi4wMTQtMTIuMDE0Yy4zOTEtLjM5MSAxLjAyMy0uMzkxIDEuNDE0IDBzLjM5MSAxLjAyMyAwIDEuNDE0bC0xMS4zMDcgMTEuMzA3IDI5LjcwMSAyOS43MDIgOS45MS05LjkxYy4zOTEtLjM5MSAxLjAyMy0uMzkxIDEuNDE0IDBzLjM5MSAxLjAyMyAwIDEuNDE0bC0xMC42MTcgMTAuNjE3Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3oiIGZpbGw9IiNlNmU5ZWQiIGRhdGEtb3JpZ2luYWw9IiNlNmU5ZWQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zMy44MzggNTMuODEzYy0uMzkyIDAtLjc2NS0uMjMyLS45MjQtLjYxN2wtMTYuODQtNDAuNjU0Yy0uMTAyLS4yNDUtLjEwMi0uNTIxIDAtLjc2NnMuMjk2LS40MzkuNTQxLS41NDFsMTUuNzAxLTYuNTAyYy41MDktLjIxIDEuMDk2LjAzIDEuMzA3LjU0MXMtLjAzMSAxLjA5Ni0uNTQxIDEuMzA3bC0xNC43NzcgNi4xMTkgMTYuMDc0IDM4LjgwNyAxMi45NTEtNS4zNjNjLjUwOS0uMjEgMS4wOTYuMDMgMS4zMDcuNTQxcy0uMDMxIDEuMDk2LS41NDEgMS4zMDdsLTEzLjg3NSA1Ljc0NmMtLjEyNS4wNS0uMjU1LjA3NS0uMzgzLjA3NXoiIGZpbGw9IiNjY2QxZDkiIGRhdGEtb3JpZ2luYWw9IiNjY2QxZDkiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS4xNyAyOS42ODRjLS4yNTYgMC0uNTEyLS4wOTgtLjcwNy0uMjkzbC0zLjUzNy0zLjUzN2MtLjM5MS0uMzkxLS4zOTEtMS4wMjMgMC0xLjQxNHMxLjAyMy0uMzkxIDEuNDE0IDBsMy41MzcgMy41MzdjLjM5MS4zOTEuMzkxIDEuMDIzIDAgMS40MTQtLjE5NS4xOTUtLjQ1MS4yOTMtLjcwNy4yOTN6IiBmaWxsPSIjNTQ1YzY2IiBkYXRhLW9yaWdpbmFsPSIjNTQ1YzY2IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTQuNDYzIDMwLjM5MWMtLjI1NiAwLS41MTItLjA5OC0uNzA3LS4yOTMtLjM5MS0uMzkxLS4zOTEtMS4wMjMgMC0xLjQxNGwxLjQxNC0xLjQxNGMuMzkxLS4zOTEgMS4wMjMtLjM5MSAxLjQxNCAwcy4zOTEgMS4wMjMgMCAxLjQxNGwtMS40MTQgMS40MTRjLS4xOTUuMTk1LS40NTEuMjkzLS43MDcuMjkzeiIgZmlsbD0iIzY1NmQ3OCIgZGF0YS1vcmlnaW5hbD0iIzY1NmQ3OCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTExLjYzMyAyOC45NzdjLS4yNTYgMC0uNTEyLS4wOTgtLjcwNy0uMjkzLS4zOTEtLjM5MS0uMzkxLTEuMDIzIDAtMS40MTRsMi44MjgtMi44MjhjLjM5MS0uMzkxIDEuMDIzLS4zOTEgMS40MTQgMHMuMzkxIDEuMDIzIDAgMS40MTRsLTIuODI4IDIuODI4Yy0uMTk1LjE5NS0uNDUxLjI5My0uNzA3LjI5M3oiIGZpbGw9IiM2NTZkNzgiIGRhdGEtb3JpZ2luYWw9IiM2NTZkNzgiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im02Mi42OTkgNDguMDcyaC0zMC4wMDRjLS41NTMgMC0xLS40NDctMS0xdi00NC4wMDRjMC0uNTUzLjQ0Ny0xIDEtMWgzMC4wMDRjLjU1MyAwIDEgLjQ0NyAxIDF2NDQuMDA0YzAgLjU1My0uNDQ3IDEtMSAxem0tMjkuMDA0LTJoMjguMDA0di00Mi4wMDRoLTI4LjAwNHoiIGZpbGw9IiNlNmU5ZWQiIGRhdGEtb3JpZ2luYWw9IiNlNmU5ZWQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
								/>
							</div>
						</Link>
						<div className="desktop-header__options">
							<div className="desktop-header__menu-bar">
								<button id="menu-bar__trading" className="menu-bar__dropdown">
									TRADING CARDS
								</button>
								<div className="dropdown-content">
									<Link className="header__links" to="/cards">
										<span>SEARCH CARDS</span>
									</Link>
									<Link className="header__links" to="/decks">
										<span>MY DECKS</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="desktop-header__options">
						<Link className="header__links" to="/">
							<img
								src={headerLogo.url}
								alt={headerLogo.title}
								className="desktop-header__title"
							/>
						</Link>
					</div>
					<div className="desktop-header__block flex-end">
						<Username user={user} />
						{isSignInVisible()}
						<div className="desktop-header__logotgc">
							<a href="https://www.pokemon.com/us/pokemon-tcg/">
								<img
									id="logo__tgc"
									alt="error"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/1280px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png"
								/>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
