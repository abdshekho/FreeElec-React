import React from 'react'

function Page( props ) {
    return (
        <div props={ props.lang }>
            { props.children }
        </div>
    )
}

export default Page