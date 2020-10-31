import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ListCards from './components/list-cards/ListCards';
import './index.css';
import Landing from './components/Landing/Landing';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"></link>
      <Header/>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/cards" exact component={ListCards}/>
        <Route path="/my-decks" exact component={""}/>
        <Route path="/social" exact component={""}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
