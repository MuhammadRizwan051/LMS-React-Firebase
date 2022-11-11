import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import MyButton from '../Component/Button'
import Input from '../Component/Input'
import { sendData } from '../config/firebasemethod'


function Countries() {
    const [model, setModel] = useState({})

    let saveCountry = () => {
        console.log(model)
        sendData(model, 'countries').then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <Container>
                <Grid container>
                    <Grid item md={4} sx={{padding:2}}>
                        <Input label='Country Name' onChange={(e) => setModel({ ...model, countryName: e.target.value})} />
                    </Grid>
                    <Grid item md={4} sx={{padding:2}}>
                        <Input label='Country Code' onChange={(e) => setModel({ ...model, countryCode: e.target.value})} />
                    </Grid>
                    <Grid item md={4} sx={{padding:2}}>
                        <Input label='Currency' onChange={(e) => setModel({ ...model, currency: e.target.value})} />
                    </Grid>
                    <Grid item md={4} sx={{padding:2}}>
                        <MyButton label='Save' onClick={saveCountry} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Countries