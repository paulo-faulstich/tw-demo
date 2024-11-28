// Export the loadHomeScreen function
export default function loadHomeScreen(userData) {
    const app = document.getElementById('app');

    app.innerHTML = `
        <div id="home-container">
            <header class="home-header">
                <div class="user-info">
                    <img src="https://via.placeholder.com/40" alt="User Avatar" class="user-avatar">
                    <div class="user-text">
                        <p class="greeting">Good Evening, ${userData.name || 'User'}!</p>
                        <p class="location">Santa Barbara, CA</p>
                    </div>
                </div>
                <div class="header-icons">
                    <span class="icon">🔍</span>
                    <span class="icon">🔔</span>
                </div>
            </header>
            <main class="balance-section">
                <div class="balance-card">
                    <p>Total Balance</p>
                    <p class="balance">${userData.balance || 0} TW Demo</p>
                </div>
            </main>
            <footer class="home-footer">
                <div class="nav-item active">
                    <span>🏠</span>
                    <p>Discover</p>
                </div>
                <div class="nav-item">
                    <span>🛍️</span>
                    <p>Merchants</p>
                </div>
                <div class="nav-item">
                    <span>👛</span>
                    <p>Wallet</p>
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