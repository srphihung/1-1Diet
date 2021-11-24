import React, {Component} from "react";
import { RouteComponentProps } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {IonButton, IonContent, IonInput, IonItem} from '@ionic/react';
import * as Yup from "yup";
import '../pages/styles/Login/Login.css'
import AuthService from "../services/auth.service";
import Logo from "../images/logodiet.svg";

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
            username: Yup.string().required("This field is required!"),
            password: Yup.string().required("This field is required!"),
        });
    }

    handleLogin(formValue: { username: string; password: string; }) {
        const { username, password } = formValue;

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
        const { loading, message } = this.state;

        const initialValues = {
            username: "",
            password: "",
        };

        return (
            <IonContent>
            <div className="col-md-12">
                <div className="navigationInfo">
                    <img className="logo" src={Logo} alt={'1:1 Diet logo'}/>
                </div>
                <div className="card card-container">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={this.validationSchema}
                        onSubmit={this.handleLogin}
                    >
                        <Form>
                            <div className="loginContainer">
                                <h2>Login</h2>
                                <div className="form-group userInput" id="loginUsername">
                                    <IonItem no-lines>
                                    <Field name="username" type="text" className="form-control" placeholder="username"/>
                                    <ErrorMessage name="username" component="div" className="alert alert-danger"/>
                                    </IonItem>
                                </div>

                                <div className="form-group userInput" id="loginPassword">
                                    <IonItem no-lines>
                                        <Field name="password" type="password" className="form-control" placeholder="password"/>
                                        <ErrorMessage name="password" component="div" className="alert alert-danger"/>
                                    </IonItem>
                                </div>

                                <div className="form-group userInput">
                                    <IonButton className="userInput" id="loginSubmit" type="submit" color="none" disabled={loading}>
                                        {loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>Login</span>
                                    </IonButton>

                                </div>

                                {message && (
                                    <div className="form-group userInput">
                                        <div className="alert alert-danger" role="alert">
                                            {message}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
            </IonContent>
        );
    }
}