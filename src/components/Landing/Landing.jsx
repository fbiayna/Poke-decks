import React from 'react';
import Social from './Social/Social';
import FirstRow from './First-Row/FirstRow';
import CardSection from './Cards-Section/CardSection';

function Landing() {

    return <>
        <FirstRow />
        <CardSection/>
        <Social />
    </>
}

export default Landing;