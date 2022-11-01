import styles from "./Search.module.scss";
import { useState } from "react";

const Search = ({ onSearch, onInputChange }) => {
    const [keyword, setKeyWord] = useState("");

    return (
        <div className={styles.Search}>
            <h1 className={styles.Search__title}>
                Search for a book, an author or genre
            </h1>

            <div>
                <form className={styles.Search__form} onSubmit={onSearch}>
                    <input
                        className={styles.Search__input}
                        type="search"
                        placeholder="Jane Austen, Kafka on the Shore, mystery..."
                        defaultValue={keyword}
                        onChange={onInputChange}></input>
                    <button className={styles.Search__button} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Search;
