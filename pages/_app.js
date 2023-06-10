import '../styles/globals.css'
import Layout from '../components/Layout'
import React from 'react'
import { Analytics } from '@vercel/analytics/react';

function MyApp( { Component, pageProps } ) {




  return (

    <Layout >

      <Component { ...pageProps } />
      <Analytics />
    </Layout>

  )
}

export default MyApp
