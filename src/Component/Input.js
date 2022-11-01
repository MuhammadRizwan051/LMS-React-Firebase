import React from 'react'
import { TextField } from '@mui/material'

function Input(props) {
    const {label, onChange, value, type, disabled, required} = props
    return (
        <>
            <TextField fullWidth id="standard-basic" label={label} onChange={onChange} value={value} type={type} required={required} variant="outlined" />

        </>
    )
}

export default Input