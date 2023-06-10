import React from 'react'
import logo from "../public/icon/F.ico";

import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faMailchimp } from "@fortawesome/free-brands-svg-icons";


function footer() {
    return (
        <footer>
            <div className="conteainer">
                <div className="Logo">
                    <div className="ll">
                        <Image src={ logo } alt="ant" width={ 50 } height={ 50 } className="ll" />
                    </div>
                    <h2><span>T</span>est-<span>L</span>ogo</h2>
                </div>
                <div className="social" >
                    <h3>We Are Social</h3>
                    <a className="facebook" href="https://www.facebook.com/elecfree/" target="_blank" rel="noreferrer" title='facebook'>
                        <FontAwesomeIcon icon={ faFacebook } className="ic-facebook"></FontAwesomeIcon>
                    </a >
                    <a className="whatsapp" href="https://api.whatsapp.com/send?phone=+963993453898&text=%22" title='whatsapp'>
                        <FontAwesomeIcon icon={ faWhatsapp } ></FontAwesomeIcon>
                    </a >

                    <a className="location" href="https://www.google.com/maps/place/33%C2%B025'32.0%22N+36%C2%B009'02.2%22E/@33.4256796,36.1503546,19z/data=!4m5!3m4!1s0x0:0x0!8m2!3d33.4255633!4d36.1505975"
                        target="_blank" rel="noreferrer" title='map.google' >
                        <FontAwesomeIcon icon={ faMap }></FontAwesomeIcon>
                    </a >
                    <a className="phone" href="tel:[+963988366677]" title='mobile phon'>

                        <FontAwesomeIcon icon={ faPhone }></FontAwesomeIcon>

                    </a >
                    <a className="mail" href="mailto:abd.shkeho25@gmail.com" title='email'>
                        <FontAwesomeIcon icon={ faEnvelope } ></FontAwesomeIcon>

                    </a >
                    <p className="copyright" >  &copy; 2021 <span  > NextJs</span > Test Project</p >
                </div >

            </div >
        </footer >
    )
}

export default footer