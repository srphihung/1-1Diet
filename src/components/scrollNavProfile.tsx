import IUser from "../types/user.type";
import React, {Component} from "react";
import UserService from "../services/user.service"
import '../pages/styles/Profile/Styles.css'
import {Redirect} from "react-router-dom";
import {IonAvatar, IonContent, IonIcon, IonImg, IonSlides, IonSlide} from "@ionic/react";
import {alertCircleOutline, chevronForwardOutline, resizeOutline} from "ionicons/icons";
import TopNav from "../pages/js/TopNav";
import AboutImg1 from "../images/aboutimg.svg";
import AboutImg2 from "../images/aboutimg2.svg";
import AboutImg3 from "../images/aboutimg3.svg";
import Stappenplan from "../images/stappenplan.svg";

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
                    <IonSlides>
                        <IonSlide>
                            <div className="aboutContent">
                                <img src={AboutImg1} className="aboutImg"></img>
                                <h1>People</h1>
                                <p>Niemand hoeft het alleen te doen. Je eigen consulent is er om jou te helpen en te
                                    motiveren, zowel tijdens als na het dieet</p>
                            </div>
                        </IonSlide>
                        <IonSlide>
                            <div className="aboutContent">
                                <img src={AboutImg2} className="aboutImg"></img>
                                <h1>Products</h1>
                                <p>Iedereen heeft recht op smakelijk eten. De maaltijden van The 1 : 1 Diet zijn lekker
                                    en er is voor ieder wat wils.</p>
                            </div>
                        </IonSlide>

                    </IonSlides>
                    <a className="borderBottom"></a>
            </IonContent>
        )
    }
}
