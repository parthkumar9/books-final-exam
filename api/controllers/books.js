const Book = require('../models/book');

exports.index = async (req, res, next) => {
  try{
    const books = await Book.find();
    res.status(200).json(books);
  }catch(error){
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }

};

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { title, author } = req.body;

    const bk = await Book.create({
      author: author,
      title: title
    });

    res.status(200).json({ message: "Book was created successfully", status: 'success' , book: bk });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, author, title } = req.body;
    console.log(req.body);
    const qt = await Book.findOneAndUpdate({ _id: _id }, {
      author,
      title
    });
    res.status(200).json({ message: "Book was updated successfully", status:'success', book: qt });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Book.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Book was deleted successfully" });
  } catch (error) {
    next(error);
  }
};