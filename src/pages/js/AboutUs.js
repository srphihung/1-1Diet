import React from 'react'
import TopNav from './TopNav'
import '../styles/AboutUs.css'
import Aboutus from '../../images/aboutus.svg'

function AboutUs() {
    return (
        <div className="aboutUsPage">
            <TopNav />
            <div className="aboutUsContent">
                <div className="aboutUsHeader">
                    <h1>Een gezonde levensstijl als missie</h1>
                    <img src={Aboutus}></img>
                    <p>The 1:1 Diet bestaat uit een geweldige, gepassioneerde en deskundige groep mensen die ondersteuning, flexibele eetplannen en zorgvuldig uitgebalanceerde maaltijden biedt die anderen helpen hun doel te bereiken.</p>
                    <p>Of dat nu gewichtsverlies of gewichtsbehoud is. Onze consulenten bieden unieke 1 op 1 begeleiding. Dat is iets waar we trots op zijn.</p>
                </div>
                <div className="aboutUsInfo">
                    <h1>1:1 Diet</h1>
                    <p>We zijn sinds 1997 de distributeur voor Nederland, België en de Nederlandse Antillen. De Engelse voedingsdeskundige Dr. Alan Howard was de grondlegger van ons dieet en medeoprichter van The International Journal of Obesity. </p>
                    <p>Nog altijd participeert The 1:1 Diet in internationaal medisch-wetenschappelijk onderzoek. Hierbij worden The 1:1 Diet maaltijden gebruikt als interventiemethode bij overgewicht, in relatie tot onder meer gewrichtsproblemen, slaapapneu en diabetes type 2.</p>
                </div>
            </div>
            <a className="borderBottom"></a>
        </div>
    )
}

export default AboutUs
