import { IonButton, IonContent, IonInput, IonItem } from '@ionic/react';
import Logo from "../../../images/logodiet.svg";
import '../../styles/Login/Login.css'
import React, {useState} from "react";

function Login() {
    const [username] = useState("")
    const [password] = useState("")

    return (
        <IonContent>
            <div>
                <div className="navigationInfo">
                    <img className="logo" src={Logo}  alt={'1:1 Diet logo'}/>
                </div>
                <form action={"./home"}>
                <div className="loginContainer">
                    <h2>Login</h2>
                    <div className="loginUsername">
                        <IonItem>
                            <IonInput name={"username"} value={username} placeholder="Gebruikersnaam" required={"true"}/>
                        </IonItem>
                    </div>
                    <div className="loginPassword">
                        <IonItem>
                            <IonInput name={"password"} type="password" value={password} minlength="8" placeholder="Wachtwoord" required={"true"}/>
                        </IonItem>
                    </div>
                    <div className="loginSubmit">
                            <IonButton type="submit" color="none">
                                Login
                            </IonButton>
                    </div>
                </div>
                </form>
            </div>
        </IonContent>
    )
}

export default Login