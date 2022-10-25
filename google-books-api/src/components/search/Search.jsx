import books from "./books.svg";
import styles from "./Search.module.scss";
import { useState } from "react";

const Search = () => {
    const [keyword, setKeyWord] = useState("");
    const onInputChange = (event) => {
        setKeyWord(event.target.value);
    };

    const getData = async () => {
        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
        );
        const json = await response.json();
        console.log(json.items);
        return json.items;
    };

    const onSearch = (event) => {
        event.preventDefault();
        getData();
    };

    // const keyword = "";

    // const getData = async () => {
    //     const response = await fetch(
    //         `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
    //     );
    //     const json = await response.json();
    //     return json.items;
    // };

    return (
        <div className={styles.Search}>
            <h1>Search for a book, an author or genre</h1>
            <div>
                <form onSubmit={onSearch}>
                    <input
                        type="search"
                        placeholder="Jane Austen, Kafka on the Shore, mystery"
                        value={keyword}
                        onChange={onInputChange}></input>
                    <button type="submit">Search</button>
                </form>
                {/* <img src={books}></img> */}
            </div>
        </div>
    );
};

export default Search;
