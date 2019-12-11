// import config from "./config";
import KeyWords from "./KeyWords";
let keywords = null;
function getKeyWords() {
    if (!keywords) {
        keywords = new KeyWords();
    }
    return keywords;

}

export default getKeyWords;