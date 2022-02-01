import classes from "./Form.module.css"

const TextField = ({label, name, placeholder, value, onChange, onBlur, error}) => {
    return (
        <div className={classes.textField}>
            <div className={classes.label}>{label}</div>

            <div className={classes.wrapper}>
                <input
                    className={classes.input}
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>

            {error && (
                <div className={classes.error}>
                    {error}
                </div>
            )}
        </div>
    )
}

export {TextField}
