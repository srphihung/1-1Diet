import React, {Component, useEffect, useState} from 'react'
import TopNav from '../TopNav'
import '../../styles/Account/Account.css'
import { scaleOutline, resizeOutline, alertCircleOutline, settingsOutline, chevronForwardOutline, person, locationOutline } from 'ionicons/icons'
import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent, IonCol,
    IonContent,
    IonIcon,
    IonImg,
    IonItem, IonModal,
    IonText,
    useIonModal
} from '@ionic/react'
import DF from '../../../Data/DF.json'
import { Link } from 'react-router-dom'
import Logo from "../../../images/logodiet.svg";

function Account() {
    const [currentUser, setCurrentUer] = useState(DF[0])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)

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
                            <IonModal isOpen={showModal} className='WeightModal'>
                                <div className="navigationInfo">
                                    <img className="logo" src={Logo} alt={'1:1 Diet logo'}/>
                                </div>
                                <h2>Gewichten:</h2>
                                <IonCol className="weightDetails">
                                    <p><strong>Start Gewicht:</strong> {DF.startWeight}</p>
                                    <p><strong>Start BMI:</strong> {DF.startBMI}</p>
                                    <p><strong>Start Middel:</strong> {DF.startWaistSize}</p>
                                    <p><strong>Doel Gewicht:</strong> {DF.targetWeight}</p>
                                    <p><strong>Doel BMI:</strong> {DF.targetBMI}</p>
                                    <p><strong>Doel Middel:</strong> {DF.targetWaistSize}</p>
                                    <p><strong>Laat Vet Zien:</strong> {DF.clientWeightDetails.showFat}</p>
                                    <p><strong>Laat Middel Zien:</strong> {DF.clientWeightDetails.showWaist}</p>
                                    <p><strong>Laat Visceraal Vet Zien:</strong> {DF.clientWeightDetails.showVisceralFat}</p>
                                    <p><strong>Laat Vet Vrij Massa Zien:</strong> {DF.clientWeightDetails.showFatFreeMass}</p>
                                    <p><strong>Laat Gespierde Massa Zien:</strong> {DF.clientWeightDetails.showMuscularMass}</p>
                                    <p><strong>Laat Bot Massa Zien:</strong> {DF.clientWeightDetails.showBoneMass}</p>
                                    <p><strong>Laat BmrKc zien:</strong> {DF.clientWeightDetails.showBmrKc}</p>
                                    <p><strong>Laat BmrKj zien:</strong> {DF.clientWeightDetails.showBmrKj}</p>
                                    <p><strong>Laat Metabloische Leeftijd Zien:</strong> {DF.clientWeightDetails.showMetabolicAge}</p>
                                    <p><strong>Laat Gezond Gewicht Zien:</strong> {DF.clientWeightDetails.showHealthyWeight}</p>
                                </IonCol>
                                <IonButton className="WeightModalCloseButton" color="none" onClick={() => setShowModal(false)}>Close Modal</IonButton>
                            </IonModal>
                            <p>
                                <IonButton className="WeightModalButton" onClick={() => setShowModal(true)} color="none">Gewicht</IonButton>
                            </p>
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
