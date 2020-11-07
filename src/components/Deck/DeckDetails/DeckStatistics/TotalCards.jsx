import React from 'react'

function TotalCards({cards}) {
    return (<>
        {cards? <span id="length-true">{cards.length}/60 CARDS</span>:<span id="length-false" >0/60 CARDS</span>}
    </>)
}

export default TotalCards