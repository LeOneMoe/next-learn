import classes from "./Form.module.css"

const ComboBoxField = ({label, name, placeholder, value, onChange, onBlur, error, options}) => {
    return (
        <div className={classes.comboBoxField}>
            <div className={classes.label}>{label}</div>

            <div className={classes.wrapper}>
                <select
                    className={classes.input}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    style={{display: 'block'}}
                >
                    <option value="" label={placeholder}/>
                    {options.map(option =>
                        <option key={option.key} value={option.key} label={option.value}/>
                    )}
                </select>
            </div>

            {error && (
                <div className={classes.error}>
                    {error}
                </div>
            )}
        </div>
    )
}

export {ComboBoxField}
