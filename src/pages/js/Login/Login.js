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
    class loginForm extends React.Component {
        constructor() {
            super();
            this.state = {
                input: {},
                errors: {}
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(login) {
            let input = this.state.input;
            input[login.target.name] = login.target.value;

            this.setState({
                input
            });
        }

        handleSubmit(login) {
            login.preventDefault();

            if (this.validate()) {
                console.log(this.state);

                let input = {};
                input["username"] = "";
                input["password"] = "";
                this.setState({input: input});

                alert('Access Granted');
            }
        }

        validate() {
            let input = this.state.input;
            let errors = {};
            let isValid = true;

            if (!input["username"]) {
                isValid = false;
                errors["username"] = "Please enter your name.";
            }
            if (!input["password"]) {
                isValid = false;
                errors["password"] = "Please enter your password.";
            }

            if (typeof input["password"] !== "undefined") {

                if (input["password"] < 8) {
                    isValid = false;
                    errors["password"] = "Passwords to short.";
                }
            }

            this.setState({
                errors: errors
            });

            return isValid;
        }
    }

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
                            <IonInput value={username} placeholder="Gebruikersnaam" required/>
                        </IonItem>
                    </div>
                    <div className="loginPassword">
                        <IonItem>
                            <IonInput type="password" value={password} minlength="8" placeholder="Wachtwoord" required/>
                        </IonItem>
                    </div>
                    <div className="loginSubmit">
                        <Link to="./home">
                            <IonButton type="submit" color="none">
                                Login
                            </IonButton>
                        </Link>
                    </div>
                </div>
                </form>
            </div>
        </IonContent>
    )
}

export default Login