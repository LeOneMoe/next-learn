import classes from "../Form.module.css"
import {Autocomplete, TextField} from "@mui/material";
import * as React from "react";
import {useEffect, useState} from "react";

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

    const [initOption, setInitOption] = useState({key: ``, label: ``})

    useEffect(() => {
        const getInitOption = () => {
            const result = options.find(option => option.key === value)
            setInitOption(result ? result : {key: ``, label: ``})
        }

        if (options) {
            getInitOption()
        }
    }, [options, value])

    return (
        <div className={classes.comboBoxField}>
            <div className={classes.label}>{label}</div>

            <div
                style={{width: width + `px`}}
                className={classes.fieldWrapper}
            >
                <Autocomplete
                    value={initOption}

                    options={options}
                    getOptionLabel={option => option.label}

                    name={name}
                    isOptionEqualToValue={(option, value) => option.key === value.key}

                    onChange={(_, newValue) => {
                        handleChange(name, newValue ? newValue.key : ``)
                    }}
                    onBlur={handleBlur}

                    sx={{width: width}}

                    disablePortal
                    autoComplete
                    autoHighlight

                    renderInput={(params) =>
                        <TextField
                            {...params}
                            placeholder={placeholder}
                            className={classes.comboBoxInput}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    color: "inherit",
                                    fontFamily: "inherit",
                                    "& fieldset": {
                                        border: "inherit",
                                    },
                                    "&.Mui-focused fieldset": {
                                        border: "inherit",
                                    },
                                }
                            }}
                        />
                    }
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

export {ComboBoxField}
