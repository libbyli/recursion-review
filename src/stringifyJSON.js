// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var array = [];
    obj.forEach(function(element) {
      array.push(stringifyJSON(element));     
    });
    return '[' + array.join(',') + ']'; 
  }
  if (typeof obj === 'object') {
    var objArray = [];
    for (var key in obj) {
      if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
        continue;
      }
      objArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + objArray.join(',') + '}';
  }
  return '' + obj;
};
