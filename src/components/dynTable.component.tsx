import React, {Component, useState} from 'react';
import {VictoryBar, VictoryStack} from 'victory';
import IUser from "../types/user.type";
import UserService from "../services/user.service";
import {IonRow, IonSlide, IonGrid, IonCol, IonTitle, IonText} from "@ionic/react";
type Props = {};

type State = {
    redirect: string | null,
    userReady: boolean,
    userContent: IUser & any
}

export default class DynamicTableComponent extends Component<Props, State> {
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
                <IonRow className="header-row">

                    <IonCol>
                        <IonText>
                            Gewicht
                        </IonText>
                    </IonCol>

                    <IonCol>
                        <IonText>
                            Verschil
                        </IonText>
                    </IonCol>

                    <IonCol>
                        <IonText>
                            BMI
                        </IonText>
                    </IonCol>
                </IonRow>



        )
    }
}



