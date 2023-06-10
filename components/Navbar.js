import Link from "next/link";
import logo from "../public/icon/F.ico";
import Image from 'next/image';
import { useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { StateOfLanguage } from "./Layout";


export default function Nav( props ) {

    const contextValue = useContext( StateOfLanguage )

    let language = contextValue[ 0 ] === 'ar' ? 'English' : 'العربية'
    let home = contextValue[ 0 ] === 'ar' ? 'الصفحة الرئيسية' : 'Home'
    let Services = contextValue[ 0 ] === 'ar' ? 'خدماتنا' : 'Services'
    let About = contextValue[ 0 ] === 'ar' ? 'حولنا' : 'About'
    let Product = contextValue[ 0 ] === 'ar' ? 'المنتجات' : 'Product'
    let Contact = contextValue[ 0 ] === 'ar' ? 'تواصل معنا' : 'Contact'





    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const itemTaps = <ul className={ `firstRend ${ props.state }` }>

        <li className={ router.pathname == "/" ? "active" : "" }>
            <Link href="/" >{ home }</Link>
        </li>
        <li className={ router.pathname == "/services" ? "active" : "" }>
            <Link href="/services">{ Services }</Link>

        </li>
        <li className={ router.pathname == "/about" ? "active" : "" }>
            <Link href="/about">{ About }</Link>

        </li>
        <li className={ router.pathname == "/products" ? "active" : "" }>
            <Link href="/products">{ Product }</Link>

        </li>
        <li className={ router.pathname == "/contact" ? "active" : "" }>
            <Link href="/contact">{ Contact }</Link>

        </li>

        <li onClick={ props.changeLanguage } style={ { padding: '14px' } }>
            { language }

        </li>

        <li onClick={ props.Dark } style={ { padding: '14px' } } title={ contextValue[ 1 ] === 'on' ? 'light Mood' : 'Dark Mood' }>
            <FontAwesomeIcon icon={ faMoon } width='30' color={ contextValue[ 1 ] === 'on' ? '#157bac' : 'white' }></FontAwesomeIcon>
        </li>


    </ul >



    return (
        <>
            <header className={ router.pathname == "/" ? 'navoHome' : "navo" }>
                <div className="container">

                    <Link href="/" >
                        <div className="Logo">
                            <div className="ll">
                                <Image src={ logo } alt="ant" width={ 50 } height={ 50 } className="ll" />
                            </div>
                            <h2><span>T</span>est-<span>L</span>ogo</h2>

                        </div>
                    </Link>
                    <nav>
                        { itemTaps }

                    </nav>

                    <div className="btnMenue" onClick={ props.handleMenue }>

                        <FontAwesomeIcon icon={ faBars } width='30' color={ props.state == 'open' ? "#157bac" : "white" }></FontAwesomeIcon>
                        {/* <FontAwesomeIcon icon="fa-solid faBars " width='30' color={ 'white' }></FontAwesomeIcon> */ }
                    </div>

                </div>

            </header>
        </>

    )
}




