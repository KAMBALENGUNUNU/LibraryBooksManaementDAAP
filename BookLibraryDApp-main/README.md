# Decentralized Book Library Management DApp

## Project Description
The Decentralized Book Library Management DApp is a decentralized application built on the Ethereum blockchain to manage a library's book records securely and transparently. The project aims to overcome challenges faced by traditional library management systems, such as centralized control, data manipulation, and lack of transparency. This DApp allows users to input and retrieve details of books such as title, author, and number of copies through a user-friendly front end. The smart contract, named `BookLibrary.sol`, manages all book records on the blockchain.

## Features
- **Smart Contract Management:** A Solidity smart contract manages book records, storing details such as title, author, and the number of copies available.
- **User-Friendly Interface:** An HTML and CSS-based front end allows users to interact with the smart contract easily.
- **Blockchain Integration:** The DApp integrates with MetaMask, enabling users to perform transactions on the Ethereum blockchain.
- **Testnet Deployment:** The smart contract is deployed on an Ethereum testnet (e.g., Ropsten, Rinkeby) for testing and demonstration purposes.

## Project Structure
- **Smart Contract:** The `BookLibrary.sol` smart contract handles the core functionality of the DApp, including adding and retrieving book details.
- **Front End:** The front end is built using HTML and CSS, providing a clean and intuitive interface for users to interact with the smart contract.
- **Deployment Script:** A JavaScript script (`deploy.js`) is used to deploy the smart contract on an Ethereum testnet.
- **Interaction Script:** JavaScript code is embedded in the HTML file to facilitate interaction with the smart contract using MetaMask.

## Installation and Setup
1. **Clone the Repository:**
    ```bash
    git clone https://github.com/KAMBALENGUNUNU/book-library-dapp.git
    cd book-library-dapp
    ```

2. **Install Dependencies:**
    Ensure you have Node.js and Hardhat installed:
    ```bash
    npm install --save-dev hardhat
    ```

3. **Compile the Smart Contract:**
    ```bash
    npx hardhat compile
    ```

4. **Deploy the Smart Contract:**
    Deploy the smart contract on a testnet (e.g., Ropsten):
    ```bash
    npx hardhat run scripts/deploy.js --network ropsten
    ```

5. **Run the DApp:**
    Open the `index.html` file in your web browser to interact with the DApp.

## Usage
1. **Add a New Book:**
   - Enter the book title, author, and number of copies in the form.
   - Click on "Add Book" to submit the details. This triggers a transaction that adds the book record to the blockchain.

2. **Retrieve Book Details:**
   - Enter the book ID in the form and click on "Get Details" to fetch the book information from the blockchain.

## Technologies Used
- **Solidity:** Smart contract development.
- **Ethereum:** Blockchain platform.
- **Hardhat:** Development environment for Ethereum.
- **MetaMask:** Ethereum wallet for interacting with the DApp.
- **HTML & CSS:** Front-end development.

## Project Deliverables
- `BookLibrary.sol`: Smart contract for managing book records.
- `index.html`: User interface for interacting with the smart contract.
- `deploy.js`: Script for deploying the smart contract on an Ethereum testnet.
- Interaction scripts embedded within `index.html` for communication with MetaMask and the smart contract.

## Future Enhancements
- Implement user authentication to allow library members to borrow books.
- Add a function to update or delete book records.
- Enhance the user interface with additional features like book search and sorting.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
