// navbar mobile
const hamburger = document.querySelector('#navbar .hamburger_menu');
const menuMobile = document.querySelector('#navbar .menu_mobile');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  if (!menuOpen) {
    hamburger.classList.add('open');
    menuMobile.classList.add('active');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    menuMobile.classList.remove('active');
    menuOpen = false;
  }
});

const menuLink = document.querySelectorAll('#navbar .menu_mobile ul li a');

menuLink.forEach((e) => {
  e.addEventListener('click', () => {
    menuMobile.classList.toggle('active');
    hamburger.classList.toggle('open');
  });
});
// navbar mobile end

// contact
const nameInput = document.querySelector('form #name');
const email = document.querySelector('form #email');
const message = document.querySelector('form #message');
const success = document.querySelector('form .center #success');
const errorNodes = document.querySelectorAll('form .error');

// validate data
function validateForm() {
  clearMessage();
  let errorFlag = false;
  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = 'Name cannot be empty!';
    nameInput.classList.add('error-border');
    errorFlag = true;
  }
  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = 'Invalid email address!';
    email.classList.add('error-border');
    errorFlag = true;
  }
  if (message.value.length < 1) {
    errorNodes[2].innerText = 'Please enter message!';
    message.classList.add('error-border');
    errorFlag = true;
  }
  if (!errorFlag) {
    success.innerText = 'success!';
  }
}
// clear error / succces message
function clearMessage() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = '';
  }
  success.innerText = '';
  nameInput.classList.remove('error-border');
  email.classList.remove('error-border');
  message.classList.remove('error-border');
}
// check if email is valid
function emailIsValid() {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
// contact end
