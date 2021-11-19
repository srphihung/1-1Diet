import React, {useEffect} from "react";
import QueryString from "querystring";
import axios from 'axios';

function POST(props) {
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

export default POST


