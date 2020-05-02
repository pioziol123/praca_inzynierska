class CommentsList {
    constructor() {
        this.list = [];
    }


    append(comment) {
        this.list.push(comment);
    }

    blockForKeyword(keyword) {
        this.list
            .filter(comment => !comment.blocked)
            .forEach(comment => comment.checkKeyword(keyword))
    }

    unblockForKeyword(keyword) {
        this.list
            .filter(comment => comment.blocked)
            .forEach(comment => comment.unblockForKeyword(keyword))
    }
}

CommentsList.blocked_message = 'Ten komentarz został zablokowany';
    

class Comment {
    constructor(element, author) {
        this.element = element;
        this.blocked = false;
        this.oryginalContent = element.innerHTML;
        this.author = author;
    }

    checkKeyword(keyword) {
        if (!this.blocked && this.oryginalContent.includes(keyword)) {
            this.blocked = true;
            this.element.innerHTML  = CommentsList.blocked_message;
        }
    }
    
    checkAuthor(author) {
        if (!this.blocked && this.author === author) {
            this.blocked = true;
            this.element.innerHTML  = CommentsList.blocked_message;
        } 
    }

    change() {
        this.element.innerHTML =
            this.blocked 
            ? this.oryginalContent 
            : CommentsList.blocked_message; 
        this.blocked = !this.blocked;
    }

    unblockForKeyword(keyword) {
        if (this.blocked && this.oryginalContent.includes(keyword)) {
            this.blocked = false;
            this.element.innerHTML  = this.oryginalContent;
        }
    }
}

export {CommentsList, Comment};