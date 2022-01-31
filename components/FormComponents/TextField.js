import classes from "./Form.module.css"

const TextField = ({label, name, value, onChange, onBlur, error}) => {
    return (
        <div className={classes.textField}>
            <div className={classes.label}>{label}</div>

            <div className={classes.wrapper}>
                <input
                    className={classes.input}
                    type="text"
                    name={name}
                    placeholder={label}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </div>

            {error && (
                <div>
                    {error}
                </div>
            )}
        </div>
    )
}

export {TextField}
