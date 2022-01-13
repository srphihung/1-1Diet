import IUser from "../types/user.type";
import React, {Component} from "react";
import UserService from "../services/user.service"
import '../pages/styles/Profile/Styles.css'
import {Redirect} from "react-router-dom";
import {
    IonContent,
    IonSlides,
    IonSlide,
    IonItem,
    IonCol,
    IonRow,
    IonGrid
} from "@ionic/react";
import maleLength from "../images/maleLength.png";
import OrangeFrame from "../images/OrangeFrame.png";
import ChartStatsWeightComponent from "./chartStatsWeight.component";
import ChartStatsBMIComponent from "./chartStatsBMI.component";
import DynTableComponent from "./dynTable.component";
import VariableWeightMomentsComponent from "./variableWeightMoments.component"
import DynamicTableComponent from "./dynTable.component";
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

                    <IonSlides pager>
                        <IonSlide>
                            <div className="aboutContainer">
                                    <h2 id="startWeight">
                                        Je Gewicht
                                        </h2>
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
                                <DynamicTableComponent/>
                            </div>
                        </IonSlide>
                    </IonSlides>
            </IonContent>
        )
    }
}
