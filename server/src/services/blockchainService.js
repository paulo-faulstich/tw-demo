const { ethers, JsonRpcProvider, Contract, BigNumber, formatUnits } = require("ethers");
const path = require("path");
require("dotenv").config();

// Initialize provider and contract
const provider = new JsonRpcProvider(process.env.POLYGON_RPC_URL);
const contractArtifact = require(path.resolve(
    __dirname,
    "../../../smart-contracts/build/contracts/TWDemo.json"
));

const abi = contractArtifact.abi;
const contractAddress = process.env.CONTRACT_ADDRESS
const contract = new Contract(contractAddress, abi, provider);

const getBalance = async (address) => {
    try {
        const balance = await contract.balanceOf(address); // Fetch raw balance
        console.log("Raw balance:", balance); // Debug log
        console.log("Balance type:", typeof balance); // Should log 'bigint'

        // Convert balance (bigint) to a human-readable string
        const formattedBalance = formatUnits(balance, 18); // Use `formatUnits` directly
        console.log("Formatted balance:", formattedBalance); // Debug log
        return formattedBalance;
    } catch (err) {
        console.error("Error fetching balance:", err);
        throw new Error("Failed to fetch balance");
    }
};

const transferTokens = async (senderPrivateKey, recipient, amount) => {
    try {
        console.log("[transferTokens] Starting transfer...");
        console.log(`[transferTokens] Sender Private Key: [hidden]`);
        console.log(`[transferTokens] Recipient: ${recipient}`);
        console.log(`[transferTokens] Amount: ${amount}`);

        // Initialize Wallet and Contract
        const wallet = new ethers.Wallet(senderPrivateKey, provider);
        const contractWithSigner = contract.connect(wallet);

        // Convert amount to Wei
        const amountInWei = ethers.parseUnits(amount.toString(), 18); // Ensure proper conversion
        console.log(`[transferTokens] Amount in Wei: ${amountInWei}`);

        // Execute transfer
        const tx = await contractWithSigner.transfer(recipient, amountInWei);
        console.log(`[transferTokens] Transaction Hash: ${tx.hash}`);

        // Wait for transaction confirmation
        await tx.wait();
        console.log("[transferTokens] Transfer successful!");

        return tx.hash;
    } catch (err) {
        console.error("[transferTokens] Error during transfer:", err.message);
        throw new Error("Failed to transfer tokens");
    }
};

// Export functions
module.exports = { getBalance, transferTokens };