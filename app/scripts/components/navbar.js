import loadHomeScreen from './home.js';
import loadWalletScreen from './wallet.js';

export default function setupNavbar(userData) {
    const screenContainer = document.getElementById('screen-container');
    if (!screenContainer) {
        console.error('Error: #screen-container not found in the DOM.');
        return;
    }

    const navbar = document.getElementById('navbar');
    if (!navbar) {
        console.error('Error: #navbar not found in the DOM.');
        return;
    }

    navbar.innerHTML = `
        <div class="nav-item" id="home-nav">
            <img src="./assets/icons/home.png" alt="Discover">
            <span>Discover</span>
        </div>
        <div class="nav-item" id="merchants-nav">
            <img src="./assets/icons/merchants.png" alt="Merchants">
            <span>Merchants</span>
        </div>
        <div class="nav-item" id="wallet-nav">
            <img src="./assets/icons/wallet.png" alt="Wallet">
            <span>Wallet</span>
        </div>
    `;

    // Event listeners for navbar items
    document.getElementById('home-nav').addEventListener('click', () => {
        loadHomeScreen(userData);
        setupNavbar(userData); // Ensure navbar remains functional
    });

    document.getElementById('wallet-nav').addEventListener('click', () => {
        console.log("CLICLINK IN THE WALLET ITEM")
        loadWalletScreen(userData);
        setupNavbar(userData); // Ensure navbar remains functional
    });

    // Future: Add merchants-nav functionality if needed
}