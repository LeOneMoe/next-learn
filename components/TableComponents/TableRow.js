import classes from "../TableComponents/Table.module.css";

const TableRow = ({children}) => {
    return (
        <div className={classes.row}>{children}</div>
    )
}

export default TableRow
