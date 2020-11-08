import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import './index.css';
import Landing from './components/Landing/Landing';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer/Footer';
import Detail from './components/Detail/Detail';
import List from './components/List/List';
import Deck from './components/Deck/Deck';
import NotFound from './components/NotFound/NotFound'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/cards" exact component={List} />
				<Route path="/decks" exact component={Deck} />
				<Route path="/social" exact component={''} />
				<Route path="/detail/:cardid" exact component={Detail} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
