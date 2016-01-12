'use strict';

!function(document) {
  var links = [].slice.call(document.querySelectorAll('a'));

  links.forEach(function(link) {
    console.log(link);
  });

}(document);
