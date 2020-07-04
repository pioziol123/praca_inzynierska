import KeyWords from "./KeyWords";
import Api from './Api';
import Connector from './Connector';
import Users from './Users';
import Detecteds from './Detecteds';

let keywords = null;
let api = null;
let users = null;
let detecteds = null;

function getKeyWords(commentList) {
    if (!keywords) {
        keywords = new KeyWords(getApi(), commentList);
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

function getUsersList(commentList) {
    if (!users) {
        users = new Users(getApi(), commentList);
    }
    return users;
}

function getDetected() {
    if (!detecteds) {
        detecteds = new Detecteds(getApi());
    }
    return detecteds;
}

export {getKeyWords, getApi, getUsersList, getDetected};