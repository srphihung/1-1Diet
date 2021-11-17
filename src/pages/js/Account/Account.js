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

function Account(props) {
    const [currentUser, setCurrentUer] = useState(DF[0])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    const axios = require("axios")
    axios.post('https://test-api-cwp.vp-company.nl/connect/token', QueryString.stringify({
        username: "rcwtest1@1op1dieet.nl",
        password: "Onzin&21&",
        grant_type: "password",
    }), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(response => {
        console.log(response.data)
    }).catch(err => console.log(err.response))

    const instance = axios.create({
        baseURL: 'https://test-api-cwp.vp-company.nl/api/',
        method: 'GET',
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+"eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1MTdCRDk3NjZBQ0M5Qzg5OERCRUZFM0Y4MjI2MjA1QTU5RUQ4QjUiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIxNjg1NCIsInJjd3VpZCI6IjE2ODU0IiwidG9rZW5fdXNhZ2UiOiJhY2Nlc3NfdG9rZW4iLCJqdGkiOiJmODBiODQwNS02NWZhLTQ0NDQtYjg2Zi00YjdiYjkxMDA1MzgiLCJzY29wZSI6WyJwcm9maWxlIiwib2ZmbGluZV9hY2Nlc3MiXSwibmJmIjoxNjM2ODAzNjYwLCJleHAiOjE2MzY4MDcyNjAsImlhdCI6MTYzNjgwMzY2MCwiaXNzIjoiaHR0cHM6Ly90ZXN0LWFwaS1jd3AudnAtY29tcGFueS5ubC8ifQ.cVwB2PEVjJbiscM_AVeK_e0xg3MV5HLzOngS4T-S84Gk8xi2GrJDkcLM2DBp0AgpORfg06ob8mNYKQmPyaQYgGiHDK5YvRbvv8Vf2PO_CHNsf81IR7SVW4L83IGUOGvZMMXd5gJfhddWZcBS7piuQwOMVCnSAW7xLDXnE3IJI_5pbquDewCf_phPdCYSq6XEjrSFJkbGVw2wIPJAGlovX6ix7Ki-axQvZK26UeUo29xqtUJuElayBqHyv5HAHDe586m3HFAxDjFqiMBYpiwRtpAPKUe2yxlShbO0c-jHUEy-Mys1g9qzkd6G2QZbWd_5a32WC_8SqxEOA4X70PHKJnYbyN_6vhDgogtpL5-LrTCEriJCB8pLPj-RoP66KWehX8HYb-T8hRwS57MF4b2zm1yj2BcWvnUPqUau_Qm-7gF2opxXlLinNNtEn7jqdE0dfadWDPrJHhdfQJcEXYS-K1jxApKgvNrKStJZOTyvgNZ7MIKhv9cexwU7eX-rSthXdWtEj71hNPJtrqqgJdS8dCiDgItXJ7ZeLtTXc-It32hcCgjXMcu08hDwCsifoJ2mDNXOeQFHELM-N8AHc7ySBZfsqFqY1rOL5WJyFFkAf9Thp8gpvnbv3Y6XPt_w0WMNm95124CgVvfk4BASgQVEOna6hCgTR_tiXl0uVFA6lDo"}
    });

    fetch('https://test-api-cwp.vp-company.nl/api/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error));


    instance.get('/client/accountinformation')
        .then(response => {
            return response.data;
        })

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
                                    <h2>Gewichten</h2>
                                    <IonCol className="weightDetails">
                                        <p><strong>Start Gewicht:</strong> {DF.startWeight}</p>
                                        <p><strong>Start BMI:</strong> {DF.startBMI}</p>
                                        <p><strong>Start Middel:</strong> {DF.startWaistSize}</p>
                                        <p><strong>Doel Gewicht:</strong> {DF.targetWeight}</p>
                                        <p><strong>Doel BMI:</strong> {DF.targetBMI}</p>
                                        <p><strong>Doel Middel:</strong> {DF.targetWaistSize}</p>
                                        <p><strong>Vet:</strong> {(DF.clientWeightDetails.showFat === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>Middel:</strong> {(DF.clientWeightDetails.showWaist === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>Visceraal Vet:</strong> {(DF.clientWeightDetails.showVisceralFat === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>Vet Vrij Massa:</strong> {(DF.clientWeightDetails.showFatFreeMass === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>Gespierde Massa:</strong> {(DF.clientWeightDetails.showMuscularMass === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>Bot Mass:</strong> {(DF.clientWeightDetails.showBoneMass === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>BmrKc:</strong> {(DF.clientWeightDetails.showBmrKc === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>BmrKj:</strong> {(DF.clientWeightDetails.showBmrKj === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>Metabloische Leeftijd:</strong> {(DF.clientWeightDetails.showMetabolicAge === 'true') ? "Onwaar" :  "Waar" }</p>
                                        <p><strong>Gezond Gewicht:</strong> {(DF.clientWeightDetails.showHealthyWeight === 'true') ? "Onwaar" :  "Waar" }</p>
                                    </IonCol>
                                    
                                </div>
                                <IonButton className="WeightModalCloseButton" color="none" onClick={() => setShowModal(false)}>Close Modal</IonButton>
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
export default Account
