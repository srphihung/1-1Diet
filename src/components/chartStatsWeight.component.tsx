import React, {Component} from 'react';
import '../pages/styles/Charts/ChartsWeight/Styles.css'
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

export default class ChartStatsWeightComponent extends Component<Props, State> {
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
            <VictoryStack
                domainPadding={{x: 15 }}
            >
                <VictoryBar
                    cornerRadius={10}
                    colorScale={['#2E2B6C']}
                    barWidth={120}


                    data={[
                        { experiment: "Start gewicht", expected: 6.00, actual: userContent.startWeight},
                        { experiment: "Huidig Gewicht", expected: 6.00, actual: 90},
                        { experiment: "Streef gewicht", expected: 6.00, actual: userContent.targetWeight}

                        ]} x="experiment" y={(d) => (d.actual / d.expected) * 6}
                />

            </VictoryStack>
        )
    }
}



