import Header from "./components/header/Header";
import Search from "./components/search/Search";
import BookList from "./containers/BookList";
import Grid from "./containers/Grid.jsx/Grid";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);
    const [keyword, setKeyWord] = useState("");

    const getData = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
        );
        const json = await response.json();
        const items = json["items"];
        setBooks(items);
        console.log(books);
    };

    const onSearch = (event) => {
        event.preventDefault();
        getData();
    };

    const onInputChange = (event) => {
        setKeyWord(event.target.value);
    };

    return (
        <>
            <Header />
            <Search onSearch={onSearch} onInputChange={onInputChange} />
            <Grid>
                <BookList books={books} />
            </Grid>
        </>
    );
}

export default App;
