import React, {useEffect} from "react";
import QueryString from "querystring";

export default AccountGetData
function AccountGetData (props) {
    useEffect(() => {authenticationGet()}, []);
    const axios = require ("axios")
    let authenticationGet = () => {
        axios.get('https://test-api-cwp.vp-company.nl/api/client/accountinformation').then(response =>{
            console.log(response);

        }).then(response => {
            console.log(response.data)
            console.log('userresponse: ' + response.data.access_token);
        }).catch(err => console.log(err.response))
    }
}


