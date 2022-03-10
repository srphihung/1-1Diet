import IUser from "../types/user.type";
import React, {Component} from "react";
import UserService from "../services/user.service";
import '../pages/styles/Profile/Styles.css';
import {Redirect} from "react-router-dom";
import {
    IonContent,
    IonSlides,
    IonSlide,
    IonItem,
    IonCol,
    IonRow,
    IonGrid,
    IonButton,
    IonAvatar,
    IonIcon
} from "@ionic/react";
import { scaleOutline, resizeOutline, alertCircleOutline, settingsOutline, chevronForwardOutline, person } from 'ionicons/icons'
import maleLength from "../images/maleLength.png";
import OrangeFrame from "../images/OrangeFrame.png";
import ChartStatsWeightComponent from "./chartStatsWeight.component";
import ChartStatsBMIComponent from "./chartStatsBMI.component";
import VariableWeightMomentsComponent from "./variableWeightMoments.component"
import ProgressBarBMI from "./progressBar.component";
import SortableTable from "./sortableTable.component";
import WM from "../Data/WM.json";
type Props = {};

type State = {
    redirect: string | null,
    userReady: boolean,
    userContent: IUser & any
}

export default class ScrollNav extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            userContent: {access_token: ""}
        };
    }

    // de response data uit de storage word gehaald en in de parameter 'userContent' wordt gezet.
    componentDidMount() {
        const userContent = UserService.getPublicContent;
        userContent().then(
            response => {
                this.setState({
                    userContent: response.data
                })
            }
        );
            
        // redirect voor als er in de sessionStorage geen data staat.
        const getToken = sessionStorage.getItem("user");
        if (!userContent) this.setState({redirect: "/home"});
        if (!getToken) this.setState({redirect: "/login"});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const {userContent} = this.state;

        return (
            <IonContent>
                <div className="userContainer">
                <IonAvatar className="userAvatar ion-text-center">
                        <img src={userContent.urlClientPhoto}/>
                        <button className="settingsBtn"><IonIcon icon={settingsOutline} className="iconProfile"></IonIcon></button>
                </IonAvatar>
                </div>
                <div className="nameContainer">
                    <h1 id="userName" className="ion-text-center">{userContent.firstName}'s home</h1>
                </div>

                <div className="consulentContainer">
                    <h3>Aangesloten bij</h3>
                    {/* {currentUser.consulent.length === 1 ? ( */}
                        <div className="consulentShrtct">
                            <IonAvatar className="consulentAvatar">
                            <img src={userContent.urlClientPhoto} />
                                {/* <img src={currentUser.consulent[0].consulent_image} className="consulentProfileImg"></img> */}
                            </IonAvatar>
                            <div className="consulentContent">
                                <p>{userContent.cardName}</p>
                                {/* <p>{currentUser.consulent[0].consulent_adres}</p> */}
                            </div>
                            <IonIcon icon={chevronForwardOutline} className="iconConsulent"></IonIcon>
                        </div>
                    {/* ) : ( */}
                        {/* <div className="noConsulentWarning">
                            <div className="blueWarning">
                                <IonIcon icon={alertCircleOutline} className="iconProfile"></IonIcon>
                            </div>
                            <div className="noConsulentWarningContent">
                                <p>Het lijkt er op dat u nog niet bent aangesloten bij een van onze consulenten. Een 1:1 diet consulent kan je helpen bij het behouden van een gezond dieet</p>
                                <button className="searchConsulent">Consulent zoeken</button>
                            </div>
                        </div> */}
                    {/* )} */}
                </div>





                        
                {/* <IonItem lines="none" className="userContainer">
                    <IonAvatar className="userAvatar ion-text-center">
                        <img src="https://via.placeholder.com/150"/>
                        <IonButton className="settingsBtn"><IonIcon icon={settingsOutline} className="iconProfile"></IonIcon></IonButton>
                    </IonAvatar>
                </IonItem> */}

                {/* <IonItem lines="none" className="nameContainer">
                    <h1 id="userName" className="ion-text-center">{userContent.firstName}'s home</h1>
                    
                </IonItem> */}

                    {/* <IonSlides pager>
                        <IonSlide>
                            <div className="aboutContainer">
                                    <h2 id="startWeight">Je Gewicht</h2>
                                    <ChartStatsWeightComponent/>
                                <IonGrid>
                                <IonRow className="weightTextContainer" id="weightText">
                                    <IonCol >
                                        <p >{userContent.startWeight} kg</p>
                                        <p>Start Gewicht</p>
                                    </IonCol>
                                    <IonCol offset="23">
                                        <p>90 kg</p>
                                        <p>Huidig Gewicht</p>
                                    </IonCol>
                                    <IonCol offset="47">
                                        <p>{userContent.targetWeight} kg</p>
                                        <p>Streef Gewicht</p>
                                    </IonCol>
                                </IonRow>
                                </IonGrid>
                            </div>
                        </IonSlide>

                        <IonSlide>
                            <div className="aboutContainer">
                                <h2 id="startWeight">
                                    Je Gewicht
                                </h2>
                                <ChartStatsBMIComponent/>
                                <IonGrid>
                                    <IonRow className="weightTextContainer" id="weightText">
                                        <IonCol >
                                            <p >{userContent.startBMI}</p>
                                            <p>Start BMI</p>
                                        </IonCol>
                                        <IonCol offset="23">
                                            <p>27,8</p>
                                            <p>Huidig BMI</p>
                                        </IonCol>
                                        <IonCol offset="47">
                                            <p>{userContent.targetBMI}</p>
                                            <p>Doel BMI</p>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </div>
                        </IonSlide>

                        <IonSlide>
                            <div className="aboutContainer" >
                                <div id="userHeight">
                                    <p>Je lengte</p>
                                    <p>{userContent.lengthInCm} CM</p>
                                </div>
                                <img src={OrangeFrame} id="frameImg"></img>
                                <img src={maleLength} id="maleImg"></img>
                            </div>
                        </IonSlide>

                        <IonSlide>
                            <div className="aboutContainer">
                                <h2>Je Weegmomenten</h2>
                                <div>
                                    <ProgressBarBMI/>
                                </div>
                            </div>
                        </IonSlide>

                        <IonSlide>
                            <div className="aboutContainer">
                                <p id="Spline">
                                    <p>Laatste weegmomenten</p>
                                </p>
                                <VariableWeightMomentsComponent/>

                                <p> Sinds {userContent.firstWeightmomentDate} t/m {userContent.lastWeightmomentDate} ben je
                                    in totaal <strong>{userContent.startWeight + userContent.targetWeight}kg</strong> afgevallen</p>
                            </div>
                        </IonSlide>

                        <IonSlide>
                            <div className="aboutContainer">
                                <SortableTable WM={WM}/>
                            </div>
                        </IonSlide>
                    </IonSlides> */}

            </IonContent>
            
        )
    }
}
