import React from 'react'
import { TextField } from '@mui/material'

function Input(props) {
    const { label, onChange, value, type, disabled, required, placeholder } = props
    return (
        <>
            <TextField fullWidth id="standard-basic" label={label} onChange={onChange} value={value}
                type={type} disabled={disabled} required={required} placeholder={placeholder} variant="outlined" />
        </>
    )
}

export default Input