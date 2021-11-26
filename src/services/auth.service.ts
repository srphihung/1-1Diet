import axios from "axios";
import QueryString from "querystring";

const API_URL = "https://test-api-cwp.vp-company.nl/connect/token";

class AuthService {
    login(username: string, password: string) {
        return axios
            .post(API_URL , QueryString.stringify({
                username,
                password,
                grant_type: "password",
            }),{
                headers: {"Content-Type": "application/x-www-form-urlencoded",}
            })
            .then(response => {
                // if (response.data.access_token) {
                    sessionStorage.setItem("user", JSON.stringify(response.data));
                // }
                return response.data;
            });
    }

    logout() {
        sessionStorage.removeItem("user");
    }

    register(username: string,  password: string) {
        return axios.post(API_URL + "signup", {
            username,
            password
        });
    }

    getCurrentUser() {
        const userStr = sessionStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

    }
}

export default new AuthService();
