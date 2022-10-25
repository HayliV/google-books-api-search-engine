import catlogo from "./cat-logo.svg";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./Header.module.scss";
const Header = () => {
    return (
        <div className={styles.Header}>
            <BrowserRouter>
                <div className={styles.nav}>
                    <nav>
                        <ul>
                            <img src={catlogo}></img>
                            <h1>GOOGLE BOOKS</h1>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element="Home" />
                    <Route path="/about" element="About" />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Header;
