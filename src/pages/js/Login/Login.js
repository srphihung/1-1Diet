import {
    IonAvatar,
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonIcon,
    IonInput,
    IonItem,
    IonText
} from '@ionic/react';
import Logo from "../../../images/logodiet.svg";
import '../../styles/Login/Login.css'
import React, {useState} from "react";
import { Link } from 'react-router-dom'

function Login() {
    const [username] = useState("")
    const [password] = useState("")

    return (
        <IonContent>
            <div>
                <div className="navigationInfo">
                    <img className="logo" src={Logo}  alt={'1:1 Diet logo'}/>
                </div>
                <div className="loginContainer">
                    <h2>Login</h2>
                    <div className="loginUsername">
                        <IonItem>
                            <IonInput value={username} placeholder="Gebruikersnaam"/>
                        </IonItem>
                    </div>
                    <div className="loginPassword">
                        <IonItem>
                            <IonInput value={password} placeholder="Wachtwoord"/>
                        </IonItem>
                    </div>
                    <Link to={"./home"}>
                    <IonButton className="loginSubmit" color="none">
                        Login
                    </IonButton>
                    </Link>
                </div>

            </div>
        </IonContent>
    )
}

export default Login