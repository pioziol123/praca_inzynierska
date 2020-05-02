import Connector from './Connector'

class Api {
    constructor(connector) {
        this.connector = connector;
    }

    async register(username, password, reapeatPassword) {
        const body = {username: username, password: password, repeat_password: reapeatPassword}
        return await this.connector.post(Connector.register, body);
    }
}

export default Api;