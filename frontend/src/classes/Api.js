import Connector from './Connector'

const cookieName = 'userId';

function removeCookie() {
    document.cookie = `${cookieName}=filter-cookie-hash; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
}


function setCookie(cookie) {
    const date = (new Date(Date.now() + 1000 * 60 * 60 * 24)).toUTCString();
    document.cookie = `${cookieName}=${cookie}; expires=${date};`;
}

function getCookie() {
    const cookie = document.cookie.split(';')
        .find(cookie => cookie.includes(cookieName));
    if (!cookie || cookie.length === 0) return '';
    return cookie.split('=').pop();
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
        return await this.connector.post(Connector.login, body);
    }

    async logout() {
        return await this.connector.post(Connector.logout, null);
    }

    async isLogged() {
        const result =  await this.connector.get(Connector.keywords, null);
        return result.success && !result.data.Response; 
        
    }

    async getUserWordsList() {
        return (await this.connector.get(Connector.keywords, null)).data.map(word => word.word)
    }

    async addWordToList(word) {
        return (await this.connector.post(Connector.keywords, {keyword: word})).success;
    }

    async deleteWordFromList(word) {
        return (await this.connector.delete(Connector.keywords, {keyword: word})).success;
    } 
}

export default Api;
export {getCookie, removeCookie}