const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const siteDir = path.join(__dirname, '..');
const formScript = fs.readFileSync(path.join(siteDir, 'forms.js'), 'utf8');

class FakeForm {
  constructor(kind) {
    this.kind = kind;
    this.listeners = {};
    this.passphrase = { value: '' };
    this.output = { textContent: '' };
    this.resetCount = 0;
  }

  addEventListener(name, listener) {
    this.listeners[name] = listener;
  }

  querySelector(selector) {
    if (selector === '#qPass') return this.passphrase;
    if (selector === '[data-form-feedback]') return this.output;
    return null;
  }

  reset() {
    this.resetCount += 1;
    this.passphrase.value = '';
  }

  submit() {
    let prevented = false;
    this.listeners.submit({ preventDefault() { prevented = true; } });
    return prevented;
  }
}

function loadHandlers(quartersForms = [], signalForms = []) {
  const document = {
    querySelectorAll(selector) {
      if (selector === 'form[data-quarters]') return quartersForms;
      if (selector === 'form[data-signal]') return signalForms;
      return [];
    },
  };
  vm.runInNewContext(formScript, { document });
}

test('ordinary quarters input never claims authentication or persistence', () => {
  const form = new FakeForm('quarters');
  loadHandlers([form]);
  form.passphrase.value = 'not-a-credential';

  assert.equal(form.submit(), true);
  assert.match(form.output.textContent, /Demo only/);
  assert.match(form.output.textContent, /no berth was verified/i);
  assert.match(form.output.textContent, /nothing was sent or saved/i);
  assert.equal(form.resetCount, 1);
  assert.equal(form.passphrase.value, '');
});

test('Blackbeard reveals only a local joke, never a login or berth', () => {
  const form = new FakeForm('quarters');
  loadHandlers([form]);
  form.passphrase.value = '  BLACKBEARD  ';

  assert.equal(form.submit(), true);
  assert.match(form.output.textContent, /local Easter egg, not a login/i);
  assert.match(form.output.textContent, /nothing was verified, sent, or saved/i);
  assert.equal(form.resetCount, 1);
});

test('untrusted passphrase text is not echoed into feedback', () => {
  const form = new FakeForm('quarters');
  loadHandlers([form]);
  form.passphrase.value = '<img src=x onerror=alert(1)>';

  form.submit();
  assert.doesNotMatch(form.output.textContent, /<img|onerror/i);
  assert.match(form.output.textContent, /nothing was sent or saved/i);
});

test('contact demo explicitly reports that no message was delivered or stored', () => {
  const form = new FakeForm('signal');
  loadHandlers([], [form]);

  assert.equal(form.submit(), true);
  assert.match(form.output.textContent, /the raven did not fly/i);
  assert.match(form.output.textContent, /message was not sent or saved/i);
  assert.equal(form.resetCount, 1);
});

test('generated page markup does not request real credentials or imply delivery', () => {
  const quarters = fs.readFileSync(path.join(siteDir, 'quarters.html'), 'utf8');
  const raven = fs.readFileSync(path.join(siteDir, 'raven.html'), 'utf8');
  const enlist = fs.readFileSync(path.join(siteDir, 'enlist.html'), 'utf8');

  assert.match(quarters, /fictional interactive demo/i);
  assert.match(quarters, /never enter a real password or student ID/i);
  assert.doesNotMatch(quarters, /type="password"|student id\)/i);
  assert.doesNotMatch(quarters, /remember me on this deck|official cadet registry|student portal|log in, sort/i);
  assert.match(quarters, /<script src="forms\.js"><\/script>/);
  assert.match(raven, /does not send or store messages/i);
  assert.match(formScript, /Your message was not sent or saved/i);
  assert.match(raven, /<script src="forms\.js"><\/script>/);
  assert.match(enlist, /does not send or save messages/i);
});
