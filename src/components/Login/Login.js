
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import QueryString from "querystring";
import App from '../App/App'

async function loginUser(credentials) {
    return axios.post('https://test-api-cwp.vp-company.nl/connect/token', QueryString.stringify({
        username: "rcwtest1@1op1dieet.nl",
        password: "Onzin&21&",
        grant_type: "password",
    }), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "accept": "application/x-www-form-urlencoded",
        }
    }).then(response => {
        console.log(response.data)
    }).catch(err => console.log(err.response))
}



export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);


    }

    return(
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

// import {IonButton, IonContent, IonInput, IonItem} from '@ionic/react';
// import Logo from "../../../images/logodiet.svg";
// import '../../styles/Login/Login.css'
// import React, {useState} from "react";
//
// function Login() {
//     const [username] = useState("")
//     const [password] = useState("")
//
//     return (
//         <IonContent>
//             <div>
//                 <div className="navigationInfo">
//                     <img className="logo" src={Logo} alt={'1:1 Diet logo'}/>
//                 </div>
//                 <form action={"./home"}>
//                     <div className="loginContainer">
//                         <h2>Login</h2>
//                         <div className="userInput" id="loginUsername">
//                             <IonItem no-lines>
//                                 <IonInput name={"username"} value={username} placeholder="Gebruikersnaam"
//                                           required={"true"}/>
//                             </IonItem>
//                         </div>
//
//                         <div className="userInput" id="loginPassword">
//                             <IonItem no-lines>
//                                 <IonInput name={"password"} type="password" value={password} minlength="8"
//                                           placeholder="Wachtwoord" required={"true"}/>
//                             </IonItem>
//                         </div>
//
//                         <IonButton className="userInput" id="loginSubmit" type="submit" color="none">
//                             Login
//                         </IonButton>
//                     </div>
//                 </form>
//             </div>
//         </IonContent>
//     )
// }
// export default Login
