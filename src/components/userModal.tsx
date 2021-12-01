import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';

export const userModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonContent>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <p>This is modal content</p>
                <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Show Modal</IonButton>
        </IonContent>
    );
};
