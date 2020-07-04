import { getKeyWords } from './Repository';

class Detecteds {
    constructor(api) {
      this.api = api;
      this.list = ["dupa", "od"];
      this.subscribers = [];
    }
  
    delete(detected) {
      if (!this.list.find(dw => dw === detected)) return;
      this.list = this.list.filter(dw => dw !== detected);
      getKeyWords().add(detected).then(() =>  {
        this.notifyAll('detection-matched');
      });
    }
  
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    notifyAll(event) {
      this.subscribers.forEach(subscriber => {
        subscriber.notify({event: event})
      });
    }

    notify() {
        this.load();
    }
    load() {
      this.api.getDetections()
        .then(wordList => {
          this.list = wordList;
          this.notifyAll('loaded');
        });
    }
    
  }
  
  export default Detecteds;
