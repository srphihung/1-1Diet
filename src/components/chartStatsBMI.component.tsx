import React, {Component} from 'react';
import {IonAvatar, IonContent, IonIcon, IonImg, IonSlides, IonSlide, IonItem} from "@ionic/react";
import ReactDOM from 'react-dom';
import {VictoryAxis, VictoryBar, VictoryChart, VictoryStack} from 'victory';
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

export default class ChartStatsBMIComponent extends Component<Props, State> {
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
        const {userContent} = this.state;

        return (
            <VictoryStack

                domainPadding={{x: 80 }}
                padding={{ top: 0, bottom: 0, right: 0, left: 0 }}

            >
                <VictoryBar

                    cornerRadius={10}
                    colorScale={['#D5599D']}
                    barWidth={120}


                    data={[
                        { experiment: "Start BMI", expected: 2.00, actual: userContent.startBMI},
                        { experiment: "Huidig BMI", expected: 2.00, actual: 27.8 },
                        { experiment: "Doel BMI", expected: 2.00, actual: userContent.targetBMI}

                        ]} x="experiment" y={(d) => (d.actual / d.expected) * 6}
                />

            </VictoryStack>
        )
    }
}



