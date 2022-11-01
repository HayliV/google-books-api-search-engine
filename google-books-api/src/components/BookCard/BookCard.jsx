import React from "react";
import style from "./BookCard.module.scss";
import { useState } from "react";

const BookCard = ({
    image,
    title,
    author,
    description,
    language,
    rating,
    publisher,
    date,
    genre,
}) => {
    const [isShown, setIsShown] = useState(false);

    const handleMouseClick = () => {
        setIsShown((current) => !current);
    };

    return (
        <section className={style.Card} onClick={handleMouseClick}>
            <div className={style.Card__bookcard}>
                <div className={style.Card__header}>
                    <img
                        className={style.Card__img}
                        src={`http://books.google.com/books/content?id=${image}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                        alt={title}
                    />
                    <div>
                        <h3 className={style.Card__title}>{title}</h3>
                        <h3 className={style.Card__author}> {author}</h3>
                    </div>
                </div>
                <div>
                    <p> {description}</p>
                </div>
            </div>
            {isShown && (
                <div className={style.Card__centred}>
                    <h1>Title: {title}</h1>
                    <h3>Author: {author}</h3>
                    <h3>Description: {description}</h3>
                    <h3>Language: {language}</h3>
                    <h3>Rating: {rating}</h3>
                    <h3>Publisher: {publisher}</h3>
                    <h3>Published Date: {date}</h3>
                    <h3>Genre: {genre}</h3>
                </div>
            )}
        </section>
    );
};

export default BookCard;
