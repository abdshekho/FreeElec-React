import Head from 'next/head';
import MainHeading from '../../components/mainHeading/MainHeading';
import BoxProduct from '../../components/BoxProduct/BoxProduct';
import { StateOfLanguage } from '../../components/Layout';
import { useContext, Suspense } from "react";


function Products( { products } ) {
    const contextValue = useContext( StateOfLanguage )

    const mainHeading = contextValue[ 0 ] === 'ar' ? 'المنتجات' : 'Products'
    const mainParagraph = contextValue[ 0 ] === 'ar' ? `نحن نستخدم فقط المنتجات الرائدة في الصناعة ، كمورد معتمد. تعتبر جودة منتجاتنا ذات أهمية قصوى بالنسبة لنا`
        :
        'We use only industry-leading products, as a certified supplier. The quality of our products is of the upmost importance to us'
    return (
        <Suspense fallback={ <p>Loading feed...</p> }>


            <>
                <Head>

                    <title>{ mainHeading }</title>
                    <meta
                        name="description"
                        content={ mainParagraph }
                    />

                </Head>
                <div>
                    <MainHeading tit={ mainHeading } para={ mainParagraph } />
                    <div className='products'>
                        { products.map( product => <BoxProduct key={ product.id } product={ product } /> ) }
                    </div>
                </div>
            </>
        </Suspense>
    )
}

export default Products;

export async function getStaticProps() {
    const req = await fetch( 'https://fakestoreapi.com/products' );
    const products = await req.json();
    return {
        props: { products }
    }
}