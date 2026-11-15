(function () {
  'use strict';

  function feedback(form, message) {
    var output = form.querySelector('[data-form-feedback]');
    if (output) output.textContent = message;
  }

  document.querySelectorAll('form[data-quarters]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var phraseField = form.querySelector('#qPass');
      var phrase = phraseField ? phraseField.value.trim().toLowerCase() : '';
      var isEasterEgg = phrase === 'blackbeard';

      form.reset();
      feedback(form, isEasterEgg
        ? 'Pirate joke unlocked! This is a local Easter egg, not a login. Nothing was verified, sent, or saved.'
        : 'Demo only: no berth was verified. Nothing was sent or saved.');
    });
  });

  document.querySelectorAll('form[data-signal]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      form.reset();
      feedback(form, 'Demo only: the raven did not fly. Your message was not sent or saved.');
    });
  });
})();
