document.addEventListener('DOMContentLoaded', async function () {
  
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  

    initApp();
});

async function initApp() {
    // Connect to the deployed smart contract
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with your deployed contract address
    const contractABI =  [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "bookId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "author",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "copies",
              "type": "uint256"
            }
          ],
          "name": "BookAdded",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_author",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_copies",
              "type": "uint256"
            }
          ],
          "name": "addBook",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "bookCounter",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "books",
          "outputs": [
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "author",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "copies",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_bookId",
              "type": "uint256"
            }
          ],
          "name": "getBookDetails",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]; // Replace with your contract ABI
    window.bookLibraryContract = new web3.eth.Contract(contractABI, contractAddress);
}

async function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const copies = document.getElementById('copies').value;

    await window.bookLibraryContract.methods.addBook(title, author, copies).send({ from: web3.eth.defaultAccount });
    alert('Book added successfully!');
}

async function getBookDetails() {
    const bookId = document.getElementById('bookId').value;

    try {
        const bookDetails = await window.bookLibraryContract.methods.getBookDetails(bookId).call();
        const bookDetailsDiv = document.getElementById('bookDetails');
        bookDetailsDiv.innerHTML = `<div>
                                    <strong>Title:</strong> ${bookDetails[0]}<br>
                                    <strong>Author:</strong> ${bookDetails[1]}<br>
                                    <strong>Copies:</strong> ${bookDetails[2]}
                                </div>`;
    } catch (error) {
        console.error('Error fetching book details:', error);
        alert('Error fetching book details. Please check the console for more information.');
    }
}
