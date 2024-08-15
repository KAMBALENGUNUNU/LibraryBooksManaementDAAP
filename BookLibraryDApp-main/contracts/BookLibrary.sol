// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookLibrary{

    address public owner;
    uint256 public bookCounter;

      // books' title, author, no of copies
      struct Book{
        string title;
        string author;
        uint256 copies;
      }

    mapping(uint256 => Book) public books;

    event BookAdded( uint256 indexed bookId, string title, string author, uint256 copies);

    modifier onlyOwner(){
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(){
        owner = msg.sender;
    }
  
    // function to get details of the book

    function addBook(string memory _title, string memory _author, uint256 _copies) public onlyOwner{
        bookCounter++;
        books[bookCounter]= Book({
            title: _title,
            author: _author,
            copies: _copies
        });

        emit BookAdded(bookCounter, _title, _author, _copies);

    }


    // function to display the details of the book
    function getBookDetails( uint256 _bookId) public view returns(string memory, string memory, uint256){
        require(_bookId > 0 && _bookId <= bookCounter, " Invalid Book Id Enter!");
        Book storage book = books[_bookId];
        return (book.title, book.author, book.copies);
    }

}