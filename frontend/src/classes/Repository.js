import KeyWords from "./KeyWords";
import Api from './Api';
import Connector from './Connector';
import Users from './Users'
let keywords = null;
let api = null;
let users = null;
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

export {getKeyWords, getApi, getUsersList};