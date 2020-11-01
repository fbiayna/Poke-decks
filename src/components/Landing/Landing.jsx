import React from 'react';
import Social from './Social/Social';
import FirstRow from './First-Row/FirstRow';
import CardSearchLanding from './Cards-Section/Cards-Search/CardSearchLanding';

function Landing() {

    return <>
        <FirstRow />
        <CardSearchLanding/>
        <Social />
    </>
}

export default Landing;