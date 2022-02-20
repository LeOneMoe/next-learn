import * as React from 'react';
import {useState} from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {DesktopDatePicker, LocalizationProvider} from "@mui/lab";
import classes from "../Form.module.css";
import {IconButton, Input} from "@mui/material";
import EventIcon from '@mui/icons-material/Event';

const DateInput = ({...params}) => {
    const {InputProps, ...rest} = params

    return (
        <Input
            className={classes.dateInput}
            disableUnderline
            {...rest}
        />
    )
}

const PickerButton = ({onClick}) => {
    return (
        <IconButton
            onClick={onClick}
        >
            <EventIcon/>
        </IconButton>
    )
}

const DateField = ({label, name, value, handleChange, handleBlur, error, inputFormat, width = 300}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.field}>
            <div className={classes.label}>{label}</div>

            <div className={classes.dateFieldWrapper} style={{width: width + `px`}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        disableFuture
                        disableCloseOnSelect
                        inputFormat={inputFormat}
                        value={value}
                        name={name}
                        onChange={date => {
                            handleChange(name, date)
                            setOpen(false)
                        }}
                        open={open}
                        onBlur={handleBlur}
                        renderInput={(params) =>
                            <DateInput {...params}/>
                        }
                    />
                </LocalizationProvider>

                <PickerButton onClick={() => setOpen(isOpen => !isOpen)}/>
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
