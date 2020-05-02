import axios from 'axios';

class Connector {
    async post(uri, payload) {
        const response = await axios.post(Connector.url + uri, payload);
        console.info(response);
        return {success: response.status < 300, data: response.data};
    }

    async get(uri, payload) {
        
    }      
}

Connector.register = 'user';
Connector.url = "http://127.0.0.1/"
export default Connector;