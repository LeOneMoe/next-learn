import * as React from 'react';
import NumberFormat from 'react-number-format';
import Input from '@mui/material/Input';
import classes from "../Form.module.css";


const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const {onChange, ...other} = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
            decimalScale={2}
            prefix="₽ "
        />
    );
});

function MoneyField({label, name, placeholder, value, onChange, onBlur, error}) {
    return (

        <div className={classes.textField}>
            <div className={classes.label}>{label}</div>

            <div className={classes.wrapper}>
                <Input
                    className={classes.input}
                    disableUnderline={true}
                    fullWidth
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    inputComponent={NumberFormatCustom}

                />
            </div>

            {error && (
                <div className={classes.error}>
                    {error}
                </div>
            )}
        </div>
    );
}

export {MoneyField}
