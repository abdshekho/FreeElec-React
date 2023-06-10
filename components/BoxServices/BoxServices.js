import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BoxServices( props ) {
    return (
        <div className='Services-box'>
            <div className='heading'>
                <FontAwesomeIcon icon={ props.icon } width="50"></FontAwesomeIcon>
                <h3>{ props.headeTitle }</h3>

            </div>
            <div>
                <p>{ props.para }</p>
            </div>

        </div>
    )
}

export default BoxServices