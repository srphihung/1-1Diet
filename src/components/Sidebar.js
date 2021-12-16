import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {IonIcon, IonItem} from "@ionic/react";
import {resizeOutline} from "ionicons/icons";

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
            <a className="menu-item" href="/calendar">
                Mijn afspraken
            </a>
            <a className="menu-item" href="/recipes">
                Mijn Recepten
            </a>
            <a className="menu-item" href="/profile">
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


// <IonRow>
//     <IonCol>ion-col</IonCol>
//     <IonCol>ion-col</IonCol>
//     <IonCol>ion-col</IonCol>
//     <IonCol>ion-col</IonCol>
// </IonRow>
//
// <IonRow>
//     <IonCol size="6">ion-col size="6"</IonCol>
//     <IonCol>ion-col</IonCol>
//     <IonCol>ion-col</IonCol>
// </IonRow>
// //
// <IonRow>
//     <IonCol size="3">ion-col size="3"</IonCol>
//     <IonCol>ion-col</IonCol>
//     <IonCol size="3">ion-col size="3"</IonCol>
// </IonRow>
