import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { getData } from '../config/firebasemethod'

function SelectBox(props) {
    const { label, value, onChange, disabled, datasource, required, fullWidth, displayField, valueField, nodeName } = props

    const [dtSource, setDtSource] = useState(datasource)

    let getNodeData = () => {
        if (nodeName) {
            getData(nodeName).then((res) => {
                console.log(res)
                setDtSource(res)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        getNodeData()
    }, [])

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
                    {dtSource && dtSource.length > 0 ? dtSource.map((e, i) => <MenuItem value={e[valueField ? valueField : 'id']} key={i}>
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


// let obj = {
//     id: 1,
//     title: 'ABC'
// }

// let a = 'title'

// console.log(obj[a])