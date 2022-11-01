import catlogo from "./cat-logo.svg";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./Header.module.scss";
const Header = () => {
    return (
        <div className={styles.Header}>
            <div>
                <nav>
                    <ul className={styles.Header__list}>
                        <img className={styles.Header__img} src={catlogo}></img>
                        <h1 className={styles.Header__title}>
                            GOOGLE BOOKS API SEARCH ENGINE
                        </h1>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
