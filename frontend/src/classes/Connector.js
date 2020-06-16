import axios, {AxiosRequestConfig} from 'axios';

class Connector {
    async post(uri, payload) {
        try {
            const response = await axios.post(Connector.url + uri, payload);
            return {success: response.status < 300, data: response.data};
        } catch (e) {   
            console.error(e.message);
            return {success: false, data: {}};
        }
    }

    async get(uri) {
        try {
            const response = await axios.get(Connector.url + uri);
            return {success: response.status < 300, data: response.data};
        }catch (e) {   
            console.error(e.message);
            return {success: false, data: {}};
        }
    }    
    
    async delete(uri, payload) {
        try {
            const response = await axios.delete(Connector.url + uri, {data: payload});
            return {success: response.status < 300, data: response.data};
        } catch (e) {
            console.error(e.message);
            return {success: false, data: {}};  
        }
    }
}

Connector.keywords = 'keywords';
Connector.register = 'user';
Connector.login = 'users/login';
Connector.logout = 'users/logout';
Connector.url = "http://127.0.0.1/"
export default Connector;