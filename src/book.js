function createTitle(title) {
  return 'The ' + title;
}
function buildMainCharacter(name, age, pronouns) {
   return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}
function saveReview(review, reviews) {
  if (reviews.indexOf(review) === -1) {
  reviews.push(review);
}
  return reviews;
}

function calculatePageCount(bookTitle) {
  var pages = bookTitle.length * 20;
  return pages;
}
function writeBook(bookTitle, mainCharacter, genre) {
  var bookObj = {
    title: bookTitle,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
  // console.log(bookObj);
  return bookObj;
}
function editBook(reducedPages) {
  reducedPages.pageCount = reducedPages.pageCount * .75;
  // console.log(reducedPages.pageCount);
  return reducedPages.pageCount;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
