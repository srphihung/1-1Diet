import React, {useEffect} from "react";
import QueryString from "querystring";

export default AccountPostData
function AccountPostData (props) {
    useEffect(() => {authenticationPost()}, []);

const axios = require ("axios")

    let authenticationPost = ( ) => {
        axios.post('https://test-api-cwp.vp-company.nl/connect/token', QueryString.stringify({
            username: "rcwtest1@1op1dieet.nl",
            password: "Onzin&21&",
            grant_type: "password",
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "accept": "application/x-www-form-urlencoded",
                "Authorization": "Bearer" + "TOKEN"
            }
        }).then(response => {
            console.log(response.data)
            console.log('userresponse: ' + response.data.access_token);
        }).catch(err => console.log(err.response))
    }
    class AccountPostData extends React.Component {
        render() {
            return {authenticationPost};
        }
    }
}


