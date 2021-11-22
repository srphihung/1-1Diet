export const postURL = 'https://test-api-cwp.vp-company.nl/connect/token';
export const postParam ={
    username: "rcwtest1@1op1dieet.nl",
    password: "Onzin&21&",
    grant_type: "password",
};
export const postConfig = {'Content-Type': 'application/x-www-form-urlencoded',};
export const getURL = 'https://test-api-cwp.vp-company.nl/api/client/accountinformation';
export const getConfig = {
    'Authorization': {"Bearer": sessionStorage.getItem('accesstoken')}
};