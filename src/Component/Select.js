import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

function SelectBox(props) {
    const { label, value, onChange, disabled, datasource, required, fullWidth, displayField, valueField } = props
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    required={required}
                    fullWidth={true}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={onChange}
                    disabled={disabled}
                >
                    {datasource && datasource.length > 0 ? datasource.map((e, i) => <MenuItem value={e[valueField ? valueField : 'id']} key={i}>
                        {e[displayField ? displayField : 'fullName']}</MenuItem>) : null}
                </Select>
            </FormControl>
        </>
    )
}

export default SelectBox


// let obj = {
//     id: 1,
//     fullName: 'abc'
// }
// console.log(obj.fullName) or console.log(obj['fullName'])