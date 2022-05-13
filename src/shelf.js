function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    var pushed = shelf.unshift(book);
    return pushed;
  }
}
function unshelfBook(bookName, shelf) {
   for(var i = 0; i < shelf.length; i++) {
     if (shelf[i].title === bookName) {
       shelf.splice(i, 1);
     }
   }
}
function listTitles(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    console.log(book.title)
  }
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
