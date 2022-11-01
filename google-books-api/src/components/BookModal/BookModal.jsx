import React from "react";

// Trying to make book modal

const BookModal = ({ show, item, title, author }) => {
    const [isShown, setIsShown] = useState(true);

    const handleMouseClick = () => {
        setIsShown(true);
    };

    const handleClose = () => {
        setIsShown(false);
    };

    return (
        <div>
            <h1>{title}</h1>
            <h3>{author}</h3>
        </div>
    );
};

export default BookModal;
