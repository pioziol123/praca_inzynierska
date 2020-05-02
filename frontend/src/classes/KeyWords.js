class KeyWords {
  constructor(api, commentsList) {
    this.api = api;
    this.list = [];
    this.commentsList = commentsList;
    //this.list = this.api.getUserWordsList();
  }

  add(word) {
    if (this.list.find(kw => kw === word)) return;
    this.list.push(word);
    this.commentsList.blockForKeyword(word);
    // this.api.addWordToList(list);
  }

  delete(word) {
    if (!this.list.find(kw => kw === word)) return;
    this.list = this.list.filter(kw => kw !== word);
    this.commentsList.unblockForKeyword(word);
    this.list.forEach(kw => this.commentsList.blockForKeyword(kw));
    // this.api.deleteWordFromList(word);
  }
}

export default KeyWords;
