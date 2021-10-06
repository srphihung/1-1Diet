import { IonCard, IonCardContent, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonProgressBar, IonText, IonTextarea, IonTitle } from '@ionic/react'
import React, { useState } from 'react'
import TopNav from '../TopNav'
import '../../styles/Voortgang/Progress.css'
import { calendarClearOutline, arrowForward } from 'ionicons/icons'
import CurrentUser from '../../../Data/CurrentUser.json'
import ProgressIndicator from './ProgressIndicator'

function Progress() {
    const [currentUser, setCurrentUser] = useState(CurrentUser[0])

    // Progress bar indicator
    var Range = (currentUser.user_startweight - currentUser.user_goal)
    var Difference = (currentUser.user_startweight - currentUser.user_currentweight)
    var ProgressValue = (100 / Range * Difference / 100)

    //Indicator moments
    var Indicator = (currentUser.user_next_oppointment === currentUser.user_appointments.date)
 
    return (
        <IonContent>
            <TopNav />
            <div className="Container">
                <IonTitle className="TitleContainer">
                    <IonLabel className="Title" onClick={() => console.log(Indicator)}>Voortgang</IonLabel>
                </IonTitle>
                <div className="InfoContainer">
                    <div className="progressContainer">
                        {currentUser.user_appointments.map((moment) => {
                            return <ProgressIndicator key={moment.title} moment={moment.type} />
                        })}
                    </div>
                    <IonCard className="DateContainer" lines="none">
                        <IonCardContent className="DateContainerContent">
                            <IonItem className="BlueBorder" lines="none">
                                <IonIcon icon={calendarClearOutline} className="calendarIcon"></IonIcon>
                            </IonItem>
                            <IonText className="oppointmentDate"><strong>Afspraak: </strong>{currentUser.user_next_oppointment}</IonText>
                        </IonCardContent>
                    </IonCard>
                    <IonTitle className="SubtitleContainer">
                        <IonLabel className="SubTitle">Geschiedenis</IonLabel>
                    </IonTitle>
                    <IonCard className="goalStatContainer">
                        <IonCardContent className="goalStatContainerContent">
                            <IonText className="statTitle">Intake gesprek</IonText>
                            <IonText className="graphGoal"><strong>Huidig: </strong>{currentUser.user_currentweight} Kg - <strong>Doel:</strong> {currentUser.user_goal} Kg</IonText>
                            <IonProgressBar className="weightProgress" value={ProgressValue}></IonProgressBar>
                            <IonText className="statTitle">Huidige stap</IonText>
                            <IonText className="currentStep">Stap {currentUser.user_step}</IonText>
                        </IonCardContent>
                    </IonCard>
                    {currentUser.user_appointments.slice(0, 3).map((moment) => {
                        return <IonCard key={moment.title} className="weightMomentContainer">
                            <IonCardContent className="weightMomentInfo">
                                <div className="weightTextContainer">
                                    <IonText className="weightTitle">{moment.title}</IonText>
                                    <IonText className="weightDate">{moment.date}</IonText>
                                </div>
                                <div className="weightMomentSmallCircle">{moment.weight} Kg</div>
                            </IonCardContent>
                        </IonCard>
                    })}
                    <div className="sliderHeader">
                        <IonLabel className="SubTitle">Producten stap {currentUser.user_step}</IonLabel>
                        <IonIcon icon={arrowForward} className="sliderIcon"></IonIcon>
                    </div>
                    <div className="productsContainer">
                        {currentUser.user_products.map((product) => {
                            return <IonCard className="productCard" key={product.product_title}>
                                <IonCardContent className="productCardContent">
                                    <img src={product.product_image} className="productImage"></img>
                                    <IonText className="producTitle">{product.product_title}</IonText>
                                </IonCardContent>
                            </IonCard>
                        })}
                    </div> 
                </div>
                <a className="borderBottom"></a>
            </div>
        </IonContent>
    )
}

export default Progress

