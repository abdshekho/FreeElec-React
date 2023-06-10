import Head from 'next/head';
import React, { useRef } from 'react';
import MainHeading from '../../components/mainHeading/MainHeading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFax, faLocationArrow, faPhone, faTty, faUser } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { StateOfLanguage } from "../../components/Layout";
import { useContext } from "react";


export default function Contact() {
    const contextValue = useContext( StateOfLanguage )
    const mainHeading = contextValue[ 0 ] === 'ar' ? 'تواصل معنا' : 'Contact Us';
    const mainParagraph = contextValue[ 0 ] === 'ar' ? "هناك العديد من الطرق المتاحة لنا للتواصل والإجابة على أسئلتك" : 'There are many ways for us to get in touch and answer your questions';

    const yourName = contextValue[ 0 ] === 'ar' ? 'الأسم' : 'Your Name'
    const yourEmail = contextValue[ 0 ] === 'ar' ? 'البريد الألكتروني' : 'Your Email'
    const yourMessage = contextValue[ 0 ] === 'ar' ? 'رسالتك' : 'Your Message'
    const sendMessage = contextValue[ 0 ] === 'ar' ? 'أرسل الرسالة' : 'Send Message'

    const callUs = contextValue[ 0 ] === 'ar' ? 'اتصل بنا' : 'call Us'
    const WhereWeAre = contextValue[ 0 ] === 'ar' ? 'العنوان' : 'WHERE WE ARE'
    const address = contextValue[ 0 ] === 'ar' ? <address>سوريا-دمشق<br /> عرطوز<br />123-4567-890<br /></address> : <address>Syria-Damascus<br /> Artoz<br />123-4567-890<br /></address>
    const handelField = ( e ) => {

        if ( e.target.parentElement.nodeName === 'DIV' ) {
            e.target.parentElement.children[ 2 ].style.top = '-12px';
            e.target.parentElement.children[ 2 ].style.left = '70px';
            e.target.parentElement.children[ 2 ].style.color = '#157bac';
            e.target.parentElement.children[ 1 ].style.borderColor = '#157bac';
            e.target.parentElement.children[ 2 ].style.zIndex = '4';

        }

    }

    const handelSubmit = ( e ) => {
        e.preventDefault()
        console.log( e )
    }


    return (
        <>
            <Head>
                <title>{ mainHeading }</title>
                <meta
                    name="description"
                    content={ mainParagraph }
                />
            </Head>
            <div>
                <MainHeading tit={ mainHeading.toUpperCase() } para={ mainParagraph } />
                <div className="contact">
                    <div className="container">
                        <div className="content">
                            <form onSubmit={ handelSubmit }>
                                <div className="field" onClick={ ( e ) => handelField( e ) } onFocus={ ( e ) => handelField( e ) }>
                                    <FontAwesomeIcon icon={ faUser } className="ic-facebook"></FontAwesomeIcon>
                                    <input className="main-input" type="text" id="name" placeholder='Your Name ' required />
                                    <label className="label" htmlFor='name'>{ yourName }</label>
                                </div>
                                <div className="field" onClick={ ( e ) => handelField( e ) } onFocus={ ( e ) => handelField( e ) }>
                                    <FontAwesomeIcon icon={ faEnvelope } className="ic-facebook"></FontAwesomeIcon>
                                    <input className="main-input" type="email" id="email" placeholder='Your Email ' required />
                                    <label className="label" htmlFor='email'>{ yourEmail }</label>
                                </div>
                                <div className="field" onClick={ ( e ) => handelField( e ) } onFocus={ ( e ) => handelField( e ) }>
                                    <FontAwesomeIcon icon={ faLocationArrow } className="ic-facebook"></FontAwesomeIcon>
                                    <textarea className="main-input" id="text" name="message" placeholder='Your Message ' maxLength="100" required></textarea>
                                    <label className="label" htmlFor='message' name="text">{ yourMessage }</label>
                                </div>
                                <input type="submit" value={ sendMessage } />
                            </form>
                            <div className="info">
                                <h1>{ callUs }</h1>
                                {/* Tel  */ }
                                <a href="tel:[+9631168099710]" title='Telephon' >
                                    <div className="way" >
                                        <i className="fas fa-tty"></i>
                                        <FontAwesomeIcon icon={ faTty } className="ic-facebook"></FontAwesomeIcon>

                                        <span className="phone">Tel : +963 11 68099 710</span>
                                    </div>
                                </a>

                                {/* Fax  */ }
                                <a href='#' title='Fax'>

                                    <div className="way">
                                        {/* <i className="fas fa-fax"></i> */ }
                                        <FontAwesomeIcon icon={ faFax } className="ic-facebook"></FontAwesomeIcon>

                                        <span className="phone">Fax : +963 11 68099 711</span>
                                    </div>
                                </a>

                                {/* Mob  */ }
                                <a href="tel:[+963988366677]" title='phon number'>

                                    <div className="way">
                                        {/* <i className="fas fa-phone-square"></i> */ }
                                        <FontAwesomeIcon icon={ faPhone } className="ic-facebook"></FontAwesomeIcon>

                                        <span className="phone">Mob : +963 988 3666 77</span>
                                    </div>
                                </a>

                                {/* whaatsapp  */ }
                                <a href="https://api.whatsapp.com/send?phone=+963993453898&text=%22" title='whatsapp'>

                                    <div className="way">
                                        {/* <i className="fab fa-whatsapp" style={ { color: "#29ab5d" } }></i> */ }
                                        <FontAwesomeIcon icon={ faWhatsapp } className="ic-facebook" style={ { color: "#29ab5d" } }></FontAwesomeIcon>


                                        <span className="phone">whaatsapp : +963 993 4538 98</span>
                                    </div>
                                </a>

                                <h1>{ WhereWeAre }</h1>
                                { address }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

