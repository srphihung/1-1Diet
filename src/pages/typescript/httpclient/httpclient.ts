import axios from "axios";
import QueryString from "querystring";
import {getConfig, getURL, postParam, postURL} from "../../js/Data/Data";


// export function getAuthentication ( TOKEN: any ) {
//     const getConfig = {'Authorization': {"Bearer": TOKEN}};
//     axios.get(getURL, )
//         .then(get => {
//             console.log(get.data)
//         }).catch(err => console.log(err.response))
// }

// Send a POST request
export function postAuth () {
    axios.post(postURL, QueryString.stringify(postParam))
        .then(function (response) {
            const TOKEN = response.data.access_token;
            sessionStorage.setItem("accesstoken", TOKEN)
        })
        .catch(err => console.log(err.response));
}

export const axiosInstance = axios.create({
    baseURL: getURL,
    method: 'GET',
    timeout: 1000,
    headers: getConfig,
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;
        console.log(originalRequest)

        // Prevent infinite loops
        if (error.response.status === 401 && originalRequest.url === 'https://test-api-cwp.vp-company.nl/api/'+'token/refresh/') {
            window.location.href = '/account/';
            console.log(error.data)
            return Promise.reject(error);
        }

        if (error.response.data.code === "token_not_valid" &&
            error.response.status === 401 &&
            error.response.statusText === "Unauthorized")
        {
            const refreshToken = sessionStorage.getItem('refresh_token');

            if (refreshToken){
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                // exp date in token is expressed in seconds, while now() returns milliseconds:
                const now = Math.ceil(Date.now() / 1000);
                console.log(tokenParts.exp);

                if (tokenParts.exp > now) {
                    return axiosInstance
                        .post('/token/refresh/', {refresh: refreshToken})
                        .then((response) => {

                            sessionStorage.setItem('accesstoken', response.data.access);
                            sessionStorage.setItem('refresh_token', response.data.refresh);

                            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                            originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                            return axiosInstance(originalRequest);
                        })
                        .catch(err => {
                            console.log(err)
                        });
                }else{
                    console.log("Refresh token is expired", tokenParts.exp, now);
                    window.location.href = '/client/';
                }
            }else{
                console.log("Refresh token not available.")
                window.location.href = '/client/';
            }
        }

        // specific error handling done elsewhere
        return Promise.reject(error);
    }
);