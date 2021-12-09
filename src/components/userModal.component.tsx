import React, {useState} from 'react';
import {IonButton, IonCol, IonContent, IonIcon, IonImg, IonModal} from "@ionic/react";
import '../pages/styles/Modal/userModal.css'
import IUser from "../types/user.type";
import {scaleOutline} from "ionicons/icons";

export const UserModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    type Props = {};

    type State = {
        redirect: string | null,
        userReady: boolean,
        userContent: IUser & any
    }

    return (
        <div className="weightContainer">
            <IonModal id="userModal" isOpen={showModal} swipeToClose={true}>
                <IonCol className="weightDetails">
                            {/*<p><strong>Start Gewicht: {userContent.lengthInCm} </strong></p>*/}
                    <p><strong>Start BMI:</strong></p>
                    <p><strong>Start Middel:</strong></p>
                    <p><strong>Doel Gewicht:</strong></p>
                    <p><strong>Doel BMI:</strong></p>
                    <p><strong>Doel Middel:</strong></p>
                    <p><strong>Laat Vet Zien:</strong></p>
                    <p><strong>Laat Middel Zien:</strong></p>
                    <p><strong>Laat Visceraal Vet Zien:</strong></p>
                    <p><strong>Laat Vet Vrij Massa Zien:</strong></p>
                    <p><strong>Laat Gespierde Massa Zien:</strong></p>
                    <p><strong>Laat Bot Massa Zien:</strong></p>
                    <p><strong>Laat BmrKc zien:</strong></p>
                    <p><strong>Laat BmrKj zien:</strong></p>
                    <p><strong>Laat Metabloische Leeftijd Zien:</strong></p>
                    <p><strong>Laat Gezond Gewicht Zien:</strong></p>
                </IonCol>
                <IonButton className="closeWeightModalButton" onClick={() => setShowModal(false)}>
                    Close Modal
                </IonButton>
            </IonModal>
            <IonButton className="openWeightModalButton" onClick={() => setShowModal(true)} color="none">
                <div className="weightContainer">
                    <div className="blueborder">
                        <IonIcon icon={scaleOutline} className="iconProfile"></IonIcon>
                    </div><p> kg</p>
                </div>
            </IonButton>
        </div>
    );
};

export default UserModal;

