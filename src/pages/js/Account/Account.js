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
import * as QueryString from "querystring";
import axios from "axios";

export default Account
function Account(props) {
    useEffect(() => {authenticationPost()}, []);
    useEffect(() => {authenticationGet()}, []);
    const [currentUser, setCurrentUer] = useState(DF[0])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const axios = require("axios")
    let TOKEN


    let authenticationPost = ( ) => {
        axios.post('https://test-api-cwp.vp-company.nl/connect/token', QueryString.stringify({
            username: "rcwtest1@1op1dieet.nl",
            password: "Onzin&21&",
            grant_type: "password",
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "accept": "application/x-www-form-urlencoded",
                "Authorization": "Bearer" + "TOKEN"
            }
        }).then(response => {
            console.log(response.data)
            console.log('userresponse: ' + response.data.access_token);
        }).catch(err => console.log(err.response))
    }

    let authenticationGet = () => {
        axios.get('https://test-api-cwp.vp-company.nl/api/client/accountinformation').then(response =>{
            console.log(response);
        })
    }

    return (
        <IonContent>
            <TopNav/>
            <div className="accountPageContent">

                <button className="settingsBtn">
                    <IonIcon icon={settingsOutline} className="iconProfile">
                    </IonIcon>
                </button>

                <IonAvatar className="profileImg">
                    <IonImg src={DF.urlClientPhoto}/>
                </IonAvatar>

                <p>Welkom {DF.firstName} {DF.lastName} </p>

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
                        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} swipe-to-close="true" className='WeightModal'>
                            <div className="modal-dialog modal-dialog-scrollable">
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
                                    <p><strong>Laat Vet Zien:</strong> {(DF.clientWeightDetails.showFat === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat Middel Zien:</strong> {(DF.clientWeightDetails.showWaist === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat Visceraal Vet Zien:</strong> {(DF.clientWeightDetails.showVisceralFat === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat Vet Vrij Massa Zien:</strong> {(DF.clientWeightDetails.showFatFreeMass === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat Gespierde Massa Zien:</strong> {(DF.clientWeightDetails.showMuscularMass === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat Bot Massa Zien:</strong> {(DF.clientWeightDetails.showBoneMass === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat BmrKc zien:</strong> {(DF.clientWeightDetails.showBmrKc === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat BmrKj zien:</strong> {(DF.clientWeightDetails.showBmrKj === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat Metabloische Leeftijd Zien:</strong> {(DF.clientWeightDetails.showMetabolicAge === 'true') ? "Onwaar" :  "Waar" }</p>
                                    <p><strong>Laat Gezond Gewicht Zien:</strong> {(DF.clientWeightDetails.showHealthyWeight === 'true') ? "Onwaar" :  "Waar" }</p>
                                </IonCol>
                                <IonButton className="WeightModalCloseButton" color="none" onClick={() => setShowModal(false)}>Close Modal</IonButton>
                            </div>

                        </IonModal>
                        <p>
                            <IonButton className="WeightModalButton" onClick={() => setShowModal(true)} color="none">Gewicht</IonButton>
                        </p>
                    </div>


                    {/* <div className="locationContainer">
                            <div className="blueborder">
                                <IonIcon icon={locationOutline} className="iconProfile"></IonIcon>
                            </div>
                            <p>{DF.location.city}, {DF.location.street} {DF.location.houseNumber}</p>
                        </div> */}
                </div>

                <div className="consulentContainer">
                    <h3>Aangesloten bij</h3>

                    {(DF.consultantFullName) ?
                        <div className="consulentShrtct">
                            <div className="consulentContent">
                                <p>{DF.consultantFullName}</p>
                            </div>
                            <IonIcon icon={chevronForwardOutline} className="iconConsulent"></IonIcon>
                        </div>
                        // console.log('true')
                        :
                        <div className="noConsulentWarning">
                            <div className="blueWarning">
                                <IonIcon icon={alertCircleOutline} className="iconProfile"></IonIcon>
                            </div>
                            <div className="noConsulentWarningContent">
                                <p>Het lijkt er op dat u nog niet bent aangesloten bij een van onze consulenten. Een 1:1 diet consulent kan je helpen bij het behouden van een gezond dieet</p>
                                <button className="searchConsulent">Consulent zoeken</button>
                            </div>
                        </div>
                        // console.log('false')
                    }



                </div>
                {/* {currentUser.user_id === Number  ? ( */}


                {/* <h3>Laatste stats</h3>
                    <div className="IonCardStats">
                        <IonCard className="userStatContainer">
                            <IonCardContent className="userStatContainerContent">
                                <Link to="/voortgang"><IonButton className="toProgress" shape="round">Volledig rapport</IonButton></Link>
                            </IonCardContent>
                        </IonCard>
                    </div> */}
                {/* ) : ( null )} */}
            </div>
        </IonContent>
    )
}
