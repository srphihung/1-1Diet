import React, {Component, useState} from "react";
import {Redirect} from "react-router-dom";
import IUser from "../types/user.type";
import '../pages/styles/Account/Account.css'
import UserService from "../services/user.service"
import TopNav from "../pages/js/TopNav";
import {IonAvatar, IonButton, IonCol, IonContent, IonIcon, IonImg, IonModal} from "@ionic/react";
import {alertCircleOutline, chevronForwardOutline, resizeOutline, scaleOutline, settingsOutline} from "ionicons/icons";
import Logo from "../images/logodiet.svg";
import {response} from "express";

type Props = {};

type State = {
    redirect: string | null,
    userReady: boolean,
    userContent: IUser & any
}
export default class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            userContent: {access_token: ""}
        };
    }

    componentDidMount() {
 UserService.getPublicContent().then(
     response => {
         this.setState( {
             userContent: response.data
         })
     }
 );
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        // const [showModal, setShowModal] = useState(false);
        const {userContent} = this.state;
        console.log(UserService.getUserBoard())



        return (
        <IonContent>
            <TopNav/>
            <div className="accountPageContent">

                <button className="settingsBtn">
                    <IonIcon icon={settingsOutline} className="iconProfile">
                    </IonIcon>
                </button>

                <IonAvatar className="profileImg">
                    <IonImg src={userContent.firstName}/>
                </IonAvatar>

                <p>Welkom {userContent.cardName} {userContent.lastName} </p>


                <div className="statContainer">


                    <div className="heightContainer">
                        <div className="blueborder">
                            <IonIcon icon={resizeOutline} className="iconProfile"></IonIcon>
                        </div><p>{userContent.lengthInCm} Cm</p>
                    </div>


                    <div className="weightContainer">
                        <div className="blueborder">
                            <IonIcon icon={scaleOutline} className="iconProfile"></IonIcon>
                        </div>
                        {/*<IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)} swipe-to-close={true}>*/}
                        {/*    <div className="modal-dialog modal-dialog-scrollable WeightModal">*/}
                        {/*        <div className="navigationInfo">*/}
                        {/*            <img className="logo" src={Logo} alt={'1:1 Diet logo'}/>*/}
                        {/*        </div>*/}
                        {/*        <h2>Gewichten:</h2>*/}
                        {/*        <IonCol className="weightDetails">*/}
                        {/*            <p><strong>Start Gewicht:</strong> {userContent.startWeight}</p>*/}
                        {/*            <p><strong>Start BMI:</strong> {userContent.startBMI}</p>*/}
                        {/*            <p><strong>Start Middel:</strong> {userContent.startWaistSize}</p>*/}
                        {/*            <p><strong>Doel Gewicht:</strong> {userContent.targetWeight}</p>*/}
                        {/*            <p><strong>Doel BMI:</strong> {userContent.targetBMI}</p>*/}
                        {/*            <p><strong>Doel Middel:</strong> {userContent.targetWaistSize}</p>*/}
                        {/*            /!*<p><strong>Laat Vet Zien:</strong> {(userContent.clientWeightDetails.showFat === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat Middel Zien:</strong> {(userContent.clientWeightDetails.showWaist === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat Visceraal Vet Zien:</strong> {(userContent.clientWeightDetails.showVisceralFat === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat Vet Vrij Massa Zien:</strong> {(userContent.clientWeightDetails.showFatFreeMass === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat Gespierde Massa Zien:</strong> {(userContent.clientWeightDetails.showMuscularMass === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat Bot Massa Zien:</strong> {(userContent.clientWeightDetails.showBoneMass === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat BmrKc zien:</strong> {(userContent.clientWeightDetails.showBmrKc === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat BmrKj zien:</strong> {(userContent.clientWeightDetails.showBmrKj === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat Metabloische Leeftijd Zien:</strong> {(userContent.clientWeightDetails.showMetabolicAge === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*            /!*<p><strong>Laat Gezond Gewicht Zien:</strong> {(userContent.clientWeightDetails.showHealthyWeight === 'true') ? "Onwaar" :  "Waar" }</p>*!/*/}
                        {/*        </IonCol>*/}
                        {/*        <IonButton className="WeightModalCloseButton" color="none" onClick={() => setShowModal(false)}>Close Modal</IonButton>*/}
                        {/*    </div>*/}

                        {/*</IonModal>*/}
                        {/*<p>*/}
                        {/*    <IonButton className="WeightModalButton" onClick={() => setShowModal(true)} color="none">Gewicht</IonButton>*/}
                        {/*</p>*/}
                    </div>

                </div>

                <div className="consulentContainer">
                    <h3>Aangesloten bij</h3>

                    {(userContent.consultantFullName) ?
                        <div className="consulentShrtct">
                            <div className="consulentContent">
                                <p>{userContent.consultantFullName}</p>
                            </div>
                            <IonIcon icon={chevronForwardOutline} className="iconConsulent"></IonIcon>
                        </div>
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
                    }



                </div>
            </div>
        </IonContent>
        );
    };
}
