import BookCard from "../components/BookCard/BookCard";

const BookList = (props) => {
    return (
        props.books?.map((book, index) => (
            <>
                <BookCard
                    key={index}
                    image={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    language={book.volumeInfo.language}
                    rating={book.volumeInfo.averageRating}
                    publisher={book.volumeInfo.publisher}
                    date={book.volumeInfo.publishedDate}
                    genre={book.volumeInfo.categories}
                />
            </>
        )) || (
            <>
                <h1>No results found, please try another search term</h1>
            </>
        )
    );
};

/* Add modal card?- how to link modal card to book card?  */

/* <BookModal
                show={show}
                item={bookItem}
                image={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                description={book.volumeInfo.description}
            /> */

export default BookList;
