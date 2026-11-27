(function () {
  'use strict';

  var button = document.getElementById('cta-button');
  var contact = document.getElementById('contact');

  if (!button || !contact) {
    return;
  }

  button.addEventListener('click', function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    contact.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    contact.focus({ preventScroll: true });
  });
})();
