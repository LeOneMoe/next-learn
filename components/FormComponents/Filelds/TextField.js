import classes from "../Form.module.css"

const TextField = ({label, name, placeholder, value, handleChange, handleBlur, error, width = 300}) => {
    return (
        <div className={classes.field}>
            <div className={classes.label}>{label}</div>

            <div className={classes.fieldWrapper} style={{width: width + `px`}}>
                <input
                    className={classes.input}
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
