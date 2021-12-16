import IUser from "../types/user.type";
import React, {Component} from "react";
import UserService from "../services/user.service"
import '../pages/styles/Profile/Styles.css'
import {Redirect} from "react-router-dom";
import {
    IonAvatar,
    IonContent,
    IonIcon,
    IonImg,
    IonSlides,
    IonSlide,
    IonItem,
    IonCol,
    IonRow,
    IonGrid,
    IonHeader
} from "@ionic/react";
import {alertCircleOutline, chevronForwardOutline, resizeOutline} from "ionicons/icons";
import TopNav from "../pages/js/TopNav";
import AboutImg1 from "../images/aboutimg.svg";
import AboutImg2 from "../images/aboutimg2.svg";
import maleLength from "../images/maleLength.png";
import OrangeFrame from "../images/OrangeFrame.png"
import Sidebar from './Sidebar';
import ChartStatsWeightComponent from "./chartStatsWeight.component";
import ChartStatsBMIComponent from "./chartStatsBMI.component";
import VariableWeightMomentsComponent from "./variableWeightMoments.component"

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

    componentDidMount() {
        const userContent = UserService.getPublicContent;
        userContent().then(
            response => {
                this.setState({
                    userContent: response.data
                })
            }
        );
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

                <IonItem className="userContainer">
                    <h1 id="userName">{userContent.firstName}'s Home</h1>
                </IonItem>
                <IonSlides className="slideContainer">
                    <IonSlide>
                        <div className="aboutContainer">
                            <h2 id="startBMI">
                                Je Gewicht
                            </h2>
                            <ChartStatsWeightComponent/>
                            <IonGrid>
                                <IonRow className="BMITextContainer">
                                    <IonCol size="4">{userContent.startBMI}</IonCol>
                                    <IonCol>{userContent.targetBMI} </IonCol>
                                    <IonCol size="4">{userContent.startBMI}</IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </IonSlide>

                    <IonSlide>
                        <div className="aboutContainer">
                            <h2 id="startBMI">
                                Je Gewicht
                            </h2>
                            <ChartStatsBMIComponent/>
                            <IonGrid>
                                <IonRow className="BMITextContainer">
                                    <IonCol size="4">{userContent.startBMI}</IonCol>
                                    <IonCol>{userContent.targetBMI} </IonCol>
                                    <IonCol size="4">{userContent.startBMI}</IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </IonSlide>

                    <IonSlide>
                        <div className="aboutContainer">
                            <p id="userHeight">
                                <p>Je lengte</p>
                                {userContent.lengthInCm} CM
                            </p>
                            <img src={OrangeFrame} id="frameImg"></img>
                            <img src={maleLength} id="maleImg"></img>
                        </div>
                    </IonSlide>

                    <IonSlide>
                        <div className="aboutContainer">
                            <p id="Spline">
                                <p>Laatste weegmomenten</p>
                                {userContent.lengthInCm} CM
                            </p>
                            <VariableWeightMomentsComponent/>
                            <p> Sinds {userContent.firstWeightmomentDate} t/m {userContent.lastWeightmomentDate} ben je
                                in totaal 28kg afgevallen</p>
                        </div>
                    </IonSlide>

                    <IonSlide>
                        <div className="row header">
                            <div className="col">Datum</div>

                        </div>
                        <div className="row header">
                            <div className="col">Gewicht</div>
                        </div>
                    </IonSlide>
                </IonSlides>
            </IonContent>
        );
    }
}
