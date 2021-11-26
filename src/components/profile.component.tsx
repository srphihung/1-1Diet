import {Component, Key, ReactChild, ReactFragment, ReactPortal, useState} from "react";
import {Redirect} from "react-router-dom";
import AuthService from "../services/auth.service";
import IUser from "../types/user.type";
import UserService from "../services/user.service"

type Props = {};

type State = {
    redirect: string | null,
    userReady: boolean,
    currentUser: IUser & { access_token: string }
}
export default class Profile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: {access_token: ""},

        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        const userContent = UserService.getPublicContent();
        console.log(userContent)
        console.log(currentUser)
        if (!currentUser) this.setState({redirect: "/home"});
        this.setState({currentUser: currentUser, userReady: true})
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const {currentUser} = this.state;
        console.log(currentUser)

        return (
            <div className="container">
                {(this.state.userReady) ?
                    <div>
                        <header className="jumbotron">
                            <h3>
                                <strong></strong> Profile
                            </h3>
                        </header>
                        <p>
                            <strong>Welkom, {currentUser.access_token}</strong>{" "}
                        </p>
                        <p>
                            <strong>Id:</strong>{" "}
                        </p>
                        <strong>Authorities:</strong>
                        <ul>

                        </ul>
                    </div> : null}
            </div>
        );
    };
}
