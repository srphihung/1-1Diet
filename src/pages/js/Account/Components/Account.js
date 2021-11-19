import React, {Component} from 'react';
import '../../../styles/Account/Account.css'
import POST from "./POST.js"
import GET from "./GET.js"

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Account: new POST()};
    }

    render() {
        return (
            <div>
                <h2>hello there</h2>
            </div>
        )
    }
}



export default Account;

