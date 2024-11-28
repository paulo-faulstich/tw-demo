// Export the loadHomeScreen function
export default function loadHomeScreen(userData) {
    const app = document.getElementById('app');
    
    // Populate the home screen HTML
    app.innerHTML = `
        <div id="home-container">
            <header>
                <div class="user-info">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                    <p>Good Evening, ${userData.name || 'User'}!</p>
                    <p class="location">Santa Barbara, CA</p>
                </div>
                <div class="header-icons">
                    <span class="search-icon">🔍</span>
                    <span class="bell-icon">🔔</span>
                </div>
            </header>
            <main>
                <div class="balance-container">
                    <p>Total Balance</p>
                    <p class="balance">${userData.balance || 0} TW Demo</p>
                </div>
            </main>
            <footer>
                <div class="nav-item active">🏠 Discover</div>
                <div class="nav-item">🛍️ Merchants</div>
                <div class="nav-item">👛 Wallet</div>
            </footer>
        </div>
    `;

    // Add additional functionality if needed (e.g., navigation or log out handlers)
    setupLogOut();
    setupNav();
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