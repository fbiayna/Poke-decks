import React from 'react';
import Social from './Social/Social';
import FirstRow from './First-Row/FirstRow';
import CardsSection from './Cards-Section/CardsSection';

function Landing() {

    return <div className="landing-container__all-elements">
        <FirstRow />
        <CardsSection />
        <Social />
    </div>
}

export default Landing;