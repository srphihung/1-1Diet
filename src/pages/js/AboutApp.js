import React from 'react'
import TopNav from '../js/TopNav'
import '../styles/AboutApp.css'
import { IonIcon } from '@ionic/react'
import { scaleOutline, peopleOutline, leafOutline, chevronForwardOutline } from 'ionicons/icons'

function AboutApp() {
    return (
        <ion-content>
            <div className="aboutAppPage">
                <TopNav />
                <div className="aboutAppContentContainer">
                    <div className="aboutAppContent">
                        <a className="blueBorder"><IonIcon icon={scaleOutline} className="infoIcon"></IonIcon></a>
                        <div className="aboutAppInfo">
                            <h3>BMI</h3>
                            <p>Bereken makkelijk en snel je BMI, Vraag advies aan als je daar behoefte aan hebt en zoek op een consulent naar keuze</p>
                        </div>
                    </div>
                    <div className="aboutAppContent">
                        <a className="blueBorder"><IonIcon icon={peopleOutline} className="infoIcon"></IonIcon></a>
                        <div className="aboutAppInfo">
                            <h3>Consulenten</h3>
                            <p>Makkelijk zoeken naar een consulent in jouwregio, die voor jou de goede match is.</p>
                        </div>
                    </div>
                    <div className="aboutAppContent">
                        <a className="blueBorder"><IonIcon icon={leafOutline} className="infoIcon"></IonIcon></a>
                        <div className="aboutAppInfo">
                            <h3>Recepten</h3>
                            <p>Al onze recepten en producten met 1 klik tot uw beschikking.</p>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>

    )
}

export default AboutApp
