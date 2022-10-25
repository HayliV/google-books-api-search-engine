import style from "./Grid.module.scss";

const Grid = (props) => {
    const { children } = props;
    return <div className={style.Grid}>{children}</div>;
};

export default Grid;
