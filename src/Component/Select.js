import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function SelectBox(props) {
    const { label, value, onChange, disabled, datasource } = props
    return (
        <>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select" 
                value={value}    
                label={label}
                // fullWidth
                onChange={onChange}
                disabled={disabled}
            >
                {datasource && datasource.length > 0 ? datasource.map((e, i)=> <MenuItem value={e.fullName} key={i}>{e.fullName}</MenuItem>):null}
            </Select>
            </FormControl>
        </>
    )
}

export default SelectBox