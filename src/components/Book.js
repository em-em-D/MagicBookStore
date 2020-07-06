import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeBook } = props;
  const handleRemoveBook = () => removeBook(book.id);

  return (
    <div>
      <div>
        {book.id}
        {book.title}
        {book.category}
        
        <button type="button" onClick={handleRemoveBook} className="remove">
          Remove
        </button>
      
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
