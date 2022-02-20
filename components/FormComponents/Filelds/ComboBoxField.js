import classes from "../Form.module.css"
import {Autocomplete, IconButton, Input, TextField} from "@mui/material";
import * as React from "react";
import ClearIcon from '@mui/icons-material/Clear';


const ComboBoxInput = ({...params}) => {
    const {InputProps, InputLabelProps, ...rest} = params

    return (
        <Input
            className={classes.input}
            disableUnderline
            {...rest}
        />
    )
}

const DropDownButton = ({onClick, icon}) => {
    return (
        <IconButton
            onClick={onClick}
        >
            {icon}
        </IconButton>
    )
}

const ClearButton = ({onClick}) => {
    return (
        <IconButton
            onClick={onClick}
        >
            <ClearIcon fontSize={"small"}/>
        </IconButton>
    )
}


const ComboBoxField = ({
                           label,
                           name,
                           placeholder,
                           value,
                           handleChange,
                           handleBlur,
                           error,
                           options,
                           width = 300
                       }) => {


    return (
        <div className={classes.comboBoxField}>
            <div className={classes.label}>{label}</div>

            <div
                style={{width: width + `px`}}
                className={classes.fieldWrapper}
            >
                <Autocomplete
                    name={name}
                    options={options}
                    getOptionLabel={option => option.label}
                    onChange={(_, newValue) => {
                        handleChange(name, newValue ? newValue.key : ``)
                    }}
                    onBlur={handleBlur}
                    disablePortal
                    autoComplete
                    autoHighlight
                    sx={{width: width}}

                    renderInput={(params) =>
                        <TextField
                            {...params}
                            placeholder={placeholder}
                            // value={initial.label}
                        />
                        // <ComboBoxInput
                        //     {...params}
                        //     label={placeholder}
                        // />
                    }
                />

                {/*<ClearButton/>*/}
                {/*<DropDownButton*/}
                {/*    onClick={() => setOpen(isOpen => !isOpen)}*/}
                {/*    icon={open ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>}*/}
                {/*/>*/}
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
