import {getApi} from './../classes/Repository';
import {removeCookie} from './../classes/Api';

const template = `<a>Wyloguj</a>`;

class Logout extends HTMLLIElement
{
    constructor() {
        super();
        this.innerHTML = template;
        this.subscribers = [];
        this.subscribe = (subscriber) => {
            this.subscribers.push(subscriber);
        }
  
        this.notifyAll = (event) => {
            console.info(event, 'event logout component');
            this.subscribers.forEach(subscriber => {
                subscriber.notify({event: event})
            });
        }
    }

    connectedCallback() {
        this.querySelector('a').addEventListener('click', e => {
            e.preventDefault();
            getApi().logout().then(result => {
                console.info(result);
                console.info(!result.success, 'negate loggout result');
                if (!result.success) {
                    return;
                }
                console.info('before notificaton after logged out');
                this.notifyAll('loggedOut');
            });
        })
    }
}

customElements.define("logout-component", Logout, { extends: "li" });
export default Logout;
