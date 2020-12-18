const {
  index,
  show,
  create,
  update,
  destroy
} = require('../controllers/books');

module.exports = router => {
  // localhost:4000/books
  router.get('/books', index);

  // localhost:4000/books/12345
  router.get('/books/:id', show);
  

  // localhost:4000/books
  router.post('/books', create);

  // localhost:4000/books/update
  router.post('/books/update', update)

  // localhost:4000/books/destroy
  router.post('/books/destroy', destroy);
};