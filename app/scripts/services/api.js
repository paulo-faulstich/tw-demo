const API_BASE_URL = 'http://localhost:3000/api/blockchain';

/**
 * Calls the backend to create a wallet.
 * @returns {Promise<Object>} The wallet details (address and private key).
 */
export async function createWallet() {
    const response = await fetch(`${API_BASE_URL}/create-wallet`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to create wallet');
    }

    return response.json();
}

export async function getBalance(walletAddress) {
    const response = await fetch(`${API_BASE_URL}/balance/${walletAddress}`);
    if (!response.ok) {
        throw new Error('Failed to fetch balance');
    }

    const data = await response.json();
    const rawBalance = parseFloat(data.balance);

    // Return formatted balance: no unnecessary decimals for whole numbers
    return rawBalance % 1 === 0 ? rawBalance.toFixed(0) : rawBalance.toFixed(2);
}