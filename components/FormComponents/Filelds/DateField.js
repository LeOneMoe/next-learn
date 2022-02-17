import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {DesktopDatePicker, LocalizationProvider} from "@mui/lab";
import Input from "@mui/material/Input";
import classes from "../Form.module.css";

const DateField = ({label, name, value, onChange, onBlur, error, inputFormat}) => {
    return (
        <div className={classes.textField}>
            <div className={classes.label}>{label}</div>

            <div className={classes.wrapper}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        className={classes.input}
                        disableFuture
                        inputFormat={inputFormat}
                        value={value}
                        name={name}
                        onChange={date => onChange(name, date)}
                        onBlur={onBlur}
                        renderInput={(params) => <Input disableUnderline className={classes.input} {...params} />}

                    />
                </LocalizationProvider>
            </div>

            {error && (
                <div className={classes.error}>
                    {error}
                </div>
            )}
        </div>
    )
}

export {DateField}
