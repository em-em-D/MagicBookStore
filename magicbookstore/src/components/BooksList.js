import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from './Book';

function mapStateToProps(state) {
  const { books } = state;
  return { books };
}

const BooksList = ({ books }) => (
  <div>
    <div>
      {books.map(book => (
        // <Book key={book.id} {...book} />
        <Book key={book.id} book={book} />
      ))}
    </div>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// export default BooksList;
export default connect(mapStateToProps, null)(BooksList);
