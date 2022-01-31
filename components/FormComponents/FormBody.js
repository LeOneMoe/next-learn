import classes from "./Form.module.css"

const FormBody = ({children, onSubmit, buttonLabel}) => {
    return (
        <form className={classes.form} onSubmit={onSubmit}>
            {children}

            <button type="submit">
                {buttonLabel}
            </button>
        </form>
    )
}

export {FormBody}
