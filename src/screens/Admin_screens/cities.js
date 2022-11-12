import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MyButton from '../../Component/Button'
import Input from '../../Component/Input'
import SelectBox from '../../Component/Select'
import SMGrid from '../../Component/SMGrid'
import { getData, sendData } from '../../config/firebasemethod'
import CircularProgress from '@mui/material/CircularProgress'
import loaderImage from "../../assets/loader.gif";



function Cities() {
    const [model, setModel] = useState({})
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [btnLoading, setBtnLoading] = useState(false)


    let saveCity = () => {
        setBtnLoading(true)
        console.log(model)
        sendData(model, 'cities').then((res) => {
            setBtnLoading(false)
            console.log(res)
        }).catch((err) => {
            setBtnLoading(false)
            console.log(err)
        })
    }

    let getCityData = () => {
        setIsLoading(true)
        getData('cities').then((res) => {
            setIsLoading(false)
            console.log(res)
            setList(res)
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        })
    }

    useEffect(() => {
        getCityData()
    }, [])

    return (
        <>
            {isLoading ? <img src={loaderImage} width='100vw' alt='loader' />
                :
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
                                <MyButton label={btnLoading ? <CircularProgress /> : 'Save'} onClick={saveCity} />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <SMGrid datasource={list} Cols={[
                            {
                                displayName: 'CityCode',
                                key: 'cityCode'
                            },
                            {
                                displayName: 'CityName',
                                key: 'cityName'
                            },
                            {
                                displayName: 'CountryCode',
                                key: 'countryCode'
                            },
                            {
                                displayName: 'Id',
                                key: 'id'
                            }
                        ]} />
                    </Container>
                </>
            }
        </>
    )
}

export default Cities