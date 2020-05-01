class KeyWords {
  constructor(api) {
    this.api = api;
    this.list = [];
    //this.list = this.api.getUserWordsList();
  }

  add(word) {
    if (this.list.find(kw => kw === word)) return;
    this.list.push(word);
    // this.api.addWordToList(list);
  }

  delete(word) {
    if (!this.list.find(kw => kw === word)) return;
    this.list = this.list.filter(kw => kw !== word);
    // this.api.deleteWordFromList(word);
  }
}

export default KeyWords;
