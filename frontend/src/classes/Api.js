import Connector from './Connector'

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

    async addWordToList(word, tag) {
        return (await this.connector.post(Connector.keywords, {keyword: word, word_topic: tag})).success;
    }

    async deleteWordFromList(word) {
        return (await this.connector.delete(Connector.keywords, {keyword: word})).success;
    } 

    async addUserToList(user, tag) {
        return (await this.connector.post(Connector.users, {user_name: user, word_topic: tag})).success;
    }

    async deleteUserFromList(user) {
        return (await this.connector.delete(Connector.users, {blocked_user: user})).success;
    }

    async getBlockedUserList() {
        return (await this.connector.get(Connector.users, null)).data.Response.map(user => user.user_name);
    }

    async addCommentsWord(word) {
        return (await this.connector.post(Connector.comments_word, {keyword: word})).success;
    }

    async addCommentsUser(user) {
        return (await this.connector.post(Connector.comments_user, {blocked_user: user})).success;
    }

    async getDetections() {
        return (await this.connector.get(Connector))
    }
}

export default Api;