import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BoxAbout( props ) {
    return (
        <div>

            <h3>
                <FontAwesomeIcon icon={ props.icon } width="30" style={ { margin: '0 20px' } }></FontAwesomeIcon>
                { props.title }</h3>
            <p>{ props.para }</p>
        </div>
    )
}

export default BoxAbout
