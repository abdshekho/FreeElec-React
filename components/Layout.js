import Navbar from "./Navbar"
import Footer from "./Footer"
import React, { createContext } from 'react'
import Head from "next/head"
import { useEffect, useState } from "react"
import Page from "./Page";

export const StateOfLanguage = createContext();

function Layout( props ) {
    const [ stateOfLang, setStateOfLang ] = useState( "" );
    const [ stateOfMenu, setstateOfMenu ] = useState( 'close' );
    const [ stateOfDark, setStateOfDark ] = useState( '' );

    function handleMenue() {
        if ( stateOfMenu == 'open' ) {
            setstateOfMenu( 'close' )

        } else {
            setstateOfMenu( 'open' )
        }


    };
    const handelMenues = () => {
        if ( stateOfMenu == 'open' ) {
            setstateOfMenu( 'close' )
        }
    }
    function changeLanguage() {

        if ( document.getElementsByTagName( 'html' )[ 0 ].getAttribute( 'lang' ) === 'en' ) {

            setStateOfLang( "ar" )
        }
        else {
            setStateOfLang( "en" )
        }

    }
    function Dark() {
        if ( document.getElementsByTagName( 'html' )[ 0 ].getAttribute( 'dark' ) === 'off' ) {
            setStateOfDark( 'on' )
        }
        else {
            setStateOfDark( 'off' )

        }

    }

    //first Render page gonna  setLanguage , setDarkMood from localStorage
    useEffect( () => {
        let langInit = localStorage.getItem( 'lang' )
        let darkInit = localStorage.getItem( 'dark' )
        if ( langInit === null ) {
            setStateOfLang( 'en' )
        } else {
            setStateOfLang( langInit )
        }

        if ( darkInit === null ) {
            setStateOfDark( 'off' )
        }
        else {
            setStateOfDark( darkInit )
        }
    }, [] )
    //to language
    useEffect( () => {
        let lang = document.getElementsByTagName( 'html' )[ 0 ].getAttribute( 'lang' )
        document.getElementsByTagName( 'html' )[ 0 ].setAttribute( 'lang', stateOfLang )
        if ( stateOfLang != '' ) {
            localStorage.setItem( 'lang', stateOfLang )
        }
    }, [ stateOfLang ] )
    //to Dark Mood
    useEffect( () => {

        document.getElementsByTagName( 'html' )[ 0 ].setAttribute( 'dark', stateOfDark )
        if ( stateOfDark != '' ) {
            localStorage.setItem( 'dark', stateOfDark )
        }
        const r = document.querySelector( ':root' )
        const rs = getComputedStyle( r )

        if ( localStorage.getItem( 'dark' ) === 'on' ) {
            r.style.setProperty( '--bodycolor', '#212224' )
            r.style.setProperty( '--ParaColor', '#c7c8d2' )
            r.style.setProperty( '--backgroundBox', '#36373b' )
            r.style.setProperty( '--boxShadowColor', 'transparent' )
            r.style.setProperty( '--headSection', '#dddde7' )
            r.style.setProperty( '--overLay', '#000000b8' )
        }
        else {
            r.style.setProperty( '--bodycolor', '#d6d6da' )
            r.style.setProperty( '--ParaColor', '#777' )
            r.style.setProperty( '--backgroundBox', '#cacfd6' )
            r.style.setProperty( '--boxShadowColor', '#afafb1' )
            r.style.setProperty( '--headSection', 'black' )
            r.style.setProperty( '--overLay', '#0000004d' )
        }
    }, [ stateOfDark ] )

    return (
        <StateOfLanguage.Provider value={ [ stateOfLang, stateOfDark ] }>
            <Head >
                <link rel="shortcut icon" href="icon/F.ico" />
            </Head>
            <Navbar state={ stateOfMenu } handleMenue={ handleMenue } changeLanguage={ changeLanguage } Dark={ Dark } />
            <Page lang={ stateOfLang }>
                <div onClick={ handelMenues }>
                    { props.children }
                </div>
            </Page>
            <Footer />
        </StateOfLanguage.Provider>
    )
}


export default Layout