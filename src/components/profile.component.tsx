import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import IUser from "../types/user.type";
import '../pages/styles/Account/Account.css'
import '../pages/styles/Sidebar/Sidebar.css'
import UserService from "../services/user.service"
import TopNav from "../pages/js/TopNav";
import {IonContent} from "@ionic/react";
import Sidebar from './Sidebar';
import ScrollNav from "./scrollNavProfile"

type Props = {};
type State = {
    redirect: string | null,
    userReady: boolean,
    userContent: IUser & any
}

export default class User extends Component<Props, State> {
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
            <ScrollNav/>
            </div>
        </IonContent>
        );
    };
}
