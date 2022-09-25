import createBookService from "../services/createBook.service";

const createBookController = (request, response) => {
  const { title, author, year, owner_id } = request.body;

  const book = createBookService(title, author, year, owner_id);

  return response.json(book);
};

export default createBookController;
