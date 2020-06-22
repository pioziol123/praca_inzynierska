import {getApi} from './../classes/Repository';

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
            this.subscribers.forEach(subscriber => {
                subscriber.notify({event: event})
            });
        }
    }

    connectedCallback() {
        this.querySelector('a').addEventListener('click', e => {
            e.preventDefault();
            getApi().logout().then(result => {
                if (!result.success) {
                    return;
                }
                this.notifyAll('loggedOut');
            });
        })
    }
}

customElements.define("logout-component", Logout, { extends: "li" });
export default Logout;
