import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import IUser from "../types/user.type";
import '../pages/styles/Account/Account.css'
import '../pages/styles/Sidebar/Sidebar.css'
import UserService from "../services/user.service"
import TopNav from "../pages/js/TopNav";
import {IonAvatar, IonButton, IonCol, IonContent, IonIcon, IonImg, IonModal} from "@ionic/react";
import {alertCircleOutline, chevronForwardOutline, resizeOutline, scaleOutline, settingsOutline} from "ionicons/icons";
import {UserModal} from "./userModal.component";
import Sidebar from './Sidebar';

type Propss = {};

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
        const userContent = UserService.getPublicContent;
        userContent().then(
            response => {
                this.setState( {
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
            <TopNav/>

            <div className="accountPageContent">

                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

                <IonAvatar className="profileImg">
                    <IonImg src={userContent.urlClientPhoto}/>
                </IonAvatar>
                <p>Welkom, {userContent.fullName}</p>

                <div className="statContainer">
                    <div className="heightContainer">
                        <div className="blueborder">
                            <IonIcon icon={resizeOutline} className="iconProfile"></IonIcon>
                        </div><p>{userContent.lengthInCm} Cm</p>
                    </div>




                        <UserModal>

                        </UserModal>
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
