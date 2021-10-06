import React from 'react'
import Logo from '../../../images/logodiet.svg'
import { IonContent, IonIcon } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import '../../styles/Stories/ClientStory.css'
import StoryTitle from '../../../images/storytitle.svg'
import StoryImg from '../../../images/storyimg2.svg'

function ClientStory() {
    return (
        <IonContent>
            <div className="ClientStory">
                <div className="storyHeader">
                    <Link to="/experience"><IonIcon icon={chevronBackOutline} className="chevronBack"></IonIcon></Link>
                    <img src={Logo} className="dietLogo"></img>
                </div>
                <div className="storyContent">
                    <img src={StoryTitle}></img>
                    <p>Ineke Hoeksema wist dat ze wat aan haar overgewicht moest en wilde doen. Maar over een dieet met maaltijdvervangers heeft ze lang getwijfeld. Ze wist als kok toch heel goed zelf wat goed en fout was?</p>
                    <img src={StoryImg}></img>
                    <p>"Door mijn eerdere pogingen om af te vallen ben ik vaak in een vicieuze cirkel terechtgekomen. Het ging altijd een paar weken goed en vervolgens werden de verleidingen weer te groot en was mijn doorzettingsvermogen weg. Ik hield het gewoon niet vol en voelde me daar slecht over."</p>
                    <h3>Consulent</h3>
                    <p>“Na veel twijfels ben ik met dit dieet begonnen. Ik was sceptisch, maar wist ook dat er drastisch iets moest veranderen. De volgende dag zat ik bij mijn consulent. Ik hield mezelf voor dat als het niets zou zijn, ik gewoon weer zou stoppen.”</p>
                </div>
                <a className="borderBottom"></a>
            </div>
        </IonContent>
    )
}

export default ClientStory
