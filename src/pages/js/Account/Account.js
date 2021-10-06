import React, { useEffect, useState } from 'react'
import TopNav from '../TopNav'
import '../../styles/Account/Account.css'
import { scaleOutline, resizeOutline, alertCircleOutline, settingsOutline, chevronForwardOutline, person } from 'ionicons/icons'
import { IonAvatar, IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonText } from '@ionic/react'
import CurrentUser from '../../../Data/CurrentUser.json'
import { Link } from 'react-router-dom'

function Account() {
    const [currentUser, setCurrentUer] = useState(CurrentUser[0])
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
                    <button className="settingsBtn"><IonIcon icon={settingsOutline} className="iconProfile"></IonIcon></button>
                    <IonAvatar className="Avatar"><IonIcon icon={person} className="avatarIcon"></IonIcon></IonAvatar>
                    <p>Welkom {currentUser.user_firstname} {currentUser.user_lastname} </p>
                    <p>{today}</p>
                    <hr />
                    <div className="statContainer">
                        <div className="heightContainer"><div className="blueborder"><IonIcon icon={resizeOutline} className="iconProfile"></IonIcon></div><p>{currentUser.user_height} Cm</p></div>
                        <div className="weightContainer"><div className="blueborder"><IonIcon icon={scaleOutline} className="iconProfile"></IonIcon></div><p>{currentUser.user_currentweight} Kg</p></div>
                    </div>
                    <div className="consulentContainer">
                        <h3>Aangesloten bij</h3>
                        {currentUser.consulent.length === 1 ? (
                            <div className="consulentShrtct">
                                <IonAvatar className="consulentAvatar">
                                    <img src={currentUser.consulent[0].consulent_image} className="consulentProfileImg"></img>
                                </IonAvatar>
                                <div className="consulentContent">
                                    <p>{currentUser.consulent[0].consulent_name}</p>
                                    <p>{currentUser.consulent[0].consulent_adres}</p>
                                </div>
                                <IonIcon icon={chevronForwardOutline} className="iconConsulent"></IonIcon>
                            </div>
                        ) : (
                            <div className="noConsulentWarning">
                                <div className="blueWarning">
                                    <IonIcon icon={alertCircleOutline} className="iconProfile"></IonIcon>
                                </div>
                                <div className="noConsulentWarningContent">
                                    <p>Het lijkt er op dat u nog niet bent aangesloten bij een van onze consulenten. Een 1:1 diet consulent kan je helpen bij het behouden van een gezond dieet</p>
                                    <button className="searchConsulent">Consulent zoeken</button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* {currentUser.user_id === Number  ? ( */}
                    <h3>Laatste stats</h3>
                    <div className="IonCardStats">
                        <IonCard className="userStatContainer">
                            <IonCardContent className="userStatContainerContent">
                                {currentUser.user_appointments.slice(0,2).map((appointment) => {
                                    return <IonCardContent key={appointment.title}>
                                        <IonText className="statTitle">{appointment.title}</IonText><br />
                                        <IonText className="statDate">{appointment.date}</IonText>
                                        <div className="weightMomentCircle">{appointment.weight} Kg</div>
                                        <hr />
                                    </IonCardContent>
                                })}
                                <Link to="/voortgang"><IonButton className="toProgress" shape="round">Volledig rapport</IonButton></Link>
                            </IonCardContent>
                        </IonCard>
                    </div>
                    {/* ) : ( null )} */}
                </div>
                <a className="borderBottom"></a>
            </div>
        </IonContent>

    )
}

export default Account
