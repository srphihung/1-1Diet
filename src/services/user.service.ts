import axios from 'axios';
import authHeader from './auth-header';



const API_URL = 'https://test-api-cwp.vp-company.nl/api/client/accountinformation';


//headers : {
//   'Content-Type' : 'application/json',
//   'Accept' : 'application/json',
//   'Authorization' : 'Bearer <token_here>'
// }


class UserService {
    getPublicContent() {
        return axios.get(API_URL, { headers: authHeader() });
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL + 'mod', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }

}

export default new UserService();
