// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  function renderArray(string) {
    var array = [];
    if (string[1] === ']') {
      return array;
    }
    var index = 1;
    while (index < string.length) {
      var element = '';
      while (string[index] !== ',' && index < string.length - 1) {
        element += string[index];
        index++;
      }
      array.push(parseJSON(element));
      index++;
    }
    return array;
  }
  function renderString(string) {
    return string.slice(1, string.length - 1);
  }
  if (json[0] === '[') {
    return renderArray(json);
  }
  if (json[0] === '"') {
    return renderString(json);
  }
};
