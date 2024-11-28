// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TWDemo is ERC20, Ownable {
    // Total token supply
    uint256 private constant TOTAL_SUPPLY = 1_000_000_000 * 10 ** 18; // 1 Billion tokens with 18 decimals

    // Distribution percentages (as fractions of total supply)
    uint256 private constant COMMUNITY_INCENTIVES = (TOTAL_SUPPLY * 35) / 100; // 35%
    uint256 private constant MERCHANT_ADOPTION_FUND = (TOTAL_SUPPLY * 20) / 100; // 20%
    uint256 private constant ECOSYSTEM_DEVELOPMENT = (TOTAL_SUPPLY * 20) / 100; // 20%
    uint256 private constant TEAM_AND_ADVISORS = (TOTAL_SUPPLY * 10) / 100; // 10%
    uint256 private constant LIQUIDITY_AND_EXCHANGE = (TOTAL_SUPPLY * 10) / 100; // 10%
    uint256 private constant RESERVE_FUND = (TOTAL_SUPPLY * 5) / 100; // 5%

    // Addresses for each allocation
    address public communityIncentivesWallet;
    address public merchantAdoptionWallet;
    address public ecosystemDevelopmentWallet;
    address public teamAndAdvisorsWallet;
    address public liquidityAndExchangeWallet;
    address public reserveFundWallet;

    constructor(
        address _communityIncentivesWallet,
        address _merchantAdoptionWallet,
        address _ecosystemDevelopmentWallet,
        address _teamAndAdvisorsWallet,
        address _liquidityAndExchangeWallet,
        address _reserveFundWallet
    ) ERC20("TW Demo", "TWDemo") Ownable(msg.sender) {
        // Set allocation wallets
        communityIncentivesWallet = _communityIncentivesWallet;
        merchantAdoptionWallet = _merchantAdoptionWallet;
        ecosystemDevelopmentWallet = _ecosystemDevelopmentWallet;
        teamAndAdvisorsWallet = _teamAndAdvisorsWallet;
        liquidityAndExchangeWallet = _liquidityAndExchangeWallet;
        reserveFundWallet = _reserveFundWallet;

        // Distribute tokens
        _mint(communityIncentivesWallet, COMMUNITY_INCENTIVES);
        _mint(merchantAdoptionWallet, MERCHANT_ADOPTION_FUND);
        _mint(ecosystemDevelopmentWallet, ECOSYSTEM_DEVELOPMENT);
        _mint(teamAndAdvisorsWallet, TEAM_AND_ADVISORS);
        _mint(liquidityAndExchangeWallet, LIQUIDITY_AND_EXCHANGE);
        _mint(reserveFundWallet, RESERVE_FUND);
    }

    // Additional functionality for minting or burning (optional)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public onlyOwner {
        _burn(msg.sender, amount);
    }
}