import React, {Component, useEffect, useState} from 'react'
import TopNav from '../TopNav'
import '../../styles/Account/Account.css'
import { scaleOutline, resizeOutline, alertCircleOutline, settingsOutline, chevronForwardOutline, person, locationOutline } from 'ionicons/icons'
import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonIcon,
    IonImg,
    IonItem,
    IonText
} from '@ionic/react'
import DF from '../../../Data/DF.json'
import { Link } from 'react-router-dom'

function Account() {
    const [currentUser, setCurrentUer] = useState(DF[0])
    const [loading, setLoading] = useState(true)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return (
        <IonContent>
            <div>
                <TopNav />
                <div className="accountPageContent">
                    <button className="settingsBtn">
                        <IonIcon icon={settingsOutline} className="iconProfile">
                        </IonIcon>
                    </button>
                    <IonAvatar className="profileImg">
                        <IonImg src={DF.urlClientPhoto}/>
                    </IonAvatar>
                    <p>Welkom {DF.firstName} {DF.lastName} </p>
                    <p>{today}</p>
                    <hr />
                    <div className="statContainer">
                            <div className="heightContainer">
                                <div className="blueborder">
                                    <IonIcon icon={resizeOutline} className="iconProfile"></IonIcon>
                                </div><p>{DF.lengthInCm} Cm</p>
                            </div>
                        <div className="weightContainer">
                            <div className="blueborder">
                                <IonIcon icon={scaleOutline} className="iconProfile"></IonIcon>
                            </div>
                            <p>{DF.startWeight} Kg</p>
                        </div>
                        <div className="locationContainer">
                            <div className="blueborder">
                                <IonIcon icon={locationOutline} className="iconProfile"></IonIcon>
                            </div>
                            <p>{DF.location.city}, {DF.location.street} {DF.location.houseNumber}</p>
                        </div>
                    </div>
                    <div className="consulentContainer">
                        <h3>Aangesloten bij</h3>
                            <div className="consulentShrtct">
                                <div className="consulentContent">
                                    <p>{DF.consultantFullName}</p>
                                </div>
                                <IonIcon icon={chevronForwardOutline} className="iconConsulent"></IonIcon>
                            </div>
                            <div className="noConsulentWarning">
                                <div className="blueWarning">
                                    <IonIcon icon={alertCircleOutline} className="iconProfile"></IonIcon>
                                </div>
                                <div className="noConsulentWarningContent">
                                    <p>Het lijkt er op dat u nog niet bent aangesloten bij een van onze consulenten. Een 1:1 diet consulent kan je helpen bij het behouden van een gezond dieet</p>
                                    <button className="searchConsulent">Consulent zoeken</button>
                                </div>
                            </div>
                    </div>
                    {/* {currentUser.user_id === Number  ? ( */}
                    <h3>Laatste stats</h3>
                    <div className="IonCardStats">
                        <IonCard className="userStatContainer">
                            <IonCardContent className="userStatContainerContent">
                                <Link to="/voortgang"><IonButton className="toProgress" shape="round">Volledig rapport</IonButton></Link>
                            </IonCardContent>
                        </IonCard>
                    </div>
                    {/* ) : ( null )} */}
                </div>
            </div>
        </IonContent>
    )
}
export default Account
