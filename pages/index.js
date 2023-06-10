import React, { useContext, useEffect, useRef, useState } from "react";
import Head from 'next/head';
import logo from "../public/icon/F.ico";
import Image from 'next/image';




import { StateOfLanguage } from "../components/Layout";
export default function Home( props ) {
  const contextValue = useContext( StateOfLanguage )
  //to Lang
  let discription = contextValue[ 0 ] === 'ar' ? `نحن في FREE ELEC مزود لإمدادات الطاقة الشمسية. تأسست شركة FREE ELEC منذ عام 2012 ، وهي متخصصة في توريد حلول الطاقة الشمسية بأسعار تنافسية بما في ذلك توريد التركيب والاختبار والصيانة باستخدام أدوات قياس واختبار عالية التقنية.` : `We at FREE ELEC a provider of solar energy supplies. FREE ELEC has been established since 2012 , specialized in supplying solar energy solutions at a competitive prices including supplying installation, testing and maintenance using high technical measuring and testing instruments.`;


  // to background 
  useEffect( () => {
    const landing = document.getElementsByClassName( "landing" )[ 0 ];
    var backgroundInterval = setInterval(
      () => {
        var rand = Math.ceil( Math.random() * 7 );
        landing.style.backgroundImage = `url(https://freeelec-abdshekho.vercel.app/image/${rand}.jpg)`
        console.log( "is cheanged" )
      }
      //https://freeelec-abdshekho.vercel.app/image/7.jpg
      , 6000 );
  }, [] )



  const home = contextValue[ 0 ] === 'ar' ? 'الصفحة الرئيسية' : 'Home'
  return (

    <>
      <Head>
        <title>{ home }</title>
        <meta
          name="description"
          content="We are here to help you design the perfect solar system for your home or business. Our systems are designed to meet your specific needs because we offer, among other services"
        />
      </Head>
      <div  >

        <div className="home">
          <div className="landing">
            <div className="overlay"></div>
            <div className="text">
              <div className="content">
                <h2>

                  <Image src={ logo } alt="ant" width={ 60 } height={ 60 } className="ll" />
                  <div>

                    <span style={ { color: "white" } }>F</span>REE-<span style={ { color: "white" } }>E</span>LEC
                  </div>

                </h2>
                <div className="textEffect">

                  <p id="overText">
                    { discription }
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div >
      </div>

    </>
  )
}



