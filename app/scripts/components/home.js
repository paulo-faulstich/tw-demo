// Export the loadHomeScreen function
// Export the loadHomeScreen function
export default function loadHomeScreen(userData) {
    const app = document.getElementById('app');
    const firstName = userData.name ? userData.name.split(' ')[0] : 'User';
    // Populate the home screen HTML
    app.innerHTML = `
    <div id="home-container">
    <header>
    <div class="user-info-container">
        <img src="./assets/icons/avatar.png" alt="User Avatar" class="user-avatar">
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
            <p class="balance">${userData.balance || 0} TW Demo</p>
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
    `;
}

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
function setupNav() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', () => {
            alert(`Navigating to tab ${index + 1}`);
        });
    });
}