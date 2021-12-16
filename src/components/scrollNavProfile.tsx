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
    IonGrid
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
                                    <IonCol offset="26">
                                        <p>90</p>
                                        <p>Huidig Gewicht</p>
                                    </IonCol>
                                    <IonCol offset="50">
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
                                        <IonCol offset="26">
                                            <p>27,8</p>
                                            <p>Huidig BMI</p>
                                        </IonCol>
                                        <IonCol offset="50">
                                            <p>{userContent.targetBMI}</p>
                                            <p>Doel BMI</p>
                                        </IonCol>

                                    </IonRow>
                                </IonGrid>
                            </div>
                        </IonSlide>

                        <IonSlide>
                            <div className="aboutContainer">
                                <p id="userHeight">
                                    <p >Je lengte</p>
                                    {userContent.lengthInCm} CM</p>
                            <img src={OrangeFrame} id="frameImg"></img>
                                <img src={maleLength} id="maleImg"></img>
                            </div>
                        </IonSlide>
                    </IonSlides>
            </IonContent>
        )
    }
}
