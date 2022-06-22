# Dropp NFT Marketplace

<p align="center">
<img width="600" alt="Screen Shot 2022-06-22 at 3 57 41 PM" src="https://user-images.githubusercontent.com/95723185/175125359-24be2316-579d-44fb-8aea-8d2aea7844f3.png"><img width="600" alt="Screen Shot 2022-06-22 at 3 57 58 PM" src="https://user-images.githubusercontent.com/95723185/175125374-f2908701-cdb6-4e37-b127-b72974193613.png"><img width="600" alt="Screen Shot 2022-06-22 at 3 58 29 PM" src="https://user-images.githubusercontent.com/95723185/175125382-42847d42-ee64-4e6b-97cf-0d48f74a031f.png">
</p>

> Get METAMORPHE NFTs with Dropp Tokens.

Sign in with your wallet and swap some ETH for some Dropp Tokens with the Dropp marketplace, then use them to buy METAMORPHE NFTs. After purchasing NFTs, your transaction information is provided at the bottom of the modal and at the bottom of the homepage. Feel free to view your transaction history anytime with the sidebar -> history page.

Essentially, it's a mini version of Rarible with a few added components.

<p align="center">
<img src="https://user-images.githubusercontent.com/95723185/175124684-6ee61c9f-999c-4693-b9c6-873acca84fcc.gif" alt="animated" />
</p>


> Swap for Dropp Tokens

Using OpenZeppelin's ERC20 and Ownable contracts, the DroppCoin contract consists of a simple `mint(uint256 amount)` function that provides a conversion from ETH to Dropp coin with `require(msg.value == amount * 0.0001 ether, "invalid amount of ether")` and `_mint(msg.sender, amount)`.

[Contract Source](contracts/DroppCoin.sol)

## License

This app is open-source and licensed under the MIT license. For more details, check the [License file](LICENSE).
