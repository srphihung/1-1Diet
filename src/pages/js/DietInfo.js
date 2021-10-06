import React, { useState } from 'react'
import '../styles/DietInfo.css'
import TopNav from './TopNav'
import AboutImg1 from '../../images/aboutimg.svg'
import AboutImg2 from '../../images/aboutimg2.svg'
import AboutImg3 from '../../images/aboutimg3.svg'
import Stappenplan from '../../images/stappenplan.svg'
import { close, arrowBackOutline } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'

function DietInfo() {
    const [showPlan, setShowPlan] = useState(false)
    return (
        <ion-content>
            <div className="experiencePage">
                <TopNav />
                <div className="experienceContent">
                    <h1>Waar het om draait</h1>
                </div>
                <ion-slides pager="true">
                    <ion-slide>
                        <div className="aboutContent">
                            <img src={AboutImg1} className="aboutImg"></img>
                            <h1>People</h1>
                            <p>Niemand hoeft het alleen te doen. Je eigen consulent is er om jou te helpen en te motiveren, zowel tijdens als na het dieet</p>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div className="aboutContent">
                            <img src={AboutImg2} className="aboutImg"></img>
                            <h1>Products</h1>
                            <p>Iedereen heeft recht op smakelijk eten. De maaltijden van The 1 : 1 Diet zijn lekker en er is voor ieder wat wils.</p>
                        </div>
                    </ion-slide>
                    <ion-slide>
                        <div className="aboutContent">
                            <img src={AboutImg3} className="aboutImg"></img>
                            <h1>Plan</h1>
                            <p>Ieder mens is uniek. Het stappenplan is flexible, zodat je een op maat gemaakt dietplan krijgt dat bij jou past.</p>
                            <button onClick={() => setShowPlan(true)}>Volgende</button>
                        </div>
                    </ion-slide>
                </ion-slides>
                {showPlan ?
                    <div className="stappenPlan">
                        <div className="stappenPlanHeader">
                            <h1>Méér dan een dieet</h1>
                        </div>
                        <p>Het stappenplan is naast een dieet ook een bewustwordingsproces om te voorkomen dat je na het dieet terugvalt in oude gewoontes. Daar ligt de kracht en het success van dit dieet. We besteden aandacht aan alle aspecten van gewichtsbeheersing: Voeding, mind en bewegen.</p>
                        <div className="stappenplanImage">
                            <h1>Het stappenplan</h1>
                            <img src={Stappenplan} />
                        </div>
                    </div> : null}

                <a className="borderBottom"></a>
            </div>
        </ion-content>
    )
}

export default DietInfo
