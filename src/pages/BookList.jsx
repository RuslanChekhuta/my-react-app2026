import { Book } from "./Book";

const BookList = () => {
  const books = [
    { id: "book-1", title: "React Basics", author: "Ivan Petrov" },
    { id: "book-2", title: "JS for UI", author: "Maria Volkova" },
    { id: "book-3", title: "Frontend Patterns", author: "Petr Smirnov" },
  ];

  return (
    <section>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </section>
  );
};

export default BookList;
