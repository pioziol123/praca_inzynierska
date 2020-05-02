// import config from "./config";
import KeyWords from "./KeyWords";
import Api from './Api';
import Connector from './Connector';
let keywords = null;
let api = null;
function getKeyWords(list) {
    if (!keywords) {
        keywords = new KeyWords(null, list);
    }
    return keywords;
}

function getApi() {
    if (!api) {
        const connector = new Connector();
        api = new Api(connector);
    }
    return api;
}

export {getKeyWords, getApi};