import React from 'react'

function MainHeading( props ) {
    return (
        <div className="main-heading">
            <h2>{ props.tit }</h2>
            <div className="barA"></div>
            <div className="barB"></div>
            <p>{ props.para }</p>
        </div>
    )
}

export default MainHeading