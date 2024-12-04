export default function loadWalletScreen(userData) {
    
    const screenContainer = document.getElementById('screen-container');
    
    screenContainer.innerHTML = `        
            <div id="wallet-container">
                <div class="wallet-box">                    
                    <div class="wallet-info">                        
                        <h2>Twism Token (Tw Demo)</h2>
                        <img src="./assets/icons/token.png" alt="Twism Token" class="token-icon">                        
                        <p class="balance">${userData.balance || 0} TW Demo</p>
                        <p>$956.01</p>
                    </div>
                    <div class="wallet-actions">
                        <button class="btn send-btn">
                            <img src="./assets/icons/send-white.png" alt="Send Icon"> Send
                        </button>
                        <button class="btn receive-btn">
                            <img src="./assets/icons/receive-white.png" alt="Receive Icon"> Receive
                        </button>
                    </div>
                </div>
                <div class="activity-container">
                    <h3>Activity</h3>
                    <div class="activity-item">
                        <img src="./assets/icons/send-black.png" alt="Received">
                        <div>
                            <p>Sent</p>
                            <p>Dec 12, <a href="#">See on Polygon</a></p>
                        </div>
                    </div>
                    <div class="activity-item">
                        <img src="./assets/icons/receive-black.png" alt="Received">
                        <div>
                            <p>Received</p>
                            <p>Dec 12, <a href="#">See on Polygon</a></p>
                        </div>
                    </div>
                </div>
            </div>        
    `;
}