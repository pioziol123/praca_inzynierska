class Users {
    constructor(api, commentsList) {
        this.api = api;
        this.list = [];
        this.subscribers = [];
        this.commentsList = commentsList;
        this.load();
      }
    
      add(user) {
        if (this.list.find(lu => lu === user)) return;
        this.list.push(user);
        this.commentsList.blockForAuthor(user);
        return this.api.addUserToList(user);
      }
    
      delete(user) {
        if (!this.list.find(lu => lu === user)) return;
        this.list = this.list.filter(lu => lu !== user);
        this.commentsList.unblockForAuthor(user);
        this.list.forEach(lu => this.commentsList.blockForAuthor(lu));
        return this.api.deleteUserFromList(user);
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
        this.api.getBlockedUserList()
          .then(userlist => {
            this.list = userlist;
            this.notifyAll('loaded');
            this.list.forEach(word => this.commentsList.blockForAuthor(word));
          });
      }
}

export default Users;