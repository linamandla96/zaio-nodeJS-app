const fs = require('fs');

const book = {
   
    title : "Harry Potter",
    author : "J.K Rowling"


}
  
const stringBook = JSON.stringify(book);

fs.writeFileSync("1-book.json",stringBook)
//console.log(book);

const dataBuffer = fs.readFileSync('1-book.json');
console.log(dataBuffer.toString())

const JSONdata= JSON.parse(dataBuffer.toString())
//const JSONbook = JSON.parse(stringBook);