import {Comment} from '../classes/CommentsList';

function parse(list) {
    list.tag = document.querySelectorAll('.tag')[2].textContent;
    [...document.querySelectorAll('#itemsStream .dC') || []]
        .filter(element => element.querySelector('.author .showProfileSummary'))
        .forEach(function (element) {
            const author = element.querySelector('.author .showProfileSummary').textContent;
            const contentElement = element.querySelector('.text');
            const comment = new Comment(contentElement, author);
            list.append(comment);
            addPicker(contentElement, comment);
    });
}

function addPicker(element, comment) {
    const color = element.style.color;
    element.parentNode.addEventListener("mouseover", function() {
        element.style.color = "red";
    });
    element.parentNode.addEventListener("mouseout", function() {
        element.style.color = color;
    });
    element.parentNode.addEventListener("click", function() {
      comment.change();
    });
  };

  export default parse;