import React from "react";
import BookCard from "../components/BookCard/BookCard";
import PropTypes from "prop-types";

const BookList = (props) => {
    const bookArray = props.bookArray;

    return bookArray.map((book, index) => {
        <BookCard
            key={index}
            image={book.image}
            title={book.title}
            author={book.author}
            description={book.description}
        />;
    });
};

BookList.proptypes = {
    bookArray: PropTypes.array.isRequired,
};

export default BookList;
