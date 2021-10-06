import { IonContent, IonItem, IonText } from '@ionic/react'
import React from 'react'
import '../../styles/Voortgang/Progress.css'

function ProgressIndicator({ moment }) {
    return (
        <div className="indicatorContainer">
            <IonText className="indicatorMoment">{moment}</IonText>
            <div className="indicatorLine">
                <div className="indicatorCircle" onClick={() => console.log(moment)}></div>
            </div>
        </div>
    )
}

export default ProgressIndicator
