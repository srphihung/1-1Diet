import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {IonAvatar, IonButton, IonCol, IonContent, IonIcon, IonImg, IonItem, IonModal} from "@ionic/react";
import {resizeOutline} from "ionicons/icons";
import IUser from "../types/user.type";
import {Redirect} from "react-router-dom";
import UserService from "../services/user.service"





export default props => {
    return (
        <Menu id="route">
            <IonIcon icon={resizeOutline} className="iconProfile"></IonIcon>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/home.component">
                Bestellen
            </a>
            <a className="menu-item" href="/pizzas">
                Mijn bestellingen
            </a>
            <a className="menu-item" href="/desserts">
                Mijn afspraken
            </a>
            <a className="menu-item" href="/desserts">
                Mijn documenten
            </a>
            <a className="menu-item" href="/desserts">
                Mijn gegevens
            </a>
            <a className="menu-item" href="/desserts">
                Uitloggen
            </a>
            <IonItem id="consulentContainer">

                <p> Dick Test beheerder consulent</p>

            </IonItem>

        </Menu>
    );
};
