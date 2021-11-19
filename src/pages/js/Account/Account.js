<<<<<<< HEAD
import React, {Component, useEffect, useState} from 'react';
=======
import React, {Component, useEffect, useState} from 'react'

>>>>>>> parent of 955509f (Account.JS_get_post_changes 16-11-21 16:36pm)
import TopNav from '../TopNav'
import '../../styles/Account/Account.css'
import AccountPostData from './POST.js';
import  AccountGetData from './GET.js';

<<<<<<< HEAD

class AccountPostData extends React.Component {
    render() {
        return
            <div> hello there</div>;
    }
}


<ion-item classname="container">
    <div className="boxWrapper">

=======
function Account(props) {
    useEffect(() => {authenticationGet()}, []);
    const [currentUser, setCurrentUer] = useState(DF[0])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const axios = require("axios")

    const authenticationGet = ( ) => {
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
    }




    // const axiosInstance = axios.create({
    //     baseURL: 'https://test-api-cwp.vp-company.nl/api/',
    //     method: 'GET',
    //     timeout: 1000,
    //     headers: {
    //         'Authorization': localStorage.getItem('access_token') ? "JWT " + localStorage.getItem('access_token') : null,
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         'accept': 'application/x-www-form-urlencoded'
    //     }
    // });
    // axiosInstance.interceptors.response.use(
    //     response => response,
    //     error => {
    //         const originalRequest = error.config;
    //
    //         // Prevent infinite loops
    //         if (error.response.status === 401 && originalRequest.url === 'https://test-api-cwp.vp-company.nl/api/'+'token/refresh/') {
    //             window.location.href = '/account/';
    //             return Promise.reject(error);
    //         }
    //
    //         if (error.response.data.code === "token_not_valid" &&
    //             error.response.status === 401 &&
    //             error.response.statusText === "Unauthorized")
    //         {
    //             const refreshToken = localStorage.getItem('refresh_token');
    //
    //             if (refreshToken){
    //                 const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
    //
    //                 // exp date in token is expressed in seconds, while now() returns milliseconds:
    //                 const now = Math.ceil(Date.now() / 1000);
    //                 console.log(tokenParts.exp);
    //
    //                 if (tokenParts.exp > now) {
    //                     return axiosInstance
    //                         .post('/token/refresh/', {refresh: refreshToken})
    //                         .then((response) => {
    //
    //                             localStorage.setItem('access_token', response.data.access);
    //                             localStorage.setItem('refresh_token', response.data.refresh);
    //
    //                             axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
    //                             originalRequest.headers['Authorization'] = "JWT " + response.data.access;
    //
    //                             return axiosInstance(originalRequest);
    //                         })
    //                         .catch(err => {
    //                             console.log(err)
    //                         });
    //                 }else{
    //                     console.log("Refresh token is expired", tokenParts.exp, now);
    //                     window.location.href = '/client/';
    //                 }
    //             }else{
    //                 console.log("Refresh token not available.")
    //                 window.location.href = '/client/';
    //             }
    //         }
    //
    //
    //         // specific error handling done elsewhere
    //         return Promise.reject(error);
    //     }
    // );
    //
    // (async () => {
    //     axios.interceptors.request.use(
    //         function (req) {
    //             req.time = { startTime: new Date() };
    //             return req;
    //         },
    //         (err) => {
    //             return Promise.reject(err);
    //         }
    //     );
    //
    //     axios.interceptors.response.use(
    //         function (res) {
    //             res.config.time.endTime = new Date();
    //             res.duration =
    //                 res.config.time.endTime - res.config.time.startTime;
    //             return res;
    //         },
    //         (err) => {
    //             return Promise.reject(err);
    //         }
    //     );

    // axios
    //     .get("http://localhost:8100/account")
    //     .then((res) => {
    //         console.log(res.duration)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // })();
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
>>>>>>> parent of 955509f (Account.JS_get_post_changes 16-11-21 16:36pm)

    </div>
</ion-item>


<<<<<<< HEAD
=======
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
>>>>>>> parent of 955509f (Account.JS_get_post_changes 16-11-21 16:36pm)
