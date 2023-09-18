# Decentralized Crowdfunding Application

This is a decentralized crowdfunding application built using Solidity and the Ethereum blockchain. It operates on the Goerli testnet, allowing users to create and contribute to crowdfunding campaigns using Ethereum. To set up and run the application, please follow the steps outlined below.

## Prerequisites

Before you can use this crowdfunding application, ensure that you have the following prerequisites installed:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).
- Truffle: Install it globally using npm:
  
  ```bash
  npm install -g truffle
  ```

- MetaMask: You need the MetaMask browser extension to interact with Ethereum-based applications. Install it in your browser.

## Setting Up

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/vijay-vardhan-reddy/crowdfunding-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd crowdfunding-app
   ```

3. Install project dependencies using npm:

   ```bash
   npm install
   ```

4. Copy the Goerli testnet URL from Infura and paste it into the `web3.js` file:

   ```javascript
   const infuraUrl = 'YOUR_INFURA_GOERLI_URL_HERE';
   ```

5. Deploy the smart contract by going into the Ethereum directory:

   ```bash
   cd Ethereum
   ```

6. Install the Truffle HDWalletProvider:

   ```bash
   npm install @truffle/hdwallet-provider
   ```

7. After installing the HDWalletProvider, execute the deployment script:

   ```bash
   node deploy.js
   ```

   This will deploy the crowdfunding smart contract to the Goerli testnet. Make sure to keep note of the contract address displayed in the console after deployment.

8. Copy the contract address you obtained in step 7 and paste it into the `factory.js` file in the project root:

   ```javascript
   const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';
   ```

## Usage

- Run the application:

  ```bash
  npm start
  ```

- Open your web browser and go to `http://localhost:3000` to access the decentralized crowdfunding application.

- Use MetaMask to connect to the Goerli testnet and fund campaigns or create your own campaigns.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. We welcome contributions from the community!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Enjoy using and experimenting with this decentralized crowdfunding application on the Ethereum Goerli testnet! If you encounter any issues or have questions, feel free to reach out to us.