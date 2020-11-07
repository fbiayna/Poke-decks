import React from 'react';
import { Link } from 'react-router-dom';

function AddCards() {
    return ( <Link className="header__links" to="/cards">
                <button id="button-search__cards-home">
                    <span class="material-icons">recent_actors</span>&nbsp;
                    <span>Find Cards</span>
                </button>
            </Link>

    );
}

export default AddCards;