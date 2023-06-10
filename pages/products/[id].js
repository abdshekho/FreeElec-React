import React from 'react';
import Image from 'next/image';
import Head from "next/head"



function singleProduct( { product } ) {
    //in para is what return in getStaticProps props
    const { id, image, title, price, description, category, rating } = product
    return (
        <>

            <Head>
                <title> Product</title>
                <meta
                    name="description"
                    content={ title }
                />
            </Head>
            <div className='productSingle'>
                <div className='container'>
                    <ul>
                        <li>{ id }</li>
                        <li>
                            <Image src={ image } alt="ant" loading='lazy' width={ 300 } height={ 300 } className="ll" />
                        </li>
                        <li>{ title }</li>
                        <li>{ price }</li>
                        <li>{ description }</li>
                        <li>{ category }</li>
                        <li>{ rating.count }</li>
                    </ul>


                </div>
            </div>
        </>
    )
}

export default singleProduct;


export async function getStaticPaths( params ) {
    const req = await fetch( 'https://fakestoreapi.com/products' );
    const products = await req.json();
    const paths = products.map( product => {
        return {
            params: { id: product.id.toString() }
        }
    }
    )
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps( context ) {
    //context that what return in  getStaticPaths
    const id = context.params.id
    const req = await fetch( "https://fakestoreapi.com/products/" + id );
    const product = await req.json();
    return {
        props: { product },

    }

}