import React, {Component} from 'react';
import '../pages/styles/Charts/ChartsWeight/Styles.css'
import {IonAvatar, IonContent, IonIcon, IonImg, IonSlides, IonSlide, IonItem} from "@ionic/react";
import ReactDOM from 'react-dom';
import {VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryStack, VictoryTheme} from 'victory';
import IUser from "../types/user.type";
import UserService from "../services/user.service";
import {Redirect} from "react-router-dom";
import AboutImg2 from "../images/aboutimg2.svg";
type Props = {};

type State = {
    redirect: string | null,
    userReady: boolean,
    userContent: IUser & any
}

export default class VariableWeightMomentsComponent extends Component<Props, State> {
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
            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    style={{
                        data: { stroke: "#D5599D" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    data={[
                        { x: 1, y: userContent.startWeight },
                        { x: 2, y: 80 },
                        { x: 3, y: 76 },
                    ]}
                />
            </VictoryChart>
        )
    }
}



