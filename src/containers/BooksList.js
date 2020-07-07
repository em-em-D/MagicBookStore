import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

function mapStateToProps(state) {
  const { books } = state;
  return { books };
}

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});
const BooksList = ({ books, removeBook }) => (
  <div>
    <div>
      {books.map(book => (
        <Book key={book.id} book={book} removeBook={removeBook} />
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
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
