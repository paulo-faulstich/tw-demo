// Export the loadHomeScreen function

export default function loadHomeScreen(userData) {
    const screenContainer = document.getElementById('screen-container');

    screenContainer.innerHTML = `
        <div id="home-container">
            <header>
                <div class="user-info-container">
                    <img src="./assets/icons/avatar.png" alt="User Avatar" class="user-avatar-img" id="user-avatar">
                    <div class="user-info">
                        <p class="name">Good Evening, ${userData.name.split(' ')[0]}!</p>
                        <p class="location">${userData.location || "Santa Barbara, CA"}</p>
                    </div>
                </div>
                <div class="header-icons">
                    <img src="./assets/icons/search.png" alt="Search">
                    <img src="./assets/icons/bell.png" alt="Notifications">
                </div>
            </header>
            <main>
                <div class="carousel-container">
                    <!-- Spots You Viewed -->
                    <div class="carousel-section">
                        <h2>Spots You Viewed ⭐</h2>
                        <div class="carousel spots-carousel">
                            ${renderSpotsCarousel(userData.spots || [])}
                        </div>
                    </div>

                    <!-- Offers & Deals -->
                    <div class="carousel-section">
                        <h2>Offers & Deals <a href="#" class="view-all-link">View all</a></h2>
                        <div class="carousel offers-carousel">
                            ${renderOffersCarousel(userData.offers || [])}
                        </div>
                    </div>

                    <!-- Merchants Nearby -->
                    <div class="carousel-section">
                        <h2>Merchants Nearby <a href="#" class="view-all-link">View all</a></h2>
                        <div class="carousel merchants-carousel">
                            ${renderMerchantsCarousel(userData.merchants || [])}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    `;
}

// Render carousel items
function renderSpotsCarousel(spots) {
    return spots.map(spot => `
        <div class="carousel-item">
            <img src="${spot.image}" alt="${spot.name}">
            <p>${spot.name}</p>
        </div>
    `).join('');
}

function renderOffersCarousel(offers) {
    return offers.map(offer => `
        <div class="carousel-item offer-item">
            <img src="${offer.image}" alt="${offer.title}">
            <p class="offer-title">${offer.title}</p>
            <p class="offer-details">${offer.details}</p>
            <p class="offer-distance">${offer.distance} mi</p>
        </div>
    `).join('');
}

function renderMerchantsCarousel(merchants) {
    return merchants.map(merchant => `
        <div class="carousel-item merchant-item">
            <div class="merchant-label"></div>
            <img src="${merchant.image}" alt="${merchant.name}">
            <p>${merchant.name}</p>
        </div>
    `).join('');
}


/*
export default function loadHomeScreen(userData) {
    const app = document.getElementById('app');    
    const firstName = userData.name ? userData.name.split(' ')[0] : 'User';
    
    // Populate the home screen HTML
    app.innerHTML = `
    <div id="home-container">
    <header>
    <div class="user-info-container">
        <img src="./assets/icons/avatar.png" alt="User Avatar" class="user-avatar-img" id="user-avatar">
        <div class="user-info">        
            <p class="name">Good Evening, ${firstName || 'User'}!</p>  
            <p class="location">Santa Barbara, CA</p>
        </div>
    </div>
    <div class="header-icons">
        <img src="./assets/icons/search.png" alt="Search">
        <img src="./assets/icons/bell.png" alt="Notifications">
    </div>
</header>    
    <main>
        <div class="balance-container">
            <p>Total Balance</p>            
            <p class="balance">${userData.balance || 0} TW</p> 
        </div>
    </main>
    <footer>
        <div class="nav-item">
            <img src="./assets/icons/home.png" alt="Discover">
            <span>Discover</span>
        </div>
        <div class="nav-item">
            <img src="./assets/icons/merchants.png" alt="Merchants">
            <span>Merchants</span>
        </div>
        <div class="nav-item">
            <img src="./assets/icons/wallet.png" alt="Wallet">
            <span>Wallet</span>
        </div>
    </footer>
</div>
        <div id="wallet-modal" class="wallet-modal hidden">
    <div class="wallet-modal-content">
        <button id="close-modal" class="close-modal-btn">X</button>
        <div class="wallet-info">
            <h2>Wallet Info</h2>
            <p id="wallet-address">0x1234567890abcdef...</p>
            <button id="copy-address">Copy</button>
        </div>
        <div class="private-key">
            <h3>Private Key</h3>
            <p id="private-key">******</p>
            <button id="toggle-key-btn">👁️</button>
        </div>
    </div>
</div>
    `;
    
    setupModalHandlers(userData); // Initialize the modal
    setupNav(); // Reinitialize navigation
}
*/

// Handle Log Out button click
function setupLogOut() {
    // Add log out logic, e.g., clearing local storage
    const logOutButton = document.createElement('button');
    logOutButton.innerText = 'Log Out';
    logOutButton.addEventListener('click', () => {
        localStorage.clear();
        import('./signup.js').then(({ default: loadSignupScreen }) => {
            loadSignupScreen();
        });
    });

    const balanceContainer = document.querySelector('.balance-container');
    balanceContainer.appendChild(logOutButton);
}

// Navigation logic for footer tabs (example)
/*
function setupNavbar(userData) {
    const homeNav = document.getElementById('home-nav');
    const merchantsNav = document.getElementById('merchants-nav');
    const walletNav = document.getElementById('wallet-nav');

    homeNav.addEventListener('click', () => loadHomeScreen(userData));
    walletNav.addEventListener('click', () => loadWalletScreen(userData));
    
    // Add navigation for merchants if needed
}
*/

/*
function setupNav() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', () => {
            if (index === 2) {
                // Load Wallet Screen when the wallet nav item is clicked
                loadWalletScreen();
            } else {
                alert(`Navigating to tab ${index + 1}`);
            }
        });
    });
}
*/

/*
export default function loadWalletScreen(userData) {
    const screenContainer = document.getElementById('screen-container');

    screenContainer.innerHTML = `
        <div id="wallet-container">
            <div class="wallet-box">
                <img src="./assets/icons/token.png" alt="Twism Token" class="token-icon">
                <div class="wallet-info">
                    <h2>Twism Token (Tw Demo)</h2>
                    <p>2000 Tw Demo</p>
                    <p>$956.01</p>
                </div>
                <div class="wallet-actions">
                    <button class="btn send-btn">Send</button>
                    <button class="btn receive-btn">Receive</button>
                </div>
            </div>
            <div class="activity-container">
                <h3>Activity</h3>
                <div class="activity-item">
                    <img src="./assets/icons/receive.png" alt="Received">
                    <div>
                        <p>Received</p>
                        <p>Dec 12, <a href="#">See on Polygon</a></p>
                    </div>
                </div>
                <div class="activity-item">
                    <img src="./assets/icons/receive.png" alt="Received">
                    <div>
                        <p>Received</p>
                        <p>Dec 12, <a href="#">See on Polygon</a></p>
                    </div>
                </div>
            </div>
        </div>
    `;
}
*/

/*
function loadWalletScreen() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <div class="wallet-screen">
        <div class="wallet-header">
            <div class="wallet-balance">
                <img src="./assets/icons/token.png" alt="Token Icon" class="wallet-icon">
                <div class="wallet-details">
                    <p class="wallet-name">Twism Token (Tw Demo)</p>
                    <p class="wallet-amount">2000 Tw Demo</p>
                    <p class="wallet-usd">$956.01</p>
                </div>
            </div>
            <div class="wallet-actions">
                <button class="wallet-action-btn">Send</button>
                <button class="wallet-action-btn">Receive</button>
            </div>
        </div>
        <div class="wallet-activity">
            <h2 class="activity-title">ACTIVITY</h2>
            <div class="activity-item">
                <img src="./assets/icons/receive-white.png" alt="Activity Icon">
                <div>
                    <p>Received</p>
                    <p>Dec 12, <a href="#" class="activity-link">See on Polygon</a></p>
                </div>
            </div>
            <div class="activity-item">
                <img src="./assets/icons/receive-white.png" alt="Activity Icon">
                <div>
                    <p>Received</p>
                    <p>Dec 12, <a href="#" class="activity-link">See on Polygon</a></p>
                </div>
            </div>
        </div>
    </div>
    `;
    }
*/

function setupModalHandlers(userData) {
    const modal = document.getElementById('wallet-modal');
    const openModalBtn = document.getElementById('user-avatar');
    const closeModalBtn = document.getElementById('close-modal');
    const copyAddressBtn = document.getElementById('copy-address');
    const toggleKeyBtn = document.getElementById('toggle-key-btn');
    const walletAddress = document.getElementById('wallet-address');
    const privateKey = document.getElementById('private-key');

    // Ensure all required elements exist
    if (!modal || !openModalBtn || !closeModalBtn || !copyAddressBtn || !toggleKeyBtn || !walletAddress || !privateKey) {
        console.error('One or more elements required for modal functionality are missing.');
        return;
    }

    // Add event listeners
    console.log('Open Modal Button:', openModalBtn); // Check if null
    if (!openModalBtn) {
        console.error('The avatar (user-avatar) element is not in the DOM.');
        return;
    }
    openModalBtn.addEventListener('click', () => {
        console.log('Avatar clicked!'); // Confirm event is triggered
        modal.classList.remove('hidden');
    });
    
    /*
    openModalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });
    */

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    copyAddressBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(walletAddress.textContent)
            .then(() => alert('Address copied to clipboard!'))
            .catch(err => alert('Failed to copy address.'));
    });

    toggleKeyBtn.addEventListener('click', () => {
        if (privateKey.textContent === '******') {
            privateKey.textContent = userData.privateKey || '0xABC123...'; // Replace with actual key
        } else {
            privateKey.textContent = '******';
        }
    });

    // Add wallet screen HTML
}