import loadHomeScreen from './components/home.js';
import loadSignUpScreen from './components/signup.js';

document.addEventListener('DOMContentLoaded', () => {
  // Load the Sign Up screen initially
  //loadSignUpScreen();

  // the code below should be removed when its done.
  const userData = { name: 'Paulo Faulstich', privateKey: '0xABC123...', balance: '0' };   
  loadHomeScreen(userData);
});