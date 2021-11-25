export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
        user = JSON.parse(userStr);

    console.log(user.accessToken)
    console.log(user)
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}
