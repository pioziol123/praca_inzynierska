import {Comment} from '../classes/CommentsList';

function parse(list) {
    console.info(list.append);
    [...document.querySelectorAll('#itemsStream .dC')].forEach(function (element) {
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