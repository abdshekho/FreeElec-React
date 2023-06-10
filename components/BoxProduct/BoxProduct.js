import React from 'react';
import Image from 'next/image';
import Link from "next/link";


function BoxProduct( { product } ) {
    const { id, title, price, image, category } = product
    return (
        <div className='BoxProduct'>
            <div>
                <Image src={ image } loading='lazy' alt="ant" width={ 300 } height={ 300 } className="ll" property='#2e2e2e' />
            </div>
            <ul className='list'>
                {/* <li className='id'>id : { id }</li> */ }
                <li className='title'>{ title } </li>
                <li className='price'>{ price }</li>
                <li className='category'>{ category }</li>
                <li className='MoreDetails'>
                    <Link href={ `/products/${ id }` }>

                        <button>More Details</button>
                    </Link>

                </li>
                {/* <Image src={ image } alt="ant" width={ 50 } height={ 50 } className="ll" /> */ }

            </ul>
        </div>
    )
}

export default BoxProduct
