import Head from 'next/head';
import BoxServices from '../../components/BoxServices/BoxServices';
import { faPersonChalkboard, faCubes, faScrewdriverWrench, faWeightScale } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../../components/mainHeading/MainHeading';
import { StateOfLanguage } from "../../components/Layout";
import { useContext } from "react";



export default function Test() {
    const contextValue = useContext( StateOfLanguage )

    const stydyAndDesign = contextValue[ 0 ] === 'ar' ?
        `دراسة تصميم وتنفيذ نظام فوتوفوليتيك (خارج الشبكة).
دراسة تصميم وتنفيذ النظام الضوئي (ضخ بالطاقة الشمسية).
دراسة تصميم وتنفيذ النظام الضوئي (على الشبكة).` :
        `Studying Designing and implementing photovolatic system (Off Grid).
Studying Designing and implementing photovolatic system (Solar Pumping). 
Studying Designing and implementing photovolatic system (on Grid).`;
    const trainingAndTeatching = contextValue[ 0 ] === 'ar' ? `إجراء الدورات التدريبية (النظرية والعملية).
إجراء دورات تدريبية لأدوات قياس واختبار الأنظمة الكهروضوئية (نظري وعملي).`
        : `Undertaking training courses (Theoretical and Practical).
Undertaking training courses of measuring and testing instruments of photovoltaic systems (Theoretical and Practical).`
    const Maintenance = contextValue[ 0 ] === 'ar' ? `تنفيذ الصيانة التصحيحية للأنظمة الكهروضوئية.
سنوجهك خلال كل خطوة من البداية إلى النهاية`
        :
        `Implementing corrective maintenance of photovoltaic systems.
We will guide you through every step from start to finish`
    const TestingAndMeasuring = contextValue[ 0 ] === 'ar' ? `اختبار الأنظمة الكهروضوئية.
التصوير الحراري للأنظمة الكهروضوئية.`
        : `Testing photovoltaic systems.
Thermal Imaging of photovoltaic systems.`



    const headStudyAndDesign = contextValue[ 0 ] === 'ar' ? "الدراسة والتصميم" : 'Study and Design'
    const headTrainingAndTeatching = contextValue[ 0 ] === 'ar' ? 'التدريب والتعليم' : 'Training and Teatching'
    const headMaintenance = contextValue[ 0 ] === 'ar' ? 'أعمال الصيانة' : "Maintenance"
    const headTestingAndMeasuring = contextValue[ 0 ] === 'ar' ? 'الاختبار والقياس' : 'Testing and Measuring'


    const mainHeading = contextValue[ 0 ] === 'ar' ? "الخدمات" : 'Services';
    const mainParagraph = contextValue[ 0 ] === 'ar' ? `حلول الطاقة ، الطاقة الجديدة والمتجددة ، أبحاث الطاقة والتدريب` : 'Energy Solution, New and Renewable Energy, Energy Research & Training';
    return (
        <>
            <Head>
                <title>{ mainHeading } </title>
                <meta
                    name="description"
                    content={ mainParagraph }
                />
            </Head>
            <div className='page'>

                <div className="">
                    <MainHeading tit={ mainHeading } para={ mainParagraph } />
                    <div className='services-container'>
                        <BoxServices para={ stydyAndDesign } headeTitle={ headStudyAndDesign } icon={ faCubes } />
                        <BoxServices para={ trainingAndTeatching } headeTitle={ headTrainingAndTeatching } icon={ faPersonChalkboard } />
                        <BoxServices para={ Maintenance } headeTitle={ headMaintenance } icon={ faScrewdriverWrench } />
                        <BoxServices para={ TestingAndMeasuring } headeTitle={ headTestingAndMeasuring } icon={ faWeightScale } />

                    </div>
                </div>
            </div >


        </>
    )
}