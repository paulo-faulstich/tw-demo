const express = require("express");
const { ethers } = require("ethers");
const { getBalance, transferTokens } = require("../services/blockchainService");

const router = express.Router();

// Create Wallet Endpoint
router.post("/create-wallet", (req, res) => {
    console.log(`CALLING CREATE WALLET API`);
    try {
        // Generate a new random wallet
        const wallet = ethers.Wallet.createRandom();

        // Prepare response
        const walletInfo = {
            address: wallet.address, // Public address
            privateKey: wallet.privateKey, // Private key (for demo only)
        };

        console.log("[POST /create-wallet] Wallet created:", walletInfo);

        // Send response
        res.json(walletInfo);
    } catch (err) {
        console.error("[POST /create-wallet] Error creating wallet:", err.message);
        res.status(500).json({ error: "Failed to create wallet" });
    }
});

// Get Balance Endpoint
router.get("/balance/:address", async (req, res) => {
  const address = req.params.address;
  console.log(`[GET /balance] Requested balance for address: ${address}`);
  try {
    const balance = await getBalance(address);
    console.log(`[GET /balance] Balance fetched successfully: ${balance}`);
    res.json({ balance });
  } catch (err) {
    console.error(`[GET /balance] Error fetching balance for address ${address}:`, err.message);
    res.status(500).json({ error: err.message });
  }
});


// Transfer Tokens Endpoint
router.post("/transfer", async (req, res) => {
  const { senderPrivateKey, recipient, amount } = req.body;
  console.log(
    `[POST /transfer] Transfer request received. Sender: [hidden], Recipient: ${recipient}, Amount: ${amount}`
  );
  try {
    const txHash = await transferTokens(senderPrivateKey, recipient, amount);
    console.log(`[POST /transfer] Transfer successful. Transaction Hash: ${txHash}`);
    res.json({ success: true, txHash });
  } catch (err) {
    console.error(`[POST /transfer] Error during transfer. Sender: [hidden], Recipient: ${recipient}, Amount: ${amount}`, err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;