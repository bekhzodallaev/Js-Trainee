const originalAlert = window.alert;
const originalConfirm = window.confirm;
const originalPrompt = window.prompt;

window.alert = function (...args) {
  return originalConfirm.apply(window, args);
};

window.confirm = function (...args) {
  return originalPrompt.apply(window, args);
};

window.prompt = function (...args) {
  return originalAlert.apply(window, args);
};

alert('Hello');
confirm('What is your name?');
prompt('Are you sure? ');
