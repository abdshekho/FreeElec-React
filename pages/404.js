import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import { useRouter } from "next/router";


function Error() {
    const router = useRouter();


    const pathUp = router.asPath;
    const [ state, setState ] = useState( "" );



    return (

        <div>
            <Head>
                <title>check URL</title>
            </Head>
            <div className='page'>
                check your pathname   { state }

            </div>
        </div>
    )
}

export default Error