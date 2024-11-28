const TWDemo = artifacts.require("TWDemo");

module.exports = function (deployer) {
  deployer.deploy(
    TWDemo,
    "0x42F18CaCf14BCD982793FbE704d2586545c84F49",  // Replace with actual Community wallet address
    "0x7a3e1dEFB5D1688Fae028428fFaD3e5d2583d1E8",  // Replace with actual Merchant Adoption wallet address
    "0x78600f795E29AEF92B48cBc096848Ae45151778C",  // Replace with actual Ecosystem Development wallet address
    "0xf8645a00d97a6f766561f3A907B63Bf629BCCf24",  // Replace with actual Team and Advisors wallet address
    "0x0443766d8f0FF2D2fDA860Eb7E7E87Ef417A937A",  // Replace with actual Liquidity and Exchange wallet address
    "0xF4868B62098bEC66A0EEeD9f0477Db3923bB0096"   // Replace with actual Reserve Fund wallet address
  );
};