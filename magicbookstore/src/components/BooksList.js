import React from "react";
// import PropTypes from "prop-types";
import Book from "./Book";
import { connect } from "react-redux";

function mapStateToProps(state) {
  const { books } = state;
  return { books };
}

const BooksList = ({ books }) => {
  return (
    <div>
      <div>
        {books.map(book => (
          // <Book key={book.id} {...book} />
          <Book
            key={book.id}
            book={book}
            // title={book.title}
            // category={book.category}
          />
        ))}
      </div>
    </div>
  );
};

// export default BooksList;
export default connect(mapStateToProps, null)(BooksList);
