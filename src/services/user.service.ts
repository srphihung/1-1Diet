import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://test-api-cwp.vp-company.nl/api/client/accountinformation';

class UserService {
    getPublicContent() {
        return axios.get(API_URL);
    }

    getUserBoard() {
        return axios.get(API_URL, { headers: authHeader() });
    }

    getModeratorBoard() {
        return axios.get(API_URL, { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL, { headers: authHeader() });
    }
}

export default new UserService();