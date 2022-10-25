import React from "react";
import style from "./BookCard.module.scss";
import PropTypes from "prop-types";
import { useState } from "react";

const BookCard = ({ image, title, author, description }) => {
    return (
        <section>
            <img src={image} />
            <div>
                <h3>Title: {title}</h3>
                <h3>Author: {author}</h3>
                <h3>Description: {description}</h3>
            </div>
        </section>
    );
};

BookCard.PropTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
};

export default BookCard;
