import axios, {AxiosRequestConfig} from 'axios';

class Connector {
    async post(uri, payload) {
        try {
            const response = await axios.post(Connector.url + uri, payload);
            console.debug("post", response.data, response.status, uri, payload);
            return {success: response.status < 300, data: response.data};
        } catch (e) {   
            console.error(e.message);
            return {success: false, data: {}};
        }
    }

    async get(uri) {
        try {
            const response = await axios.get(Connector.url + uri);
            console.debug("get", response.data, response.status, uri);
            return {success: response.status < 300, data: response.data};
        }catch (e) {   
            console.error(e.message);
            return {success: false, data: {}};
        }
    }    
    
    async delete(uri, payload) {
        try {
            const response = await axios.delete(Connector.url + uri, {data: payload});
            console.debug("delete", response.data, response.status, uri, payload);
            return {success: response.status < 300, data: response.data};
        } catch (e) {
            console.error(e.message);
            return {success: false, data: {}};  
        }
    }
}

Connector.keywords = 'keywords';
Connector.users = 'blocks';
Connector.register = 'user';
Connector.login = 'users/login';
Connector.logout = 'users/logout';
Connector.comments_word = 'comments_word';
Connector.comments_user = 'comments_user';
Connector.url = "http://127.0.0.1/"
export default Connector;