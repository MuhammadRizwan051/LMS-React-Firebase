import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyButton from '../Component/Button'
import Input from '../Component/Input'
import SelectBox from '../Component/Select'
import SMGrid from '../Component/SMGrid'
import { getData, sendData } from '../config/firebasemethod'


function Cities() {
    const [model, setModel] = useState({})
    const [list, setList] = useState([])

    let saveCity = () => {
        console.log(model)
        sendData(model, 'cities').then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    let getCityData = () => {
        getData('cities').then((res) => {
            console.log(res)
            setList(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getCityData()
    }, [])

    return (
        <>
            <Container>
                <h1>Cities</h1>
                <Grid container>
                    <Grid item md={4} sx={{ padding: 2 }}>
                        <SelectBox datasource={[]} onChange={(e) => setModel({ ...model, countryCode: e.target.value })} displayField='countryName' valueField='countryCode' label='Country' nodeName='countries' />
                    </Grid>
                    <Grid item md={4} sx={{ padding: 2 }}>
                        <Input label='City Name' onChange={(e) => setModel({ ...model, cityName: e.target.value })} />
                    </Grid>
                    <Grid item md={4} sx={{ padding: 2 }}>
                        <Input label='City Code' onChange={(e) => setModel({ ...model, cityCode: e.target.value })} />
                    </Grid>
                    <Grid item md={4} sx={{ padding: 2 }}>
                        <MyButton label='Save' onClick={saveCity} />
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <SMGrid datasource={list} Cols={[
                    {
                        displayName: 'Id',
                        key: 'id'
                    },
                    {
                        displayName: 'CityName',
                        key: 'cityName'
                    },
                    {
                        displayName: 'CityCode',
                        key: 'cityCode'
                    },
                    {
                        displayName: 'CountryCode',
                        key: 'countryCode'
                    },
                ]} />
            </Container>
        </>
    )
}

export default Cities