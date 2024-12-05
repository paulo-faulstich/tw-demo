import loadHomeScreen from './components/home.js';
import loadSignUpScreen from './components/signup.js';
import setupNavbar from './components/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    const userData = {
        name: 'Paulo Faulstich',
        balance: 0,
        location: 'Santa Barbara, CA',
        spots: [
            { name: 'Twilight Spirits', image: './assets/images/spots/spot1.png' },
            { name: 'Morning Brew', image: './assets/images/spots/spot2.png' },
            { name: 'Tranquil SPA', image: './assets/images/spots/spot3.png' },
            { name: 'Elegance Gem', image: './assets/images/spots/spot4.png' },
            { name: 'Pulse Fit', image: './assets/images/spots/spot5.png' },
        ],
        offers: [
            { title: 'Save 20% Off Your First Purchase', details: 'Cuso\'s Bikes', distance: '4054.74', image: './assets/images/offers/offer1.png' },
            { title: '10% Coins Back', details: 'First Order', distance: '5197.62', image: './assets/images/offers/offer2.png' },
            { title: '10% Coins Back', details: 'First Order', distance: '5197.62', image: './assets/images/offers/offer2.png' },
            { title: '10% Coins Back', details: 'First Order', distance: '5197.62', image: './assets/images/offers/offer2.png' },
        ],
        merchants: [
            { name: 'Cuso\'s Bikes', image: './assets/images/merchants/merchant1.png' },
            { name: 'Monarca Wings', image: './assets/images/merchants/merchant2.png' },
            { name: 'Freshy Bakery', image: './assets/images/merchants/merchant3.png' },
            { name: 'Wanderlux', image: './assets/images/merchants/merchant4.png' },
        ]
    };

    // Load Home screen by default
    loadHomeScreen(userData);

    // Initialize Navbar after ensuring DOM is loaded
    const navbar = document.getElementById('navbar');
    if (navbar) {
        setupNavbar(userData);
    } else {
        console.error('Navbar element not found in the DOM.');
    }
});

/*
document.addEventListener('DOMContentLoaded', () => {
  // Load the Sign Up screen initially
  //loadSignUpScreen();

  // the code below should be removed when its done.
  const userData = { name: 'Paulo Faulstich', privateKey: '0xABC123...', balance: '0' };   
  loadHomeScreen(userData);
});
*/
