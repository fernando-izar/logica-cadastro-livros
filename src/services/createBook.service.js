import { books } from "../database";
import { users } from "../database";

const createBookService = (title, author, year, owner_id) => {
  const user = users.find((user) => user.id === owner_id);

  if (!user) {
    return "Invalid user id";
  }

  const newBook = {
    title,
    author,
    year,
    owner_id,
  };

  books.push(newBook);

  return newBook;
};

export default createBookService;
