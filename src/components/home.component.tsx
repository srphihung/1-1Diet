import React, { Component } from "react";
import UserService from "../services/user.service";
import TopNav from "../pages/js/TopNav";
import {IonButton, IonCard, IonContent, IonIcon, IonLabel} from "@ionic/react";
import {Link} from "react-router-dom";
import '../pages/styles/Global.css';
import {
    appsOutline,
    bookOutline, informationOutline,
    newspaperOutline,
    nutritionOutline,
    peopleOutline,
    scaleOutline,
    trophyOutline
} from "ionicons/icons";

type Props = {};

type State = {
    content: string;
}

export default class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (
        <IonContent>
            <TopNav />
            <div className="Home">
                <div className="homeContent">
                    <div className="sliderHeader">
                        <IonLabel className="HomeHeader">Acties</IonLabel>
                    </div>
                    <div className="actionBtns">
                        <Link to="/bmi"><IonCard className="actionSlideBtn"><IonIcon icon={scaleOutline} className="icon"></IonIcon><div className="actionBottom"><p>Mijn BMI</p></div></IonCard></Link>
                        <Link to="/searchConsulents"><IonCard className="actionSlideBtn"><IonIcon icon={peopleOutline} className="icon"></IonIcon><div className="actionBottom"><p>Consulent zoeken</p></div></IonCard></Link>
                        <Link to="/voortgang"><IonCard className="actionSlideBtn"><IonIcon icon={trophyOutline} className="icon"></IonIcon><div className="actionBottom"><p>Mijn voortgang</p></div></IonCard></Link>
                        <Link to="/experience"><IonCard className="actionSlideBtn"><IonIcon icon={bookOutline} className="icon"></IonIcon><div className="actionBottom"><p>Ervaringen</p></div></IonCard></Link>
                    </div>
                    <h2>Informatie</h2>
                    <div className="infoBtns">
                        <Link to="/news"><div className="infoBtn">
                            <IonButton color="none" className="iconBckgrnd"><IonIcon icon={newspaperOutline} className="bigIcon"></IonIcon></IonButton>
                            <div className="textBckGrnd">
                                <h3>Nieuws</h3>
                                <p>Blijf up to date over de laatste nieuwtjes</p>
                            </div>
                        </div></Link>
                        <Link to="/dietinfo"><div className="infoBtn">
                            <IonButton color="none" className="iconBckgrnd"><IonIcon icon={nutritionOutline} className="bigIcon"></IonIcon></IonButton>
                            <div className="textBckGrnd">
                                <h3>Het dieet</h3>
                                <p>Waar ons dieet voor staat</p>
                            </div>
                        </div></Link>
                        <Link to="/aboutApp"><div className="infoBtn">
                            <IonButton color="none" className="iconBckgrnd"><IonIcon icon={appsOutline} className="bigIcon"></IonIcon></IonButton>
                            <div className="textBckGrnd">
                                <h3>Onze app</h3>
                                <p>Updates en functionaliteiten</p>
                            </div>
                        </div></Link>
                        <Link to="/aboutus"><div className="infoBtn">
                            <IonButton color="none" className="iconBckgrnd"><IonIcon icon={informationOutline} className="bigIcon"></IonIcon></IonButton>
                            <div className="textBckGrnd">
                                <h3>Over ons</h3>
                                <p>Een gezonde levensstijl als missie</p>
                            </div>
                        </div></Link>
                    </div>
                </div>
            </div>
        </IonContent>
        );
    }
}