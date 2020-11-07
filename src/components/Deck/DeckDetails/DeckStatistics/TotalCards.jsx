import React from 'react'

function TotalCards({cards}) {
    return (<>
        {cards? <span>{cards.length}/60 CARDS</span>:<span>0/60 CARDS</span>}
    </>)
}

export default TotalCards