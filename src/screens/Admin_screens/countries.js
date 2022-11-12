import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyButton from '../../Component/Button'
import Input from '../../Component/Input'
import SMGrid from '../../Component/SMGrid'
import { getData, sendData } from '../../config/firebasemethod'
import CircularProgress from '@mui/material/CircularProgress'


function Countries() {
    const [model, setModel] = useState({})
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let saveCountry = () => {
        console.log(model)
        sendData(model, 'countries').then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    let getCountryData = () => {
        setIsLoading(true)
        getData('countries').then((res) => {
            setIsLoading(false)
            console.log(res)
            setList(res)
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }

    useEffect(() => {
        getCountryData()
    }, [])

    return (
        <>
            {isLoading ? <CircularProgress />
                :
                (
                    <>
                        <Container>
                            <h1>Countries</h1>
                            <Grid container>
                                <Grid item md={4} sx={{ padding: 2 }}>
                                    <Input label='Country Name' onChange={(e) => setModel({ ...model, countryName: e.target.value })} />
                                </Grid>
                                <Grid item md={4} sx={{ padding: 2 }}>
                                    <Input label='Country Code' onChange={(e) => setModel({ ...model, countryCode: e.target.value })} />
                                </Grid>
                                <Grid item md={4} sx={{ padding: 2 }}>
                                    <Input label='Currency' onChange={(e) => setModel({ ...model, currency: e.target.value })} />
                                </Grid>
                                <Grid item md={4} sx={{ padding: 2 }}>
                                    <MyButton label='Save' onClick={saveCountry} />
                                </Grid>
                            </Grid>
                        </Container>
                        <Container>
                            <SMGrid datasource={list} onRowClick={(e)=>console.log(e)} Cols={[
                                {
                                    displayName: 'Country Name',
                                    key: 'countryName'
                                },
                                {
                                    displayName: 'Country Code',
                                    key: 'countryCode'
                                },
                                {
                                    displayName: 'Local Currency',
                                    key: 'currency'
                                }
                            ]} />
                        </Container>
                    </>
                )
            }
        </>
    )
}

export default Countries