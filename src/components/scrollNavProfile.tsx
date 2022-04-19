import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {
    IonContent,
    IonItem,
    IonCol,
    IonRow,
    IonGrid,
    IonButton,
    IonAvatar,
    IonIcon
} from "@ionic/react";
import UserService from "../services/user.service";
import '../pages/styles/Profile/Styles.css';
import IUser from "../types/user.type";
import { scaleOutline, resizeOutline, alertCircleOutline, settingsOutline, chevronForwardOutline, person } from 'ionicons/icons'
import WM from "../Data/WM.json";
// Components
import WeightChartComponent from "./WeightChartComponent";
import BMIChartComponent from "./BMIChartComponent";
import BodyChartComponent from "./BodyChartComponent";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

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

                <div className="chartContainer">
                    <Swiper>
                        <SwiperSlide>
                            <WeightChartComponent/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BMIChartComponent/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <BodyChartComponent/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                <div className="consulentContainer">
                    <h2>Mijn consulent</h2>
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

            </IonContent>
            
        )
    }
}
