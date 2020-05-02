import Connector from './Connector'

const cookieName = 'filter-account-cookie';

function setCookie(cookie) {
    const date = (new Date(Date.now() + 1000 * 60 * 60 * 24)).toUTCString();
    document.cookie = `${cookieName}=${cookie}; expires=${date};`;
}

function getCookie(cookie) {

}

class Api {
    constructor(connector) {
        this.connector = connector;
    }

    async register(username, password, reapeatPassword) {
        const body = {username: username, password: password, repeat_password: reapeatPassword}
        return await this.connector.post(Connector.register, body);
    }

    async login(username, password) {
        const body = {username: username, password: password}
        const result =  await this.connector.post(Connector.login, body);
        console.info(result);
        setCookie(result.data.auth_token);
        return result;    
    }
}

export default Api;