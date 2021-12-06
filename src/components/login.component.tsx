import React, {Component} from "react";
import {RouteComponentProps} from "react-router-dom";
import {Formik, Field, Form, ErrorMessage} from "formik";
import {IonButton, IonContent, IonItem, IonRow, IonGrid, IonCol, IonIcon} from '@ionic/react';
import * as Yup from "yup";
import '../pages/styles/Login/Login.css'
import AuthService from "../services/auth.service";
import Logo from "../images/Logo-1_1-Diet.svg";

interface RouterProps {
    history: string;
}

type Props = RouteComponentProps<RouterProps>;

type State = {
    username: string,
    password: string,
    loading: boolean,
    message: string
};


export default class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    validationSchema() {
        return Yup.object().shape({
            username: Yup.string().required("Verplicht!"),
            password: Yup.string().required("Verplicht!"),
        });
    }

    handleLogin(formValue: { username: string; password: string; }) {
        const {username, password} = formValue;

        this.setState({
            message: "",
            loading: true
        });

        AuthService.login(username, password).then(
            () => {
                this.props.history.push("/profile");
                window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        );
    }

    render() {
        const {loading, message} = this.state;

        const initialValues = {
            username: "",
            password: "",
        };

        return (
            <IonContent className="container">
                <img className="logo" src={Logo} alt={'1:1 Diet logo'}/>
                <div className="cardContainer">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={this.validationSchema}
                        onSubmit={this.handleLogin}>
                        <Form>
                            <IonContent className="loginContainer">
                                <IonGrid>
                                    <IonRow justify-content-center>
                                        <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                                            <div text-center>
                                                <h2>Gebruikersnaam</h2>
                                            </div>
                                            <div>
                                                <IonItem no-lines>
                                                    <Field name="username" type="text" className="form-control"
                                                           placeholder="Gebruikersnaam"/>
                                                    <ErrorMessage name="username" component="div"
                                                                  className="alert alert-danger"/>
                                                </IonItem>

                                                <IonItem no-lines id="itemInput" >
                                                    <Field name="password" type="password" className="form-control"
                                                           placeholder="Wachtwoord"/>
                                                    <ErrorMessage name="password" component="div"
                                                                  className="alert alert-danger"/>
                                                </IonItem>
                                                <div className="form-group userInput">
                                                    <IonButton className="userInput" id="loginSubmit" type="submit" color="none"
                                                               disabled={loading}>
                                                        {loading && (
                                                            <span className="spinner-border spinner-border-sm"></span>
                                                        )}
                                                        <span id="logoText">Inloggen</span>
                                                    </IonButton>

                                                    <IonButton className="userInput" id="forgotPass" type="submit" color="none">
                                                        <span id="forgotPassText"> Wachtwoord vergeten?</span>
                                                    </IonButton>
                                                </div>
                                                <div id="informUser">
                                                    <span id="informUserText">Cliënten ontvangen logingegevens via zijn of haar consulent </span>
                                                </div>

                                                {message && (
                                                    <div className="form-group userInput">
                                                        <div className="alert alert-danger" role="alert">
                                                            {message}
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonContent>
                        </Form>
                    </Formik>
                </div>
            </IonContent>
        );
    }
}
