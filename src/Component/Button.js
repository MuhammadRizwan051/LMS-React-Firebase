import { Button } from '@mui/material'
import React from 'react'

function MyButton(props) {
    const {variant, onClick, color, label, disabled} = props
    return (
        <>
            <Button variant={variant ?? 'contained'} onClick={onClick} color={color}>{label}</Button>
        </>
    )
}

export default MyButton