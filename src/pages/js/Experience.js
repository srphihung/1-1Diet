import React, { useState } from 'react'
import '../styles/Experience.css'
import TopNav from '../js/TopNav'
import ExperienceImg from '../../images/experienceImg.svg'
import ExperienceImg2 from '../../images/experienceImg2.svg'
import logo from '../../images/logodiet.svg'
import { informationOutline, close } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { Link } from 'react-router-dom'

function Experience() {
    const [modal, setModal] = useState(false)

    function toggle() {
        setModal(!modal)
    }

    return (
        <div className="experiencePage">
            {modal ?
                <div className="modalBckgrnd">
                    <div className="modal">
                        <div className="modalHeader">
                        <img src={logo}></img>
                        <IonIcon icon={close} onClick={toggle} className="closeModal"></IonIcon>
                        </div>
                        <p>The 1:1 Diet maakt geen gebruik van voor- en nafoto’s bij de cliëntverhalen. Ook doen wij geen mededelingen over het aantal afgevallen kilo’s en de snelheid van het bereikte resultaat. We willen niet de indruk wekken dat deze mooie resultaten in een ‘handomdraai’ voor iedereen te behalen zijn.  Afslanken en gewichtsbehoud is en blijft een persoonlijk proces en werkt voor iedereen anders.</p>
                    </div>
                </div> : null}
            <TopNav />
            <div className="experienceContent">
                <h1>Ervaringsverhalen</h1>
            </div>
            <ion-slides pager="true">
                <ion-slide>
                    <div className="experienceSlide">
                        <button className="modalBtn" onClick={toggle}><ion-icon icon={informationOutline} ></ion-icon></button>
                        <h1>Als ik nu in de spiegel kijk...</h1>
                        <img src={ExperienceImg} className="experienceImg"></img>
                        <p>Niemand hoeft het alleen te doen. Je eigen consulent is er om jou te helpen en te motiveren, zowel tijdens als na het dieet</p>
                        <Link to="/stories"><button className="moreBtn" >Lees meer</button></Link>
                    </div>
                </ion-slide>
                <ion-slide>
                    <div className="experienceSlide">
                        <button className="modalBtn" onClick={toggle}><ion-icon icon={informationOutline}></ion-icon></button>
                        <h1>Dit gevoel wil ik nooit kwijt...</h1>
                        <img src={ExperienceImg2} className="experienceImg"></img>
                        <p>Iedereen heeft recht op smakelijk eten. De maaltijden van The 1 : 1 Diet zijn lekker en er is voor ieder wat wils.</p>
                        <Link to="stories"><button className="moreBtn" >Lees meer</button></Link>
                    </div>
                </ion-slide>
            </ion-slides>
            <a className="borderBottom"></a>
        </div>
    )
}

export default Experience
