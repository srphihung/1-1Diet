import React from "react";
import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonButtons,
    IonMenuButton,
    IonIcon,
} from "@ionic/react";
import { menuController } from "@ionic/core";
import { menuOutline } from "ionicons/icons";
import '../pages/styles/SideMenu/Style.css'
const OffSideMenu: React.FC = () =>
{
    const onClickHandler = () =>
    {
        menuController.open()
    }

    return (
        <React.Fragment>
            <IonMenu menuId="first" contentId="menuContent">
                <IonHeader translucent>
                    <IonToolbar color="primary">
                        <IonTitle>
                            <IonIcon slot="start" icon={menuOutline}
                                onClick={() => onClickHandler()}
                                     size="large"
                            ></IonIcon>
                        </IonTitle>
                        <IonButtons slot="start">
                            <IonMenuButton className="burgerButton" autoHide={false}
                                           onClick={() => onClickHandler()}>
                            </IonMenuButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                        <IonItem>Menu Item</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </React.Fragment>

    );
};

export default OffSideMenu;
