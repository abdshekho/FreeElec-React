import Head from 'next/head';
import MainHeading from '../../components/mainHeading/MainHeading';
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import BoxAbout from '../../components/BoxAbout/BoxAbout';
import { faBuilding, faChalkboardUser, faBarsProgress, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { StateOfLanguage } from "../../components/Layout";
import { useContext } from "react";
import Image from 'next/image';


export default function About() {
    const contextValue = useContext( StateOfLanguage )
    const mainHeading = contextValue[ 0 ] === 'ar' ? 'حولنا' : 'About us'
    const mainParagraph = contextValue[ 0 ] === 'ar' ? `نحن نستخدم فقط المنتجات الرائدة في الصناعة ، كمورد معتمد. تعتبر جودة منتجاتنا ذات أهمية قصوى بالنسبة لنا`
        :
        'We use only industry-leading products, as a certified supplier. The quality of our products is of the upmost importance to us'
    const images = [
        '/imageAbout/1.jpg',
        '/imageAbout/2.jpg',
        '/imageAbout/3.jpg',
        '/imageAbout/4.jpg'
    ]
    const zoomInProperties = {
        indicators: true,
        scale: 1.2,
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <div style={ { width: "30px", marginRight: "-30px", cursor: "pointer" } }>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill={ contextValue[ 1 ] === 'on' ? 'white' : "#2e2e2e" }
                >
                    <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
                </svg>
            </div>
        ),
        nextArrow: (
            <div style={ { width: "30px", marginLeft: "-30px", cursor: "pointer" } }>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill={ contextValue[ 1 ] === 'on' ? 'white' : "#2e2e2e" }
                >
                    <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
                </svg>
            </div>
        ),
    };
    const title1 = contextValue[ 0 ] === 'ar' ? `من نحن` : 'Who we are'
    const para1 = contextValue[ 0 ] === 'ar' ? `نحن في FREE ELEC مزود لإمدادات الطاقة الشمسية. تأسست شركة FREE ELEC منذ عام 2012 ، وهي متخصصة في توريد حلول الطاقة الشمسية بأسعار تنافسية بما في ذلك توريد التركيب والاختبار والصيانة باستخدام أدوات قياس واختبار عالية التقنية`
        :
        `We at FREE ELEC a provider of solar energy supplies. FREE ELEC has been established since 2012 , specialized in supplying solar energy solutions at a competitive prices including supplying installation, testing and maintenance using high technical measuring and testing instruments`
    const title2 = contextValue[ 0 ] === 'ar' ? `رؤيتنا` : `Our Vision`
    const para2 = contextValue[ 0 ] === 'ar' ? `توفير أنظمة كهروضوئية على مستوى عالٍ من الدقة والاحترافية. تقديم منتجات بجودة عالية وسعر معقول وتسليمها في الوقت المحدد وملائمة لكسب ثقة العملاء من خلال التقديم`
        : `Providing photovoltaic systems at a high level of accuracy and professionality. Offering products at a high quality, reasonable price, delivered on time and convenient to gain customer trust through applying`;

    const title3 = contextValue[ 0 ] === 'ar' ? `مهمتنا` : `Our Mission`
    const para3 = contextValue[ 0 ] === 'ar' ? `تقديم المنتجات والخدمات بأسعار مناسبة وتنافسية مع مراعاة تلبية الجودة العالية من خلال موظفينا المؤهلين.`
        : `Offering products and services at reasonable and competitive prices taking into consideration meeting a high quality through our qualified staff.`;

    const title4 = contextValue[ 0 ] === 'ar' ? `قيمتنا` : `Our Value`
    const para4 = contextValue[ 0 ] === 'ar' ? `مصداقية
التفرد
حافظ على بيئة صحية`
        : `Credibility
Uniquity
Maintain a healthy environment`;

    const title5 = contextValue[ 0 ] === 'ar' ? `` : ``
    const para5 = contextValue[ 0 ] === 'ar' ? `` : ``;
    return (
        <>


            <Head>
                <title>{ mainHeading }</title>
                <meta
                    name="description"
                    content={ mainParagraph }
                />
            </Head>


            <div className='page About'>
                <MainHeading tit={ mainHeading } para={ mainParagraph } />
                <div className="m-10 " >


                    <Zoom { ...zoomInProperties }>
                        { images.map( ( each, index ) => (
                            <div key={ index } className="flex justify-center w-full h-full"
                            >
                                {/* <img
                                    className="w-3/4 object-cover rounded-lg shadow-xl"
                                    src={ each }
                                /> */}
                                <Image src={ each } alt="ant"
                                    quality={ 100 }
                                    property='#2e2e2e'
                                    style={ { objectFit: 'contain', height: '100%', width: '82%' } }
                                    width={ 720 } height={ 480 }
                                    className="w-3/4 object-cover rounded-lg shadow-xl" />

                            </div>
                        ) ) }
                    </Zoom>
                </div>
                <div className='About-box'>

                    <BoxAbout title={ title1 } para={ para1 } icon={ faBuilding }></BoxAbout>
                    <BoxAbout title={ title2 } para={ para2 } icon={ faChalkboardUser }></BoxAbout>
                    <BoxAbout title={ title3 } para={ para3 } icon={ faBarsProgress }></BoxAbout>
                    <BoxAbout title={ title4 } para={ para4 } icon={ faLeaf }></BoxAbout>
                </div>
            </div>

        </>
    )
}