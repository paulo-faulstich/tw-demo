export default function loadSignupScreen() {
    const appContainer = document.getElementById('app'); // Reference to the main app container
    appContainer.innerHTML = `
        <div class="signup-screen">
            <h2>Create your account</h2>
            <p>Already have an account? <a href="#" id="login-link">Log in</a></p>
            <form id="signup-form">
                <input type="text" id="name" placeholder="Name" required />
                <input type="email" id="email" placeholder="Email" required />
                <input type="password" id="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    `;

    // Add functionality to the sign-up form
    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (!name || !email) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            const walletResponse = await fetch('http://localhost:3000/api/blockchain/create-wallet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!walletResponse.ok) {
                throw new Error('Failed to create wallet.');
            }

            const walletData = await walletResponse.json();

            // Save user data
            const userData = {
                name,
                email,
                balance: 0,
                walletAddress: walletData.address,
                privateKey: walletData.privateKey,
            };

            localStorage.setItem('userData', JSON.stringify(userData));

            // Redirect to home screen
            import('./home.js').then(({ default: loadHomeScreen }) => {
                loadHomeScreen(userData);
            });
        } catch (err) {
            console.error('Sign-Up Error:', err.message);
            alert('Failed to create an account.');
        }
    });
}