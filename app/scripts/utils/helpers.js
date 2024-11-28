/**
 * Helper function to validate Ethereum addresses.
 * @param {string} address - The Ethereum address to validate.
 * @returns {boolean} True if the address is valid, false otherwise.
 */
export function isValidEthereumAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }