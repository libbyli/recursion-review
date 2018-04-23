// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var passedArray = [];
  function checkNode(node) {
    if (node.classList !== undefined) {
      if (node.classList.contains(className)) {
        passedArray.push(node); 
      }
      if (node.childNodes.length !== 0) {
        node.childNodes.forEach(function(child) {
          checkNode(child);
        });
      }
    }
  }
  checkNode(document.body);
  return passedArray;
};
