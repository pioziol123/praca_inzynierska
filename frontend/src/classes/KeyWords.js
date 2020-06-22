class KeyWords {
  constructor(api, commentsList) {
    this.api = api;
    this.list = [];
    this.subscribers = [];
    this.commentsList = commentsList;
    this.load();
  }

  add(word) {
    if (this.list.find(kw => kw === word)) return;
    this.list.push(word);
    this.commentsList.blockForKeyword(word);
    return this.api.addWordToList(word);
  }

  delete(word) {
    if (!this.list.find(kw => kw === word)) return;
    this.list = this.list.filter(kw => kw !== word);
    this.commentsList.unblockForKeyword(word);
    this.list.forEach(kw => this.commentsList.blockForKeyword(kw));
    return this.api.deleteWordFromList(word);
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifyAll(event) {
    this.subscribers.forEach(subscriber => {
      subscriber.notify({event: event})
    });
  }
  load() {
    this.api.getUserWordsList()
      .then(wordList => {
        this.list = wordList;
        this.notifyAll('loaded');
        this.list.forEach(word => this.commentsList.blockForKeyword(word));
      });
  }
  
}

export default KeyWords;
