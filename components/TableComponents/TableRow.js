import classes from "../TableComponents/Table.module.css";
import Link from "next/link";

const TableRow = ({children, id}) => {
    return (
        <Link href={`/posts/[id]`} as={`/posts/${id}`} passHref>
            <div className={classes.row}> {children}</div>
        </Link>
    )
}

export default TableRow
