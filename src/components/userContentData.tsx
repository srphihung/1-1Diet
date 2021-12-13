import IUser from "../types/user.type";
import React, {Component} from "react";
import UserService from "../services/user.service";
import {Redirect} from "react-router-dom";
import {IonContent, IonItem, IonSlide, IonSlides} from "@ionic/react";
import ChartStatsWeight from "./chartStatsWeight.component";
import AboutImg2 from "../images/aboutimg2.svg";

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
    }
}
